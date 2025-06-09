
import Features from '@/components/custom/Features';
import Hero from '@/components/custom/Hero';
import PopularDestinations from '@/components/custom/PopularDestinations';
import Testimonials from '@/components/custom/Testimonials';
import React from 'react';


function HomePage() {
  return (
      <div className='py-12 px-6'>
        <Hero/>
        <Features/> 
        <PopularDestinations/>
        <Testimonials/>
      </div>
  );
}

export default HomePage;