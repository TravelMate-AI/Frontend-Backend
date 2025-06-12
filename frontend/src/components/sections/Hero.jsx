import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'


function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'with The Power of AI'

  useEffect(() => {
    setIsVisible(true)
    
    // Start typing animation after other animations
    const typingDelay = setTimeout(() => {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1000)
        }
      }, 100) // Adjust speed here (lower = faster)

      return () => clearInterval(typingInterval)
    }, 1500) // Start typing after 1.5 seconds

    return () => clearTimeout(typingDelay)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="inline-block animate-fade-in-up">Plan Your Dream Trip,</span>
                <br />
                <span className="inline-block animate-fade-in-up animation-delay-300">Effortlessly</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x inline-block animate-fade-in-up animation-delay-600">
                  {typedText}
                  {showCursor && <span className="animate-pulse text-blue-600">|</span>}
                </span>
              </h1>
              
              {/* Animated underline */}
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 animate-expand"></div>
            </div>

            <p className={`text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              Let TravelMateAI simplify your itinerary, find the best deals, and personalize every step of your journey with intelligent recommendations.
            </p>

            {/* CTA Button with enhanced animation */}
            <div className={`flex justify-center lg:justify-start transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <Link to="/chatbot">
                <Button className="rounded-full group relative overflow-hidden cursor-pointer p-6">
                  <span className="text-base relative z-10 flex items-center gap-2">
                    Start Planning
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Button>
              </Link>
            </div>

            {/* Stats or Trust Indicators */}
            <div className={`flex justify-center lg:justify-start space-x-8 pt-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 animate-count-up">10K+</div>
                <div className="text-sm text-gray-500">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 animate-count-up">50+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 animate-count-up">24/7</div>
                <div className="text-sm text-gray-500">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with animations */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 animate-float">
                <img
                  src="/hero-image.png"
                  alt="Travel planning illustration"
                  className="w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full animate-bounce-delayed opacity-80"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500 rounded-full animate-pulse opacity-80"></div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -z-10 top-8 left-8 w-60 h-60 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full blur-2xl opacity-40 animate-float-delayed"></div>
              
              {/* Geometric Shapes */}
              <div className="absolute top-1/4 left-0 w-4 h-4 bg-blue-400 rotate-45 animate-spin-slow opacity-60"></div>
              <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes expand {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        
        @keyframes typing-cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-expand { animation: expand 1s ease-out 0.8s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-bounce-delayed { animation: bounce-delayed 4s ease-in-out infinite 1s; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-count-up { animation: fade-in-up 1s ease-out both; }
        .animate-typing-cursor { animation: typing-cursor 1s infinite; }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}

export default Hero