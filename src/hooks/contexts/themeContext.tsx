'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
  const root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--collapse-bg", "rgba(0, 122, 255, 0.6)");
    root.style.setProperty("--collapse-text", "white");
    root.style.setProperty("--drawer-title", "rgba(0, 122, 255, 0.6)");
  } else {
    root.style.setProperty("--collapse-bg", "rgba(22, 119, 255, 1)");
    root.style.setProperty("--drawer-title", "white");
  }
}, [theme]);

  // Inicializa com o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const antTheme =
    theme === 'light'
      ? antdTheme.defaultAlgorithm
      : antdTheme.darkAlgorithm;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ConfigProvider theme={{ algorithm: antTheme }}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
