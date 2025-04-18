"use client";

import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            role: formData.role,
            message: formData.message
          }
        ]);
        
      if (error) throw error;
      
      // Reset form and show success message
      setFormData({ name: '', email: '', role: '', message: '' });
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl -z-10 animate-pulse-slow-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] border border-[var(--primary)]/5 rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] border border-[var(--accent)]/5 rounded-full -z-10 animate-pulse-slow"></div>
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-40 h-40 rotate-45 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-3xl blur-xl -z-10"
        animate={{
          rotate: [45, 55, 45],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -top-10 -right-10 w-40 h-40 -rotate-12 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent rounded-3xl blur-xl -z-10"
        animate={{
          rotate: [-12, -20, -12],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading relative inline-block">
            Get in 
            <motion.span 
              className="text-[var(--primary)] relative ml-2"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Touch
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/30 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </motion.span>
          </h2>
          <motion.p 
            className="section-subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have questions about MemoTag? Interested in partnerships? Reach out to us!
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 relative z-10">
          {/* Contact info */}
          <motion.div
            className="md:col-span-2 p-6 space-y-6 bg-[var(--background)] backdrop-blur-sm rounded-2xl border border-[var(--gray)]/50 shadow-lg hover-lift"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] mx-auto mb-6 flex items-center justify-center text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </motion.div>
            
            <div className="flex items-start space-x-4">
              <motion.div 
                className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-[var(--foreground)]">Email Us</h3>
                <p className="text-[var(--gray-dark)]">contact@memotag.io</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <motion.div 
                className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-[var(--foreground)]">Call Us</h3>
                <p className="text-[var(--gray-dark)]">+91 880056622</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <motion.div 
                className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-[var(--foreground)]">Visit Us</h3>
                <p className="text-[var(--gray-dark)]">A-19 Ramesh Nagar<br />New Delhi, 110015, India</p>
              </div>
                  </div>
            
            <div className="flex items-center space-x-3 mt-8 justify-center">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="p-2 rounded-full bg-[var(--background)] border border-[var(--gray)] dark:border-[#2A2A2A]/30 text-[var(--gray-dark)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  custom={index}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
                  </svg>
                </motion.a>
              ))}
                </div>
          </motion.div>

          {/* Contact form */}
          <motion.div 
            className="md:col-span-3 bg-[var(--background)] backdrop-blur-sm p-8 rounded-2xl border border-[var(--gray)]/50 shadow-xl overflow-hidden relative hover-lift"
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--primary)]/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[var(--accent)]/10 blur-3xl"></div>
            
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary-light)]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <motion.h3 
              className="text-xl font-bold mb-6 text-center text-[var(--foreground)] relative"
              variants={itemVariants}
            >
              Send Us a Message
              <motion.div 
                className="mt-2 h-1 w-16 bg-[var(--primary)]/30 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 w-full relative z-10">
              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="name" className="block mb-2 font-medium text-[var(--foreground)] flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(var(--primary-rgb), 0.2)", 
                    borderColor: "var(--primary)" 
                  }}
                  whileHover={{ borderColor: "var(--primary)" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--gray)] focus:outline-none transition-all duration-200 shadow-sm"
                  placeholder="John Doe"
                />
              </motion.div>
                  
              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="email" className="block mb-2 font-medium text-[var(--foreground)] flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(var(--primary-rgb), 0.2)", 
                    borderColor: "var(--primary)" 
                  }}
                  whileHover={{ borderColor: "var(--primary)" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--gray)] focus:outline-none transition-all duration-200 shadow-sm"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="role" className="block mb-2 font-medium text-[var(--foreground)] flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  I am a...
                </label>
                <div className="relative">
                  <motion.select
                    whileFocus={{ 
                      boxShadow: "0 0 0 2px rgba(var(--primary-rgb), 0.2)", 
                      borderColor: "var(--primary)" 
                    }}
                    whileHover={{ borderColor: "var(--primary)" }}
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--gray)] focus:outline-none transition-all duration-200 shadow-sm appearance-none text-[var(--foreground)]"
                  >
                    <option value="">Select an option</option>
                    <option value="caregiver">Caregiver</option>
                    <option value="patient">Patient</option>
                    <option value="healthcare">Healthcare Professional</option>
                    <option value="business">Business / Partner</option>
                    <option value="other">Other</option>
                  </motion.select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--gray-dark)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block mb-2 font-medium text-[var(--foreground)] flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(var(--primary-rgb), 0.2)", 
                    borderColor: "var(--primary)" 
                  }}
                  whileHover={{ borderColor: "var(--primary)" }}
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--gray)] focus:outline-none transition-all duration-200 shadow-sm"
                  placeholder="What would you like to know about MemoTag?"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative group shadow-md"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </div>
              </motion.button>

              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 text-center"
                >
                  <div className="flex items-center justify-center">
                    <motion.div 
                      className="mr-2 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 text-center"
                >
                  <div className="flex items-center justify-center">
                    <motion.div 
                      className="mr-2 flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </motion.div>
                    <span>{submitError}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 