'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (savedTheme === null && !prefersDark)) {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="nav-icon">
      <button
        onClick={toggleTheme}
        className="text-gray-700 dark:text-white hover:text-orange-500 transition-all duration-300 transform hover:scale-110 p-0 m-0"
      >
        <div className="relative w-5 h-5">
          <Sun 
            size={20} 
            className={`absolute inset-0 transition-all duration-500 ${
              darkMode 
                ? 'opacity-0 rotate-180 scale-0' 
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <Moon 
            size={20} 
            className={`absolute inset-0 transition-all duration-500 ${
              darkMode 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-0'
            }`}
          />
        </div>
      </button>
      <div className="nav-tooltip">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </div>
  );
}
