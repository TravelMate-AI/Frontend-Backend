import React from 'react';
import { Button } from '../ui/button';
import { MapPin, Star, Clock, Users, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';  


const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Start Your Travel Chat",
      description: "Simply open the chatbot and type your travel ideas, questions, or desired destination. Our AI is ready to listen!",
      // Anda bisa menggunakan gambar ikon/ilustrasi yang relevan dengan 'chat' atau 'messaging'
      imagePlaceholder: "/images/start-chat.png" // Contoh path gambar, sesuaikan
    },
    {
      id: 2,
      title: "AI Understands & Generates Ideas",
      description: "Our intelligent AI processes your input, understands your preferences, and instantly generates personalized travel suggestions, itineraries, or answers.",
      // Gambar ilustrasi 'AI processing', 'brain', atau 'lightbulb'
      imagePlaceholder: "/images/ai-processing.png" // Contoh path gambar, sesuaikan
    },
    {
      id: 3,
      title: "Refine & Book Your Perfect Trip",
      description: "Review the recommendations, ask follow-up questions to refine your plan, and get ready to explore. You can then use our integrated tools to book your flights, hotels, and activities.",
      // Gambar ilustrasi 'travel', 'booking', 'check-mark', atau 'map'
      imagePlaceholder: "/images/perfect-trip.png", // Contoh path gambar, sesuaikan
      // Contoh: Jika ada gambar eksternal yang relevan
      // image: "https://example.com/your-travel-illustration.jpg"
    }
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            3 Easy Steps to <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Travel Smarter</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Refine, Adjust, Perfect: Craft your ideal voice output with intuitive settings. 
            Achieve clarity, stability, or expressiveness—tailored precisely to your needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10">
                <span className="text-2xl font-bold text-white">{step.id}</span>
              </div>

              {/* Card */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image*/}
                <div className="relative h-48 overflow-hidden shrink-0">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
                  )}
                </div>

                

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className=" leading-relaxed text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default HowItWorks;
