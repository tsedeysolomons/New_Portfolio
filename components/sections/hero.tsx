'use client';

import { useEffect, useState } from 'react';
import { Mail, Send, ExternalLink, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/icons';
import { motion } from 'framer-motion';

const techBadges = [
  { label: 'TypeScript' },
  { label: 'React / Next.js' },
  { label: 'Angular / .NET' },
  { label: 'Node.js' },
  { label: 'PostgreSQL' },
  { label: 'Full-Stack' },
];

const roles = [
  'Full-Stack Developer',
  'Angular & .NET Engineer',
  'React / Next.js Developer',
  'TypeScript Specialist',
  'Problem Solver',
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tsedeysolomons/',
    icon: Github,
    color: 'hover:text-white hover:bg-gray-800',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tsedey-solomon',
    icon: Linkedin,
    color: 'hover:text-white hover:bg-blue-600',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/tsedi_sol',
    icon: Send,
    color: 'hover:text-white hover:bg-sky-500',
  },
  {
    label: 'Email',
    href: 'mailto:tsdeys19@gmail.com',
    icon: Mail,
    color: 'hover:text-white hover:bg-primary',
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/6 rounded-full blur-[80px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-500 text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                  Tsedey
                </span>
                <br />
                <span className="text-foreground">Solomon</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="h-10 flex items-center"
              >
                <p key={roleIndex} className="text-xl md:text-2xl font-semibold text-muted-foreground animate-fade-slide-up">
                  {roles[roleIndex]}
                </p>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-lg"
            >
              Specialized in crafting performant, high-scale digital solutions that bridge design and technology.{' '}
              <span className="inline-flex items-center gap-1 text-foreground/80 font-medium">
                <MapPin size={14} className="text-primary shrink-0" />
                Addis Ababa, Ethiopia
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300"
              >
                View My Work
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/24.21.TsedeysResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-primary/40 text-primary font-semibold hover:bg-primary/8 hover:border-primary hover:scale-[1.03] transition-all duration-300"
              >
                <ExternalLink size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 + idx * 0.08, duration: 0.4 }}
                    className={`w-11 h-11 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color}`}
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-accent/30 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent select-none">
                    TS
                  </span>
                </div>
              </div>
              {/* Open to Work badge */}
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-bold shadow-lg">
                <span className="text-primary">💻</span> Open to Work
              </div>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 w-full max-w-sm"
            >
              {[
                { value: '2+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '500+', label: 'Commits' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                  className="glass p-4 rounded-2xl text-center"
                >
                  <p className="text-2xl font-black text-primary">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center max-w-sm"
            >
              {techBadges.map((badge, idx) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.05 + idx * 0.06, duration: 0.3 }}
                  className="px-4 py-1.5 rounded-full glass text-sm font-semibold text-foreground/80 hover:text-primary hover:border-primary/40 transition-all cursor-default"
                >
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
