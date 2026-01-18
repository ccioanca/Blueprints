import { Button } from '@/components/ui/button';
import React from 'react';
import Typewriter from './typewriter';

const myStyle = {
  fontFamily: 'monospace'
};

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Cristian</h2>
        <div className='pb-12' style={myStyle}>
          <Typewriter className="text-xl" 
          typeData={
            ["An Engineering Manager",
            "A Senior Developer", 
            "A People Leader",
            "A Creator"]} 
          typeTime={2500}/>
        </div>
        
        <Button size={"xl"} className='dark:text-gray-100'>
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
