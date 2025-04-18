"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-light)] via-[var(--background)] to-[var(--background)] -z-10"></div>
      
      {/* Geometric shapes for visual interest */}
      <div className="absolute top-20 right-10 w-64 h-64 rotate-45 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-3xl blur-xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 -rotate-12 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent rounded-3xl blur-xl -z-10"></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--primary)]/10 -z-10 animate-pulse-slow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-[var(--accent)]/10 -z-10 animate-pulse-slow-delayed"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              className="mb-4 relative"
              variants={item}
            >
              <motion.span 
                className="absolute -top-10 -left-8 text-6xl text-[var(--primary)]/10 font-bold select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                AI
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins text-[var(--foreground)] relative">
                <motion.span 
                  className="text-[var(--primary)] inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AI-Powered
                </motion.span>{" "}
                Care for Dementia Patients
              </h1>
            </motion.div>
            
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-[var(--gray-dark)] mb-8 max-w-xl"
            >
              Enhancing quality of life through cognitive tracking, monitoring, and personalized support for patients and caregivers.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full overflow-hidden"
              >
                <Link href="#waitlist" className="inline-flex items-center justify-center btn-primary relative group overflow-hidden rounded-full px-8 py-3.5 text-base shadow-lg font-medium border-2 border-transparent hover:border-white/10">
                  <span className="relative z-10">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  />
                  <motion.div 
                    className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-white/30 blur-sm group-hover:bg-white/40"
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full overflow-hidden"
              >
                <Link href="#solution" className="inline-flex items-center justify-center btn-secondary relative group overflow-hidden rounded-full px-8 py-3.5 text-base shadow-lg font-medium">
                  <span className="relative z-10 group-hover:text-white transition-colors">Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={item} className="mt-8 flex items-center justify-center lg:justify-start">
              <p className="text-sm font-medium mr-4 text-[var(--foreground)]">Trusted by:</p>
              <div className="flex space-x-4">
                <motion.div 
                  className="h-8 w-20 bg-[var(--gray-dark)]/20 rounded-md hover:bg-[var(--gray-dark)]/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                ></motion.div>
                <motion.div 
                  className="h-8 w-20 bg-[var(--gray-dark)]/20 rounded-md hover:bg-[var(--gray-dark)]/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                ></motion.div>
                <motion.div 
                  className="h-8 w-20 bg-[var(--gray-dark)]/20 rounded-md hover:bg-[var(--gray-dark)]/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] w-full max-w-xl mx-auto"
          >
            <motion.div 
              animate={floatAnimation}
              className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 dark:from-[var(--primary)]/10 dark:to-[var(--accent)]/10 rounded-3xl overflow-hidden flex items-center justify-center backdrop-blur-sm shadow-xl"
            >
              <div className="absolute inset-0 bg-[var(--background)]/40 dark:bg-[var(--background)]/20 z-0"></div>
              
              <div className="text-center p-8 relative z-10">
                <motion.div 
                  className="w-24 h-24 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6 relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-[var(--primary)]/20 opacity-50" style={{ animationDuration: "3s" }}></div>
                  <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-2 text-[var(--foreground)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Coming Soon:
                </motion.h3>
                <motion.p 
                  className="text-[var(--gray-dark)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Our revolutionary MemoTag device for continuous cognitive monitoring
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 