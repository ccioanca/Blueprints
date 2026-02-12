import { Button } from '@/components/ui/button';
import Typewriter from '@/components/Typewriter';
import { CircleChevronDownIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex relative items-center justify-center ">
      <div className="relative z-10 text-center px-4">
        <h1 className="mb-4 tracking-wide text-shadow-lg text-shadow-primary/20 dark:text-shadow-sm">
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
        
        <div className='flex flex-col md:flex-row'>
          <Button 
          size="xl" 
          variant="default"
          className="mt-8 mx-auto md:mr-4" asChild>
          <a href='#contact'>
            Contact Me
          </a>
        </Button>
        <Button 
          size="xl" 
          variant="outline"
          className="ml-5 mt-8 mx-auto md:ml-4"
          asChild>
          <a href="#projects">View My Work</a>
        </Button>
        </div>
        
      </div>
      {/* <CircleChevronDownIcon className="size-10 text-primary/30 dark:text-primary/15 absolute bottom-8 animate-soft-bounce" /> */}
    </section>
  );
};

export default Hero;
