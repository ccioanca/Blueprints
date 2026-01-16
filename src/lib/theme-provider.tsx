import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    // get the prefers color theme if no theme is stored by default.
    return (storedTheme as Theme) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  //anonymous use effect to keep
  useEffect(() => {
    const isDarkPreference = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only update if no theme is set in localStorage
      if (!localStorage.getItem('theme')) {
        setTheme(isDarkPreference.matches ? 'dark' : 'light');
      }
    };
    isDarkPreference.addEventListener('change', handleChange);

    //cleanup function in the case of this context unmounting - we don't want to keep the listener in memory.
    return () => {
      isDarkPreference.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
