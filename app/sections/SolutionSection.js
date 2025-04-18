"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Cognitive Tracking",
      description: "Continuous monitoring of cognitive patterns, detecting subtle changes that may indicate early signs of decline."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Early Warning Alerts",
      description: "AI-powered algorithms detect anomalies and send alerts to caregivers and healthcare providers for timely intervention."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Caregiver Support",
      description: "Resources, guidance, and community for those caring for dementia patients, reducing burnout and improving care quality."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data Insights",
      description: "Comprehensive analytics for healthcare providers to make more informed treatment decisions based on real-world data."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section id="solution" className="py-[var(--section-spacing-y)] bg-[var(--background)] relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--accent)]/5 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--primary)]/5 rounded-full filter blur-3xl -z-10 animate-pulse-slow-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[var(--section-heading-spacing)]"
        >
          <h2 className="section-heading">
            Our <span className="text-[var(--primary)] relative">
              Solution
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary)]/30 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </span>
          </h2>
          <p className="section-subheading">
            Introducing MemoTag, an AI-powered wearable device and platform that transforms
            how we approach dementia care.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row gap-8 mb-[var(--section-content-spacing)]"
        >
          <motion.div
            variants={itemVariants}
            className="lg:w-[40%] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Advanced Technology for Early Detection</h3>
            <p className="text-[var(--gray-dark)] mb-6">
              MemoTag combines cutting-edge hardware with proprietary AI algorithms to provide continuous, non-invasive monitoring of cognitive patterns and detect early signs of deterioration.
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                className="btn-primary group"
                onClick={() => {
                  const featuresSection = document.querySelector('#solution .grid-cols-1.md\\:grid-cols-2');
                  if (featuresSection) {
                    const offsetTop = featuresSection.getBoundingClientRect().top + window.pageYOffset - 150;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  Learn how it works
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[450px] w-full max-w-md mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-[var(--background)] rounded-xl overflow-hidden shadow-xl dark:shadow-[#4F6AFF]/10 border border-[var(--gray)] dark:border-[#2A2A2A] hover:border-[var(--primary)]/30 transition-colors duration-300">
              <div className="h-full flex flex-col items-center justify-center p-8">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 border-2 border-[var(--primary)]/20 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-[var(--primary)]/20 opacity-50" style={{ animationDuration: "3s" }}></div>
                  <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      variants={pathVariants}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">MemoTag Device</h3>
                <p className="text-[var(--gray-dark)] mb-6 text-center">Our discreet, wearable device continuously monitors cognitive patterns without disrupting daily life.</p>
                <motion.div 
                  className="w-full h-[200px] rounded-lg bg-[var(--background)] flex items-center justify-center overflow-hidden shadow-inner border border-[var(--gray)] dark:border-[#2A2A2A] p-2 relative group"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Image 
                        src="/images/demo.jpeg" 
                        alt="MemoTag Wearable Device" 
                        width={320} 
                        height={180} 
                        className="object-contain h-full w-full z-10 drop-shadow-md transition-transform duration-300"
                        priority
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent z-0 rounded-md"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[var(--background)] p-6 rounded-xl shadow-sm border border-[var(--gray)] dark:border-[#2A2A2A] hover-lift group cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)", borderColor: "var(--primary-light)" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div 
                className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">{feature.title}</h3>
              <p className="text-[var(--gray-dark)]">{feature.description}</p>
              
              <motion.div 
                className="w-full h-0.5 bg-gradient-to-r from-[var(--primary)]/30 to-transparent mt-4 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}