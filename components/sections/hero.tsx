'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, GitBranch, Share2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'Software Developer',
    'AI & ML Learner',
    'React Native Developer',
    'Embedded Systems Enthusiast',
    'Problem Solver',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-10 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <div className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">TS</div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Tsedey <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solomon</span>
              </h1>
              
              {/* Title Rotator */}
              <div className="h-16 flex items-center">
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-semibold text-primary">
                    <span className="inline-block min-w-max animate-fade-in">
                      {titles[titleIndex]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Building innovative software solutions through Web Development, Mobile Applications, Artificial Intelligence, and Embedded Systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <GitBranch size={24} />
              </a>
              <a href="#" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Share2 size={24} />
              </a>
              <a href="#" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Tech Stack Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden md:block">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {['Python', 'React', 'Node.js', 'ML', 'Arduino', 'Docker'].map((tech, idx) => (
                  <div
                    key={tech}
                    className="p-4 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <p className="font-semibold text-foreground">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary/50" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
