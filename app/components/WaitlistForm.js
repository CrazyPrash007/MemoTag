"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  // Email validation function
  const isValidEmail = (email) => {
    // More comprehensive email validation regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.trim());
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Validate email
      if (!email) {
        throw new Error("Email address is required");
      }
      
      if (!isValidEmail(email)) {
        throw new Error("Please enter a valid email address");
      }
      
      // Send email to API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to join waitlist');
      }
      
      // Clear form on success
      setEmail("");
      setIsSubmitted(true);
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setError(err.message || "There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`${className} w-full`}>
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="text-center py-4 px-2"
        >
          <motion.div 
            className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <motion.svg 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-6 h-6 text-green-600 dark:text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </motion.svg>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-[var(--foreground)] font-medium"
          >
            Thanks for joining our waitlist!
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xs md:text-sm text-[var(--gray-dark)] mt-1 mb-3"
          >
            We'll keep you updated on our progress.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSubmitted(false)}
            className="text-[var(--primary)] hover:underline text-xs mt-1 px-3 py-1 hover:bg-[var(--primary)]/5 rounded-md transition-colors"
          >
            Join with another email
          </motion.button>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-3 relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-grow relative">
            <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 blur-sm"></div>
            </div>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 h-12 rounded-lg border border-[var(--gray)] dark:border-[var(--gray-dark)]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 text-[var(--foreground)] relative z-10"
              disabled={isSubmitting}
              aria-label="Email address"
              whileFocus={{ scale: 1.01 }}
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-red-500 mt-1 absolute -bottom-5 left-1"
              >
                {error}
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            className="btn-primary whitespace-nowrap h-12 px-6 overflow-hidden relative"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Joining...</span>
              </motion.div>
            ) : (
              <>
                <span className="relative z-10">Join Waitlist</span>
                <motion.div
                  className="absolute inset-0 bg-[var(--primary-light)] opacity-0"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  );
} 