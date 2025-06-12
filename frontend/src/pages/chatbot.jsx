// client/src/pages/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Plane } from 'lucide-react';
import ChatInitialScreen from '../components/chatbot/ChatInitialScreen'; // Path disesuaikan
import ChatWindow from '../components/chatbot/ChatWindow';             // Path disesuaikan
import ChatInput from '../components/chatbot/ChatInput';               // Path disesuaikan
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]); // Gabungkan dependencies karena keduanya memicu scroll

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString('id-ID'), // Format waktu Indonesia
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const mlResponse = await response.json();

      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: mlResponse.reply,
        timestamp: new Date().toLocaleTimeString('id-ID'),
        suggestions: [],
        confidence: 0,
        intent: '',
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error processing message:', error);
      // Tambahkan pesan error ke UI jika perlu
      setMessages(prev => [...prev, {
        id: Date.now() + 2,
        type: 'bot',
        message: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        timestamp: new Date().toLocaleTimeString('id-ID'),
        error: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleVoiceInput = async () => {
    // Logika untuk voice input (memerlukan Web Speech API atau library eksternal)
    // Untuk demo ini, kita hanya akan mengubah status isListening
    if (!isListening) {
      console.log("Mulai mendengarkan...");
      setIsListening(true);
      // Di sini Anda akan mengintegrasikan Web Speech API atau library STT
      setTimeout(() => { // Simulasi berhenti mendengarkan setelah 3 detik
        setIsListening(false);
        console.log("Berhenti mendengarkan.");
        // Di sini Anda akan mendapatkan teks dari suara dan mengaturnya ke setInputMessage
        // setInputMessage("Contoh input dari suara...");
      }, 3000);
    } else {
      console.log("Berhenti mendengarkan secara manual.");
      setIsListening(false);
    }
  };

  const handleFeedback = (messageId, feedback) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId
        ? { ...msg, userFeedback: feedback }
        : msg
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    inputRef.current?.focus();
    // Opsional: Langsung kirim saran sebagai pesan jika Anda menginginkannya
    // handleSendMessage();
  };

  // Tampilan awal sebelum chat dimulai
  if (!hasStartedChat) {
    return (
      <ChatInitialScreen
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleKeyPress={handleKeyPress}
        handleVoiceInput={handleVoiceInput}
        handleSendMessage={handleSendMessage}
        handleSuggestionClick={handleSuggestionClick}
        isListening={isListening}
        inputRef={inputRef}
      />
    );
  }

  // Mode chat setelah user mulai chat
  return (
    <div className="flex flex-col gap-20 items-center justify-center p-10 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Chatbot Container */}
      <div className="w-full max-w-5xl h-[80vh] bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 flex flex-col relative z-10">

        {/* Header - Fixed dalam container */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-white/20 rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TravelMate AI</h2>
              <p className="text-sm text-gray-500">Your Travel Assistant</p>
            </div>
          </div>
        </div>

        {/* Chat Messages - Scrollable Area dalam container */}
        <ChatWindow messages={messages} messagesEndRef={messagesEndRef} isTyping={isTyping} handleFeedback={handleFeedback} handleSuggestionClick={handleSuggestionClick} />

        {/* Input Area - Fixed dalam container */}
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleKeyPress={handleKeyPress}
          handleVoiceInput={handleVoiceInput}
          handleSendMessage={handleSendMessage}
          isListening={isListening}
          inputRef={inputRef}
        />
      </div>

      {/* Features Section - Di bawah chatbot */}
      <div className='px-10 py-6 w-full max-w-5xl'>
        <HowItWorks />
      </div>
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}

export default Chatbot;
