import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import axios from 'axios'; // Import Axios for API requests
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const PopularDestinations = () => {
  const [tourism, setTourism] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTourism = async () => {
      try {
        // Menggunakan Axios untuk melakukan GET request ke API backend
        const response = await axios.get('/api/tourism'); // Path /api/tourism
        setTourism(response.data.slice(0, 5)); // Data Axios ada di property .data
      } catch (err) {
        setError(err.message);
        console.error('Error fetching tourism:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTourism();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === tourism.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? tourism.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Loading amazing destinations...</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-red-600">Error loading destinations: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (tourism.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600">No destinations available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations that capture the hearts of travelers worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tourism.map((tour, index) => (
                <div key={tour.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ 
                        backgroundImage: `url(${tour.image})`,
                        filter: 'brightness(0.7)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-end p-8 md:p-12">
                      <div className="text-white max-w-2xl">
                        <div className="flex items-center mb-4">
                          <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                          <span className="text-blue-300 font-medium">{tour.location}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                          {tour.name}
                        </h3>
                        <Link to={`/tourism/${tour.id}`} className="inline-block">
                          <Button className="rounded-full group relative overflow-hidden cursor-pointer p-6">
                            <span className="text-base relative z-10 flex items-center gap-2">
                              Explore
                            <ArrowRight className="w-5 h-5" />
                            </span>
                            {/* Animated background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {tourism.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Featured Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;