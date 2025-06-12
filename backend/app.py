from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import BertTokenizerFast, TFBertModel
import pandas as pd
import numpy as np
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Chatbot Recommendation Wisata")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"], 
)

# Define project directories
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = str(BASE_DIR / "./saved_model")
DATA_PATH = str(BASE_DIR / "cleaned_data_wisata.csv")

# Load dataset of wisata descriptions
df = pd.read_csv(DATA_PATH, index_col=0)
# Rename dataframe columns to lowercase for consistency with frontend
df.rename(columns={'Name': 'name', 'Description': 'description', 'Categories': 'categories', 'Lokasi': 'location'}, inplace=True)
texts = df['description'].tolist()

# Load tokenizer and model from saved_model directory
tokenizer = BertTokenizerFast.from_pretrained(MODEL_DIR)
model = TFBertModel.from_pretrained(MODEL_DIR)

# Precompute embeddings for all wisata descriptions
print("Computing embeddings for wisata descriptions...")
inputs = tokenizer(texts, padding=True, truncation=True, return_tensors="tf")
outputs = model(**inputs)
embeddings = outputs.pooler_output.numpy()

# Pydantic models for request and response
top_k_default = 3
class ChatRequest(BaseModel):
    message: str
    top_k: int = top_k_default

class ChatResponse(BaseModel):
    reply: str
    recommendations: list

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    message = request.message
    top_k = min(request.top_k, len(embeddings))

    # Encode user message into embedding
    try:
        user_inputs = tokenizer([message], padding=True, truncation=True, max_length=512, return_tensors="tf")
        user_outputs = model(**user_inputs)
        query_emb = user_outputs.pooler_output.numpy()[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Embedding error: {e}")

    # Determine if user message mentions a specific category to filter
    category_list = df['categories'].str.lower().unique()
    message_lower = message.lower()
    filter_mask = None
    for cat in category_list:
        if cat in message_lower:
            filter_mask = df['categories'].str.lower() == cat
            break
    # Prepare data for similarity computation
    if filter_mask is not None:
        df_use = df[filter_mask].reset_index(drop=True)
        embeddings_use = embeddings[filter_mask.values]
    else:
        df_use = df
        embeddings_use = embeddings
    # Compute norms and similarities
    query_norm = np.linalg.norm(query_emb) + 1e-10
    emb_norms = np.linalg.norm(embeddings_use, axis=1)
    sims = np.dot(embeddings_use, query_emb) / (emb_norms * query_norm)

    # Adjust top_k if filtered set is smaller and select most similar descriptions
    top_k = min(request.top_k, len(embeddings_use))
    idxs = np.argpartition(sims, -top_k)[-top_k:]
    idxs = idxs[np.argsort(sims[idxs])[::-1]]

    recs = df.iloc[idxs].reset_index(drop=True)
    rec_list = recs.to_dict(orient="records")
    names = recs['name'].tolist()
    reply = f"Saya merekomendasikan tempat wisata berikut: {', '.join(names)}"
    return ChatResponse(reply=reply, recommendations=rec_list)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app:app", host="0.0.0.0", port=8000, reload=True)