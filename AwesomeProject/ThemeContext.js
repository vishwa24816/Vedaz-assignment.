import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [missedCalls, setMissedCalls] = useState([]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addMissedCall = (call) => {
    setMissedCalls([...missedCalls, call]);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#121212' : '#FFFFFF',
      text: isDarkMode ? '#FFFFFF' : '#000000',
      primary: '#25D366',
      secondary: '#075E54',
    },
    missedCalls,
    addMissedCall,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
