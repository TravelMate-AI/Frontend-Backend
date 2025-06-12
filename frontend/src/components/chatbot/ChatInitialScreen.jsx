// client/src/components/chatbot/ChatInitialScreen.jsx
import React from 'react';
import { Send, Mic, Plus, Plane } from 'lucide-react';

function ChatInitialScreen({
  inputMessage,
  setInputMessage,
  handleKeyPress,
  handleVoiceInput,
  handleSendMessage,
  handleSuggestionClick,
  isListening,
  inputRef
}) {
  const initialSuggestions = [
    "Plan a 5-day trip to Japan",
    "Budget travel tips for Europe",
    "Best beaches in Indonesia",
    "Cultural destinations in Asia"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent animate-fade-in">
            TravelMate AI Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Your intelligent travel companion. Ask me anything about destinations, itineraries, budgets, and travel tips!
          </p>
        </div>

        {/* Input Area */}
        <div className="relative animate-fade-in-delayed-2">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-blue-600 transition-colors p-3 hover:bg-blue-50 rounded-xl">
                <Plus className="w-6 h-6" />
              </button>

              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your next adventure..."
                  className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-lg py-2"
                />
              </div>

              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse shadow-lg'
                    : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Mic className="w-6 h-6" />
              </button>

              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  inputMessage.trim()
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-6 h-6" />
              </button>
            </div>

            {/* Quick suggestions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {initialSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white/80 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-white/30"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(30px); }
          60% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed-2 {
          0% { opacity: 0; transform: translateY(30px); }
          80% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.5s ease-out; }
        .animate-fade-in-delayed-2 { animation: fade-in-delayed-2 2s ease-out; }
      `}</style>
    </div>
  );
}

export default ChatInitialScreen;