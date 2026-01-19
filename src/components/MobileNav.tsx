import React from 'react';
import { XIcon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileNav = ({ navItems, isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-900 dark:text-gray-100 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Close mobile menu"
        >
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full space-y-8">
        {navItems.map((item, index) => (

        <a href={item.href} className="text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={onClose}>
          {item.label}
        </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
