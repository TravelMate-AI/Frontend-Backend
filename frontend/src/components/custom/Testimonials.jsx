import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, Calendar, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Putri",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Jakarta",
      rating: 5,
      trip: "Bromo Tengger Semeru",
      duration: "3 Days",
      travelers: "2 People",
      review: "TravelMateAI benar-benar membantu saya merencanakan perjalanan ke Bromo yang sempurna! AI-nya memberikan rekomendasi spot sunrise terbaik dan mengatur jadwal yang efisien. Pengalaman yang tak terlupakan!",
      date: "2 weeks ago",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Surabaya",
      rating: 5,
      trip: "Pantai Malang Selatan",
      duration: "2 Days",
      travelers: "4 People",
      review: "Luar biasa! AI chatbot nya sangat memahami kebutuhan keluarga. Direkomendasikan pantai yang aman untuk anak-anak dan resto dengan menu yang cocok. Liburan keluarga jadi lebih terorganisir dan menyenangkan.",
      date: "1 week ago",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Dina Maharani",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      location: "Bandung",
      rating: 5,
      trip: "Kawah Ijen Blue Fire",
      duration: "2 Days",
      travelers: "3 People",
      review: "Pengalaman trekking ke Kawah Ijen jadi lebih mudah berkat planning dari TravelMateAI. Semua detail mulai dari persiapan gear, waktu terbaik, hingga homestay diatur dengan sempurna. Highly recommended!",
      date: "3 days ago",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      name: "Budi Santoso",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      location: "Yogyakarta",
      rating: 5,
      trip: "Batu Secret Zoo & Jatim Park",
      duration: "2 Days",
      travelers: "5 People",
      review: "AI-nya sangat pintar dalam mengatur itinerary yang efisien. Dalam 2 hari bisa mengunjungi beberapa destinasi tanpa terburu-buru. Budget planning nya juga akurat, tidak ada surprise cost!",
      date: "5 days ago",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Rina Sari",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80",
      location: "Malang",
      rating: 5,
      trip: "Taman Safari Prigen",
      duration: "1 Day",
      travelers: "6 People",
      review: "Sebagai local guide, saya terkesan dengan akurasi informasi dari TravelMateAI. Bahkan saya mendapat insight baru tentang destinasi di daerah saya sendiri. Tools yang sangat berguna untuk para traveler!",
      date: "1 week ago",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      name: "Andi Wijaya",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1187&q=80",
      location: "Semarang",
      rating: 5,
      trip: "Solo Backpacking East Java",
      duration: "7 Days",
      travelers: "1 Person",
      review: "Perfect untuk solo traveler! AI chatbot nya seperti punya teman travel yang berpengalaman. Memberikan tips safety, tempat makan recommended, dan membantu optimasi budget untuk perjalanan 7 hari yang epic!",
      date: "4 days ago",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  // Auto scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who have discovered amazing destinations with our AI-powered travel planning.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15K+</div>
            <div className="text-gray-600">Trips Planned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-8"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${testimonials.length * (100 / 3)}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/3 px-2"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Quote Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${testimonial.gradient} mb-6`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                    "{testimonial.review}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Trip Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span className="text-gray-600">{testimonial.trip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      <span className="text-gray-600">{testimonial.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-blue-500" />
                      <span className="text-gray-600">{testimonial.travelers}</span>
                    </div>
                    <div className="text-gray-500">{testimonial.date}</div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            <Star className="w-5 h-5" />
            <span>Join Our Happy Travelers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;