import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Bot,
  Plane,
  Heart,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trip Planner", href: "/planner" },
    { name: "AI Chatbot", href: "/chatbot" },
    { name: "Popular Destinations", href: "/destinations" },
    { name: "Travel Guides", href: "/guides" },
    { name: "Budget Calculator", href: "/calculator" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Careers", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Partner With Us", href: "/partners" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
    { name: "Community", href: "/community" },
    { name: "Feedback", href: "/feedback" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" }
  ];

  const destinations = [
    "Bromo Tengger Semeru",
    "Pantai Malang Selatan", 
    "Kawah Ijen",
    "Batu Secret Zoo",
    "Taman Safari Prigen",
    "Candi Borobudur"
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss Amazing
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Travel Deals</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get personalized travel recommendations, exclusive deals, and AI-powered trip suggestions delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Join 50,000+ travelers who trust TravelMateAI for their adventures
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TravelMateAI</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Your intelligent travel companion powered by AI. Plan perfect trips, discover hidden gems, and create unforgettable memories with personalized recommendations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>hello@travelmateai.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span>24/7 AI Chat Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
                <ul className="space-y-3">
                  {company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  {support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Destinations */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-white">Top Destinations</h4>
                <ul className="space-y-3">
                  {destinations.map((destination, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{destination}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} TravelMateAI. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Indonesia</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              TravelMateAI uses advanced artificial intelligence to provide personalized travel recommendations. 
              All destination information and pricing are subject to availability and may change without notice. 
              Please verify details before booking your travel arrangements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;