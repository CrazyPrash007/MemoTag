"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import TractionSection from "./sections/TractionSection";
import WaitlistSection from "./sections/WaitlistSection";
import CTASection from "./sections/CTASection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  // Scroll animations setup
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TractionSection />
        <WaitlistSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
