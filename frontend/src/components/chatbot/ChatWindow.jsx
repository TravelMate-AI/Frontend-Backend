// client/src/components/chatbot/ChatWindow.jsx
import React from 'react';
import { Plane, ThumbsUp, ThumbsDown, Volume2, Copy } from 'lucide-react';

function ChatWindow({ messages, messagesEndRef, isTyping, handleFeedback, handleSuggestionClick }) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent hover:scrollbar-thumb-blue-300">
      <div className="space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'user' ? (
              <div className="max-w-2xl">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl px-6 py-4 shadow-lg">
                  <p className="text-white font-medium">{msg.message}</p>
                </div>
                <div className="text-right mt-2">
                  <span className="text-xs text-gray-400">{msg.timestamp}</span>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl w-full">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                      <p className="text-gray-800 leading-relaxed break-words">{msg.message}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2 mt-4">
                      <button className="p-2 hover:bg-white/60 rounded-lg transition-colors backdrop-blur-sm">
                        <Copy className="w-4 h-4 text-gray-500" />
                      </button>
                      <button
                        onClick={() => handleFeedback(msg.id, 'positive')}
                        className={`p-2 hover:bg-white/60 rounded-lg transition-colors backdrop-blur-sm ${
                          msg.userFeedback === 'positive' ? 'text-green-500' : 'text-gray-500'
                        }`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleFeedback(msg.id, 'negative')}
                        className={`p-2 hover:bg-white/60 rounded-lg transition-colors backdrop-blur-sm ${
                          msg.userFeedback === 'negative' ? 'text-red-500' : 'text-gray-500'
                        }`}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white/60 rounded-lg transition-colors backdrop-blur-sm">
                        <Volume2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    {/* Suggestions */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="mt-6 space-y-3">
                        <p className="text-sm font-medium text-gray-600">Suggested questions:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {msg.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-left p-4 bg-white/60 hover:bg-white/80 rounded-xl transition-all duration-300 text-sm border border-white/30 hover:border-blue-200 hover:shadow-md transform hover:scale-105"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-2">
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl animate-pulse">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className='h-4' />
      </div>
    </div>
  );
}

export default ChatWindow;