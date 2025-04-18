"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WaitlistForm from "../components/WaitlistForm";

export default function WaitlistSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="waitlist" ref={ref} className="py-24 pt-12 pb-24 bg-gradient-to-b from-[var(--background)] to-[var(--gray-light)]/10 dark:to-[var(--gray-dark)]/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--primary)]/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slow-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-heading mb-4">
            Be the <span className="text-[var(--primary)]">First</span> to Know
          </h2>
          <p className="section-subheading mb-10 max-w-2xl mx-auto">
            Join our exclusive waitlist and be among the first to experience MemoTag. 
            Get early access, special offers, and updates on our progress.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="bg-[var(--background)] rounded-xl shadow-lg p-8 sm:p-10 border border-[var(--gray)] dark:border-[#2A2A2A] max-w-xl mx-auto backdrop-blur-sm bg-opacity-80 dark:bg-opacity-90 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-5 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 animate-ping opacity-75 group-hover:opacity-100" style={{ animationDuration: "3s" }}></div>
                <svg className="w-7 h-7 text-[var(--primary)] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">Join Our Waitlist</h3>
              <p className="text-[var(--gray-dark)] mb-7 text-center max-w-md">
                Be the first to know when MemoTag launches and get exclusive early access to our revolutionary technology.
              </p>
              
              <div className="w-full max-w-md relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)]/30 to-[var(--accent)]/30 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                <div className="relative">
                  <WaitlistForm />
                </div>
              </div>
              
              <p className="text-xs text-[var(--gray-dark)] mt-8 max-w-xs text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 