"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize dark mode state based on HTML class or system preference
  useEffect(() => {
    // Check if we can access the DOM
    if (typeof window !== 'undefined') {
      // Check if dark mode is already set via HTML class
      const isDark = document.documentElement.classList.contains('dark');
      console.log('Initial theme state:', isDark ? 'dark' : 'light');
      setIsDarkMode(isDark);
      
      // Force a theme check on window resize (helps with some rendering issues)
      const handleResize = () => {
        const currentIsDark = document.documentElement.classList.contains('dark');
        if (currentIsDark !== isDarkMode) {
          setIsDarkMode(currentIsDark);
        }
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isDarkMode]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    if (typeof window === 'undefined') return;
    
    // Remember the scroll position
    const scrollPosition = window.scrollY;
    
    const newDarkModeState = !isDarkMode;
    
    // Update React state immediately for smoother UI updates
    setIsDarkMode(newDarkModeState);
    
    // Apply all DOM changes simultaneously
    if (newDarkModeState) {
      // Switching to dark mode
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switching to light mode
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
    
    // Dispatch events for other components
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { theme: newDarkModeState ? 'dark' : 'light' } 
    }));
    
    // Restore scroll position immediately
    window.scrollTo(0, scrollPosition);
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Theme toggle button component for better organization
  const ThemeToggle = () => (
    <div 
      onClick={toggleDarkMode}
      className="relative inline-flex items-center cursor-pointer select-none"
      role="button"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      tabIndex={0}
    >
      <div className={`
        w-14 h-7 flex items-center rounded-full p-1 relative overflow-hidden
        ${isDarkMode ? 'bg-[#121212] border border-gray-600' : 'bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200'}
        transition-all duration-300 ease-in-out shadow-inner
      `}>
        <div className={`
          absolute left-1 right-1 flex justify-between items-center
        `}>
          {/* Sun icon (light mode) */}
          <svg 
            className={`w-5 h-5 text-amber-400 ${isDarkMode ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`} 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            <path d="M12 3V5M12 19V21M5.6 5.6L7 7M17 17L18.4 18.4M3 12H5M19 12H21M5.6 18.4L7 17M17 7L18.4 5.6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          </svg>

          {/* Moon icon (dark mode) */}
          <svg 
            className={`w-4 h-4 ${isDarkMode ? 'text-white opacity-100 scale-100' : 'text-gray-700 opacity-50 scale-95'} transition-all duration-300`} 
            fill="none"
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" 
              fill="currentColor"
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
          </svg>
        </div>
        
        {/* The sliding thumb */}
        <div 
          className={`
            w-5 h-5 rounded-full shadow-md transform transition-all duration-400 ease-in-out
            ${isDarkMode ? 
              'translate-x-7 bg-gray-800 border border-gray-600 ring-2 ring-[var(--primary)]/20' : 
              'translate-x-0 bg-white ring-2 ring-amber-200/50'
            }
          `}
        ></div>
      </div>
    </div>
  );
  
  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--background)]/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div onClick={scrollToTop} className="flex items-center cursor-pointer">
          <span className="text-xl font-bold text-[var(--primary)] mr-1">Memo</span>
          <span className="text-xl font-bold text-[var(--foreground)]">Tag</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#problem" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">The Problem</Link>
          <Link href="#solution" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Our Solution</Link>
          <Link href="#traction" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">Traction</Link>
          
          {/* Theme toggle button */}
          <ThemeToggle />
          
          <Link href="#waitlist" className="btn-primary rounded-full px-5 py-2 text-sm font-medium">Get Started</Link>
        </nav>
        
        {/* Mobile Menu and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme toggle button for mobile */}
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className="w-6 h-6 text-[var(--foreground)]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--gray)] shadow-lg py-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="#problem" 
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2 px-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              The Problem
            </Link>
            <Link 
              href="#solution" 
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2 px-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Our Solution
            </Link>
            <Link 
              href="#traction" 
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2 px-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Traction
            </Link>
            <Link 
              href="#waitlist" 
              className="btn-primary text-center rounded-full px-5 py-2.5 mx-auto w-3/4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
} 