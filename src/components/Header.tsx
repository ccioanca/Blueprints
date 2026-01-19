import React, { useState } from 'react';
import { useTheme } from "@/lib/theme-provider";
import { SunDimIcon, MoonIcon, MenuIcon} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import MobileNav from './MobileNav';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
  
  return (
    <>
      <NavigationMenu className="fixed top-0 left-0 w-full z-50 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-sm">
        <NavigationMenuList className="flex w-full items-center justify-between p-3 max-w-7xl mx-auto">
          {/* Logo or Name */}
          {/* <NavigationMenuLink href="#hero" className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 hover:!bg-transparent">
            Cristian
          </NavigationMenuLink> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
                <NavigationMenuLink key={index} href={item.href} className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {item.label}
                </NavigationMenuLink>
              ))}
            <NavigationMenuItem>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunDimIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </NavigationMenuItem>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <NavigationMenuItem>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunDimIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Open mobile menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNav navItems={navItems} isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Header;
