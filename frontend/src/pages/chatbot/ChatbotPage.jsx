import React, { useState, useRef, useEffect } from 'react'
import { Send, Mic, Plus, Settings, ThumbsUp, ThumbsDown, Volume2, Edit, Copy, RotateCcw, Plane } from 'lucide-react'

function Chatbot() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [hasStartedChat, setHasStartedChat] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  // useEffect(() => {
  //   scrollToBottom()
  // }, [messages])

  // Simulasi response dari ML Backend
  const simulateMLResponse = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "Halo! Saya TravelMateAI, asisten perjalanan Anda. Saya siap membantu merencanakan perjalanan impian Anda! Ke mana tujuan Anda selanjutnya?",
          "Terima kasih atas pertanyaannya! Saya dapat membantu Anda menemukan destinasi terbaik, merencanakan itinerary, dan memberikan rekomendasi yang dipersonalisasi.",
          "Sebagai AI travel assistant, saya dapat membantu Anda dengan informasi destinasi, tips perjalanan, budgeting, dan banyak lagi. Ada yang bisa saya bantu?",
          "Saya dengan senang hati membantu merencanakan perjalanan Anda! Apakah Anda memiliki destinasi tertentu dalam pikiran atau butuh saran destinasi?"
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        resolve({
          message: randomResponse,
          suggestions: [
            "Rekomendasikan destinasi untuk liburan keluarga",
            "Buatkan itinerary 3 hari di Bali",
            "Tips budget traveling ke Jepang",
            "Tempat wisata terbaik di Indonesia"
          ],
          confidence: 0.95,
          intent: 'travel_planning'
        })
      }, 1500)
    })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    if (!hasStartedChat) {
      setHasStartedChat(true)
    }

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      const mlResponse = await simulateMLResponse(inputMessage)
      
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: mlResponse.message,
        timestamp: new Date().toLocaleTimeString(),
        suggestions: mlResponse.suggestions || [],
        confidence: mlResponse.confidence || 0,
        intent: mlResponse.intent
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Error processing message:', error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleVoiceInput = async () => {
    if (!isListening) {
      setIsListening(true)
      setTimeout(() => {
        setIsListening(false)
      }, 3000)
    } else {
      setIsListening(false)
    }
  }

  const handleFeedback = async (messageId, feedback) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, userFeedback: feedback }
        : msg
    ))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion)
    inputRef.current?.focus()
  }

  // Tampilan awal sebelum chat dimulai
  if (!hasStartedChat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="w-full max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Plane className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent animate-fade-in">
              TravelMate AI Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
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
            </div>
            
            {/* Quick suggestions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Plan a 5-day trip to Japan",
                "Budget travel tips for Europe", 
                "Best beaches in Indonesia",
                "Cultural destinations in Asia"
              ].map((suggestion, index) => (
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
    )
  }

  // Mode chat setelah user mulai chat
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-white/20 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TravelMate AI</h2>
            <p className="text-sm text-gray-500">Your Travel Assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
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
                    <div className="flex-1">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                        <p className="text-gray-800 leading-relaxed">{msg.message}</p>
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-lg border-t border-white/20 px-6 py-6 sticky bottom-0">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-xl border border-white/30">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-xl">
                <Plus className="w-6 h-6" />
              </button>
              
              <div className="flex-1 relative">
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
                className={`p-2 rounded-xl transition-all duration-300 ${
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot