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
        <NavigationMenuList className="flex w-full items-center justify-between p-3 mx-auto">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 md:w-full flex-1 justify-center">
            {navItems.map((item, index) => (
                <NavigationMenuLink key={index} href={item.href} className="text-md font-medium px-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  {item.label}
                </NavigationMenuLink>
              ))}
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer"
                aria-label="Toggle theme">
                {theme === 'dark' ? <SunDimIcon className="size-5" /> : <MoonIcon className="size-5" />}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex w-full items-center justify-between space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={toggleMobileMenu}
                className="flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300"
                aria-label="Open mobile menu">
                <MenuIcon className="size-6" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full p-2 text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunDimIcon className="size-6" /> : <MoonIcon className="size-6" />}
              </NavigationMenuLink>
            </NavigationMenuItem>
            
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNav navItems={navItems} isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}/>
    </>
  );
};

export default Header;
