// client/src/components/chatbot/ChatInput.jsx
import React from 'react';
import { Send, Mic, Plus } from 'lucide-react';

function ChatInput({
  inputMessage,
  setInputMessage,
  handleKeyPress,
  handleVoiceInput,
  handleSendMessage,
  isListening,
  inputRef
}) {
  return (
    <div className="flex-shrink-0 px-6 py-4 border-t border-white/20 rounded-b-2xl">
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-white/30">
        <div className="flex items-center space-x-4">
          <button className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-xl">
            <Plus className="w-6 h-6" />
          </button>

          <div className="flex-1 min-w-0 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Continue the conversation..."
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-lg py-2"
            />
          </div>

          <button
            onClick={handleVoiceInput}
            className={`flex-shrink-0 p-2 rounded-xl transition-all duration-300 ${
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
            className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
              inputMessage.trim()
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;