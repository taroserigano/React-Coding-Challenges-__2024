
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);
