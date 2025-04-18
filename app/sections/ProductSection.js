"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const ProductSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const productFeatures = [
    {
      title: "Smart Wearable Device",
      description: "Discreet, comfortable wearable with advanced sensors that monitor cognitive patterns throughout the day",
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/images/wearable.jpg"
    },
    {
      title: "AI-Powered Platform",
      description: "Cloud-based system that analyzes data to detect subtle changes in memory and cognitive function",
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: "/images/ai-platform.jpg"
    }
  ];

  const benefitCards = [
    {
      title: "Early Detection",
      description: "Identify cognitive decline signs months earlier than traditional methods",
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Personalized Care",
      description: "Tailored insights and recommendations based on individual cognitive patterns",
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Peace of Mind",
      description: "Reduce anxiety with continuous monitoring and proactive alerts for caregivers",
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="product" className="py-[var(--section-spacing-y)] bg-[var(--background-alt)]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[var(--section-heading-spacing)]"
        >
          <h2 className="section-heading">
            The <span className="text-[var(--primary)]">MemoTag</span> Product
          </h2>
          <p className="section-subheading">
            Designed with caregivers and individuals with dementia in mind,
            our solution combines cutting-edge technology with ease of use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[var(--section-content-spacing)]">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[var(--background)] rounded-xl overflow-hidden shadow-md border border-[var(--gray)] dark:border-[#2A2A2A]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-[200px] md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0"></div>
                  <div className="w-full h-full flex items-center justify-center p-6 relative z-10">
                    <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[var(--primary)]/20">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">{feature.title}</h3>
                  <p className="text-[var(--gray-dark)]">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[var(--background)] p-6 rounded-xl shadow-sm border border-[var(--gray)] dark:border-[#2A2A2A]"
            >
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">{card.title}</h3>
              <p className="text-[var(--gray-dark)]">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection; 