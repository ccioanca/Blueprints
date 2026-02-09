import { Button } from '@/components/ui/button';
import React from 'react';
import Typewriter from './typewriter';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center "
    >
      <div className="relative z-10 text-center px-4">
        <h1 className="mb-4 leading-tight tracking-tight drop-shadow-md">
          Hi, I'm <span className="text-primary dark:primary">Cristian</span>
        </h1>
        <div className="pb-12 text-2xl sm:text-3xl font-mono text-gray-700 dark:text-gray-300 drop-shadow-sm h-20 flex items-center justify-center"> {/* Added h-20 and flex for consistent height */}
          <Typewriter 
            typeData={[
              "an Engineering Manager",
              "a Senior Developer", 
              "a People Leader",
              "a Creator"
            ]} 
            typeTime={2500}
            staticText={"I'm\u00A0"}
          />
        </div>
        <Button 
          size="xl" 
          variant="default"
          className="mt-8">
          Contact Me
        </Button>

        <Button 
          size="xl" 
          variant="outline"
          className="ml-5 mt-8">
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
