
import Faq from '@/components/sections/Faq';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import PopularDestinations from '@/components/sections/PopularDestinations';
import Testimonials from '@/components/sections/Testimonials';
import React from 'react';


function HomePage() {
  return (
      <div className='flex flex-col gap-30 px-20 py-10'>
        <Hero/>
        <Features/>
        <PopularDestinations/>
        <HowItWorks/>   
        <Testimonials/>
        <Faq/>
      </div>
  );
}

export default HomePage;