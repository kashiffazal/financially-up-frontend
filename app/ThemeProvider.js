'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine the initial theme based on localStorage or system preferences
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Configure Ant Design theme with the requested primary color #008043
  const themeConfig = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#008043',
      borderRadius: 8,
      fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
    },
    components: {
      Button: {
        colorPrimary: '#008043',
        colorPrimaryHover: '#006635',
        colorPrimaryActive: '#004d28',
      },
      Checkbox: {
        colorPrimary: '#008043',
        colorPrimaryHover: '#006635',
      },
      Input: {
        colorPrimary: '#008043',
        colorPrimaryHover: '#006635',
        activeBorderColor: '#008043',
      },
    },
  };

  // Prevent flash of unstyled content during hydration
  // Ant Design will render with default settings during SSR/initial mount, then adjust dynamically
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ConfigProvider theme={themeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
