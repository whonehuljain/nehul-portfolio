'use client';

import { Home, Briefcase, Folder, Wrench, File } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';

export default function BottomNavigation({ sectionRefs, scrollToSection, showBottomNav }) {
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
      <div className="bg-gray-100 dark:bg-grey-bg rounded-xl px-6 py-3.5 flex shadow-lg shadow-black/50 items-center">
        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <div key={`bottom-${link.href}`} className="nav-icon">
              <button
                onClick={() => scrollToSection(link.ref)}
                className="text-gray-700 dark:text-white hover:text-orange-500 transition-colors p-0 m-0"
                type="button"
              >
                {link.icon}
              </button>
              <div className="nav-tooltip">{link.title}</div>
            </div>
          ))}
        </div>
        
        <div className="ml-4 w-px h-5 bg-gray-300 dark:bg-gray-600"></div>
        
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
