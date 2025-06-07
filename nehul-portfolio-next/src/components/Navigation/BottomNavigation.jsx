'use client';

import { useState, useEffect } from 'react';
import { Home, Briefcase, Folder, Wrench, File, Sun, Moon } from 'lucide-react';

export default function BottomNavigation({ sectionRefs, scrollToSection, showBottomNav }) {
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

  const navLinks = [
    {
      title: "Home",
      href: "#home",
      icon: <Home size={20} />,
      ref: sectionRefs.home,
    },
    {
      title: "Experience",
      href: "#experience",
      icon: <Briefcase size={20} />,
      ref: sectionRefs.experience,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <Folder size={20} />,
      ref: sectionRefs.projects,
    },
    {
      title: "Skills",
      href: "#skills",
      icon: <Wrench size={20} />,
      ref: sectionRefs.skills,
    },
    {
      title: "Resume",
      href: "#resume",
      icon: <File size={20} />,
      ref: sectionRefs.resume,
    },
  ];

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        showBottomNav
          ? "opacity-90 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-gray-100 dark:bg-grey-bg rounded-xl px-6 py-3.5 flex gap-6 shadow-lg shadow-black/50 items-center">
        {navLinks.map((link) => (
          <div key={`bottom-${link.href}`} className="relative nav-icon">
            <button
              onClick={() => scrollToSection(link.ref)}
              className="text-gray-700 dark:text-white hover:text-orange-500 transition-colors"
              type="button"
            >
              {link.icon}
            </button>
            <div className="nav-tooltip-bottom">{link.title}</div>
          </div>
        ))}

        {/* Subtle Separator */}
        <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>

        {/* Theme Toggle Icon */}
        <div className="relative nav-icon">
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-white hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
          >
            <div className="relative w-5 h-5">
              <Sun
                size={20}
                className={`absolute inset-0 transition-all duration-500 ${
                  darkMode
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-180 scale-0"
                }`}
              />
              <Moon
                size={20}
                className={`absolute inset-0 transition-all duration-500 ${
                  darkMode
                    ? "opacity-0 rotate-180 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </div>
          </button>
          <div className="nav-tooltip-bottom">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      </div>
    </div>
  );
}
