"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TractionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const testimonialRef = useRef(null);
  
  const metrics = [
    { value: "5,000+", label: "Pre-orders", icon: "💼" },
    { value: "87%", label: "Caregiver satisfaction", icon: "❤️" },
    { value: "12", label: "Healthcare partnerships", icon: "🏥" },
    { value: "$2.4M", label: "Funding secured", icon: "💰" }
  ];
  
  const testimonials = [
    {
      quote: "MemoTag has completely transformed how we care for my mother. The early detection alerts have been invaluable.",
      author: "Sarah J.",
      role: "Daughter & Caregiver"
    },
    {
      quote: "As a neurologist, I've found MemoTag's data insights to be incredibly precise and helpful in developing targeted care plans.",
      author: "Dr. Michael Chen",
      role: "Neurologist"
    },
    {
      quote: "The peace of mind that comes with having MemoTag is immeasurable. We can live our lives knowing we'll be alerted if anything changes.",
      author: "Robert T.",
      role: "Husband & Caregiver"
    },
    {
      quote: "MemoTag provided us with insights we never had before. It detected patterns in my father's behavior we couldn't see ourselves.",
      author: "Emily N.",
      role: "Family Caregiver"
    },
    {
      quote: "The data collected by MemoTag helped us adjust medication timing which significantly improved quality of life for our patients.",
      author: "Dr. Jessica Wong",
      role: "Geriatric Specialist"
    },
    {
      quote: "Our care facility has implemented MemoTag for all residents, and the improvement in our early intervention rate is remarkable.",
      author: "Mark L.",
      role: "Care Facility Director"
    },
    {
      quote: "I didn't realize how much stress I was under until MemoTag took over the constant monitoring. It's been life-changing.",
      author: "Patricia H.",
      role: "Spouse & Primary Caregiver"
    }
  ];

  useEffect(() => {
    const scrollTestimonials = () => {
      if (!testimonialRef.current || !inView) return;
      
      const scrollContainer = testimonialRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      
      // Get current scroll position
      let scrollLeft = scrollContainer.scrollLeft;
      
      // If we've scrolled to the end, reset to start
      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        // Otherwise increment scroll from right to left by 1px
        scrollContainer.scrollTo({ left: scrollLeft + 1, behavior: 'auto' });
      }
    };
    
    // Set up scroll interval only when the section is in view
    const intervalId = setInterval(scrollTestimonials, 50);
    
    return () => clearInterval(intervalId);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <section id="traction" className="py-20 pb-10 bg-[var(--background)] relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-[var(--primary)]/5 blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl -z-10 animate-pulse-slow-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Our <motion.span 
              className="text-[var(--primary)] relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Traction
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/30 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </motion.span>
          </h2>
          <p className="section-subheading">
            MemoTag is already making a meaningful impact in the lives of dementia patients and their caregivers.
          </p>
        </motion.div>
        
        {/* Metrics */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "var(--primary-light)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className="bg-[var(--background)]/80 backdrop-blur-sm rounded-lg p-6 text-center border border-[var(--gray)] dark:border-[#2A2A2A]/50 transition-all duration-300 hover-lift"
            >
              <motion.div 
                className="text-5xl mb-4 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
              >
                {metric.icon}
              </motion.div>
              
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2 relative"
                initial={{ y: 10, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
              >
                {metric.value}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[var(--primary)]/20 rounded-full w-1/2"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "50%" } : { width: "0%" }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                />
              </motion.div>
              
              <motion.div 
                className="text-[var(--gray-dark)]"
                initial={{ y: 10, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
              >
                {metric.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--foreground)]">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div 
                key={item} 
                className="h-12 w-32 bg-[var(--background)] border border-[var(--gray)] dark:border-[#2A2A2A] rounded-md flex items-center justify-center hover:border-[var(--primary)]/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 * item + 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 8 }
                }}
              >
                <span className="text-[var(--gray-dark)]">Partner {item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-[var(--foreground)]"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            What People Are Saying
          </motion.h3>
          
          {/* Scrolling testimonials container */}
          <div className="relative mb-8 overflow-hidden pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div 
                ref={testimonialRef}
                className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Add duplicate testimonials at the start for seamless looping */}
                {testimonials.concat(testimonials).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-[var(--background)] p-6 rounded-xl shadow-sm border border-[var(--gray)] dark:border-[#2A2A2A]/20 min-w-[320px] max-w-[320px] flex-shrink-0 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 200, damping: 15 }
                    }}
                    initial={{ y: 0 }}
                    style={{ marginTop: '5px' }}
                  >
                    <motion.svg 
                      className="w-8 h-8 text-[var(--primary)]/40 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                    </motion.svg>
                    <p className="mb-4 text-lg text-[var(--foreground)]">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mr-3">
                        <span className="text-sm text-[var(--primary)] font-semibold">
                          {testimonial.author.substring(0, 1)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--foreground)]">{testimonial.author}</p>
                        <p className="text-[var(--gray-dark)] text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Gradient overlays to indicate infinite scrolling */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        {/* Press Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          className="p-8 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 dark:from-[var(--primary)]/10 dark:to-[var(--accent)]/10 rounded-xl text-center shadow-sm backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-6 text-[var(--foreground)]">As Featured In</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["TechCrunch", "Forbes", "MedTech Today", "Healthcare Weekly"].map((publication, index) => (
              <motion.div 
                key={publication}
                className="text-[var(--gray-dark)] font-semibold hover:text-[var(--primary)] transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                {publication}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 