import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-14 py-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Plan Your Dream Trip, Effortlessly <span className="text-blue-600">with the Power of AI</span>
            </h1>
            <p className="text-lg text-gray-600">
              Let TravelMateAI simplify your itinerary, find the best deals, and personalize every step of your journey.
            </p>
            <div>
              <Link to={"/chatbot"}>
              <Button className='cursor-pointer'>Start Planning</Button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img
              src="/public/hero-image.png"
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero