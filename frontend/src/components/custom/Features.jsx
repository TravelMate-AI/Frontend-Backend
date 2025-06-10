import React from 'react';
import { Bot, MapPin, DollarSign, Clock, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Planning",
      description: "Smart algorithms analyze your preferences to create personalized itineraries tailored just for you.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Smart Route Optimization",
      description: "Optimize your travel routes and discover hidden gems along the way with intelligent mapping.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Budget Optimization",
      description: "Get the best value for your money with AI-driven budget planning and cost-effective recommendations.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Stay informed with live travel updates, weather alerts, and dynamic itinerary adjustments.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Travel Planning",
      description: "Coordinate seamlessly with friends and family to plan the perfect group adventure together.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Recommendations",
      description: "Get lightning-fast suggestions for restaurants, activities, and accommodations wherever you go.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Smart Travel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of travel planning with AI-powered tools designed to make your journey seamless, affordable, and unforgettable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            <Bot className="w-5 h-5" />
            <span>Start Planning with AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;