
import Features from '@/components/custom/Features';
import Hero from '@/components/custom/Hero';
import PopularDestinations from '@/components/custom/PopularDestinations';
import Testimonials from '@/components/custom/Testimonials';
import React from 'react';


function HomePage() {
  return (
      <div className='flex flex-col gap-30 px-20 py-10'>
        <Hero/>
        <Features/> 
        <PopularDestinations/>
        <Testimonials/>
      </div>
  );
}

export default HomePage;