import { Button } from '@/components/ui/button';
import Typewriter from '@/components/Typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex relative items-center justify-center ">
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}>
        <motion.h1
          className="mb-4 tracking-wide text-shadow-lg text-shadow-primary/20 dark:text-shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}>
          Hi, I'm <span className="text-primary dark:primary">Cristian</span>
        </motion.h1>
        <motion.div
          className="pb-12 text-2xl sm:text-3xl font-mono text-gray-700 dark:text-gray-300 drop-shadow-sm h-20 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}>
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
        </motion.div>
        
        <motion.div
          className='flex flex-col md:flex-row'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}>
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
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
