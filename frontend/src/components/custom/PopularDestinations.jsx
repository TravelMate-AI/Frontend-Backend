import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, ArrowRight, Camera } from 'lucide-react';

const PopularDestinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    {
      id: 1,
      name: "Bromo Tengger Semeru",
      location: "Malang, Jawa Timur",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      rating: 4.8,
      duration: "2-3 Days",
      visitors: "150K+",
      highlights: ["Sunrise di Gunung Bromo", "Kawah Aktif", "Lautan Pasir"],
      description: "Nikmati keajaiban alam dengan pemandangan sunrise spektakuler di atas kawah Bromo yang ikonik.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      name: "Pantai Malang Selatan",
      location: "Malang, Jawa Timur",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.6,
      duration: "1-2 Days",
      visitors: "80K+",
      highlights: ["Pantai Tiga Warna", "Pantai Balekambang", "Spot Foto Instagramable"],
      description: "Jelajahi pantai-pantai eksotis dengan pasir putih dan air laut yang jernih di sepanjang pesisir selatan.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Candi Borobudur",
      location: "Magelang, Jawa Tengah",
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.9,
      duration: "1 Day",
      visitors: "200K+",
      highlights: ["Candi Buddha Terbesar", "Sunrise Tour", "Warisan UNESCO"],
      description: "Kunjungi keajaiban arsitektur kuno dan situs warisan dunia yang menakjubkan ini.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Batu Secret Zoo",
      location: "Batu, Jawa Timur",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.5,
      duration: "1 Day",
      visitors: "120K+",
      highlights: ["Kebun Binatang Modern", "Wahana Keluarga", "Edukasi Satwa"],
      description: "Destinasi wisata keluarga dengan koleksi satwa lengkap dan wahana edukatif yang menarik.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      id: 5,
      name: "Taman Safari Prigen",
      location: "Pasuruan, Jawa Timur",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.7,
      duration: "1 Day",
      visitors: "90K+",
      highlights: ["Safari Drive-Through", "Pertunjukan Satwa", "Wahana Anak"],
      description: "Pengalaman safari yang tak terlupakan dengan interaksi langsung bersama satwa liar.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "Kawah Ijen",
      location: "Banyuwangi, Jawa Timur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.8,
      duration: "2 Days",
      visitors: "60K+",
      highlights: ["Blue Fire Phenomenon", "Kawah Asam Terbesar", "Sunrise Trekking"],
      description: "Saksikan fenomena api biru yang langka dan keindahan kawah asam terbesar di dunia.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"> Popular Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most breathtaking destinations in East Java, carefully curated by our AI to match your travel preferences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                </div>

                {/* Camera Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{destination.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {destination.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{destination.visitors}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 2 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{destination.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                  <span>Plan Your Trip</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find your dream destination? Let our AI help you discover hidden gems!
          </p>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            <MapPin className="w-5 h-5" />
            <span>Explore More Destinations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;