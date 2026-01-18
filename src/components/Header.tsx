import React from 'react';
import { useTheme } from "@/lib/theme-provider";
import { SunDimIcon, MoonIcon} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <NavigationMenu className="fixed">
      <NavigationMenuList className="flex justify-between w-screen p-3">
        <div className="flex">
          <NavigationMenuLink href="#hero">
            Home
          </NavigationMenuLink>
          <NavigationMenuLink href="#about">
            About
          </NavigationMenuLink>
          <NavigationMenuLink href="#projects">
            Projects
          </NavigationMenuLink>
          <NavigationMenuLink href="#contact">
            Contact
          </NavigationMenuLink>
        </div>
        <NavigationMenuItem>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunDimIcon/>
            ) : (
              <MoonIcon/>
            )}
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
