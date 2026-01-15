import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Cristian</h2>
        <p className="text-xl text-gray-700">An Engineering Manager.</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
