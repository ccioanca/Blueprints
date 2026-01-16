import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Cristian</h2>
        <p className="text-xl pb-12">An Engineering Manager.</p>
        <Button size={"xl"} className='dark:text-gray-100'>
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
