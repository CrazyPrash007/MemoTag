import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  
  useEffect(() => {
    // Direct DOM manipulation on the actual rendered footer element
    const footer = footerRef.current;
    if (!footer) return;
    
    // Initial check
    updateFooterColors();
    
    // Set up event listener for theme changes
    window.addEventListener('storage', updateFooterColors);
    window.addEventListener('themeChange', updateFooterColors);
    
    // Check for theme changes periodically
    const intervalId = setInterval(updateFooterColors, 100);
    
    function updateFooterColors() {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Directly set styles on the footer element
      if (isDark) {
        footer.style.backgroundColor = '#121212';
        footer.style.borderTopColor = '#2A2A2A';
      } else {
        footer.style.backgroundColor = '#FFFFFF';
        footer.style.borderTopColor = '#E4E7EB';
      }
      
      // Add a force-theme attribute for debugging
      footer.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
    
    return () => {
      window.removeEventListener('storage', updateFooterColors);
      window.removeEventListener('themeChange', updateFooterColors);
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <footer 
      ref={footerRef} 
      className="py-12 border-t relative" 
      id="site-footer" 
      style={{backgroundColor: '#FFFFFF', borderTopColor: '#E4E7EB'}}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#4F6AFF] mr-1">Memo</span>
              <span className="text-xl font-bold text-[var(--foreground)]">Tag</span>
            </Link>
            <p className="mt-4 text-[var(--gray-dark)] max-w-xs">
              An AI wearable that tracks physical & cognitive health, easing caregiving for families dealing with dementia.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">Quick Links</h3>
            <ul className="space-y-3 text-[var(--foreground)]">
              <li><Link href="#problem" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">The Problem</Link></li>
              <li><Link href="#solution" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">Our Solution</Link></li>
              <li><Link href="#traction" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">Traction</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">Contact</h3>
            <ul className="space-y-3 text-[var(--foreground)]">
              <li>A-19 Ramesh Nagar, New Delhi</li>
              <li>110015, India</li>
              <li>contact@memotag.io</li>
              <li>+91 880056622</li>
              <li><a href="https://memotag.io/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">memotag.io</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/memotag.in/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/memotag/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://memotag.io/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[#4F6AFF] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-[var(--foreground)]" style={{borderTopColor: 'inherit'}}>
          <p>&copy; {currentYear} MemoTag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 