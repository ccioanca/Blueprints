import { Button } from '@/components/ui/button';
import React from 'react';
import Typewriter from './typewriter';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="relative z-10 text-center px-4">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-md">
          Hi, I'm <span className="text-primary dark:primary">Cristian</span>
        </h2>
        <div className="pb-12 text-2xl sm:text-3xl font-mono text-gray-700 dark:text-gray-300 drop-shadow-sm h-20 flex items-center justify-center"> {/* Added h-20 and flex for consistent height */}
          <Typewriter 
            typeData={[
              "an Engineering Manager",
              "a Senior Developer", 
              "a People Leader",
              "a Creator"
            ]} 
            typeTime={2500}
          />
        </div>
        
        <Button 
          size="xl" 
          className="mt-8 px-10 py-7 text-lg font-semibold text-white shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
