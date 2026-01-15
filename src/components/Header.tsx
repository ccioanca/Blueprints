import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">My Portfolio</a>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
