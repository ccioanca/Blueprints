import React from 'react';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuLink href='#'>
          Home
        </NavigationMenuLink>
        <NavigationMenuLink href='#'>
          About
        </NavigationMenuLink>
        <NavigationMenuLink href='#'>
          Projects
        </NavigationMenuLink>
        <NavigationMenuLink href='#'>
          Contact
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
