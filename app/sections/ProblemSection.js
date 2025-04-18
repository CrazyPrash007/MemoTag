"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };
  
  const statistics = [
    {
      value: "55M+",
      label: "People with dementia worldwide",
      description: "With projections to reach 139 million by 2050"
    },
    {
      value: "70%",
      label: "of cases are undiagnosed",
      description: "Leading to delayed treatment and support"
    },
    {
      value: "$1.3T",
      label: "Annual global cost",
      description: "Financial burden on healthcare systems and families"
    },
    {
      value: "80%",
      label: "of caregivers report high stress",
      description: "Affecting both physical and mental health"
    }
  ];
  
  return (
    <section id="problem" className="py-[var(--section-spacing-y)] bg-[var(--background)] relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-[var(--secondary)]/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 left-0 w-80 h-80 rounded-full bg-[var(--primary)]/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-[var(--section-heading-spacing)]"
        >
          <h2 className="section-heading">
            The Challenge of <motion.span 
              className="text-[var(--primary)] inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Dementia Care
            </motion.span>
          </h2>
          <p className="section-subheading">
            Dementia affects millions globally, creating significant challenges for patients, 
            caregivers, and healthcare systems alike.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.2 * index,
                    ease: "easeOut" 
                  } 
                }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className="bg-[var(--background)]/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-[var(--gray)] dark:border-[#2A2A2A]/50 hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-[var(--primary)]/5 via-[var(--primary)]/10 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.span 
                  className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-3 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                >
                  {stat.value}
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[var(--primary)]/20 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                  />
                </motion.span>
                <h3 className="text-lg font-semibold mb-2 text-center text-[var(--foreground)]">{stat.label}</h3>
                <p className="text-[var(--gray-dark)] text-center text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                delay: 0.8,
                duration: 0.8
              } 
            }
          }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mt-[var(--section-content-spacing)] p-8 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 dark:from-[var(--primary)]/10 dark:to-[var(--accent)]/10 rounded-2xl shadow-sm backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div 
              className="w-16 h-16 bg-[var(--primary)]/20 rounded-full flex items-center justify-center shrink-0 relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-[var(--primary)]/10 opacity-50" style={{ animationDuration: "3s" }}></div>
              <motion.svg 
                className="w-8 h-8 text-[var(--primary)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-[var(--foreground)]"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                The Gap in Dementia Care
              </motion.h3>
              <motion.p 
                className="text-[var(--gray-dark)]"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Current approaches to dementia care face significant challenges: limited real-time monitoring, 
                delayed diagnosis, high caregiver burden, and insufficient data for personalized treatment plans. 
                These gaps create a critical need for innovative solutions that can provide continuous assessment 
                and support for both patients and caregivers.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 