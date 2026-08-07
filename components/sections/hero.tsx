'use client';

import { useEffect, useState } from 'react';
import { Mail, Send, MapPin, ArrowDown, Download } from 'lucide-react';
import { Github, Linkedin } from '@/components/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  'Full-Stack Developer',
  'Angular & .NET Engineer',
  'React / Next.js Dev',
  'TypeScript Specialist',
  'Software Engineer',
];

// Row 1 — scrolls LEFT (frontend + backend)
const techRow1 = [
  { label: 'TypeScript',    emoji: '📘' },
  { label: 'React',         emoji: '⚛️' },
  { label: 'Next.js',       emoji: '▲' },
  { label: 'Angular',       emoji: '🔴' },
  { label: '.NET / C#',     emoji: '💜' },
  { label: 'Node.js',       emoji: '🟩' },
  { label: 'Tailwind CSS',  emoji: '🎨' },
  { label: 'REST APIs',     emoji: '🔗' },
  // duplicated for seamless infinite loop
  { label: 'TypeScript',    emoji: '📘' },
  { label: 'React',         emoji: '⚛️' },
  { label: 'Next.js',       emoji: '▲' },
  { label: 'Angular',       emoji: '🔴' },
  { label: '.NET / C#',     emoji: '💜' },
  { label: 'Node.js',       emoji: '🟩' },
  { label: 'Tailwind CSS',  emoji: '🎨' },
  { label: 'REST APIs',     emoji: '🔗' },
];

// Row 2 — scrolls RIGHT (languages + tools)
const techRow2 = [
  { label: 'PostgreSQL',    emoji: '🐘' },
  { label: 'React Native',  emoji: '📱' },
  { label: 'Docker',        emoji: '🐳' },
  { label: 'Firebase',      emoji: '🔥' },
  { label: 'Python',        emoji: '🐍' },
  { label: 'Git & GitHub',  emoji: '🗂️' },
  { label: 'Arduino',       emoji: '🔌' },
  { label: 'Vercel',        emoji: '▲' },
  // duplicated for seamless infinite loop
  { label: 'PostgreSQL',    emoji: '🐘' },
  { label: 'React Native',  emoji: '📱' },
  { label: 'Docker',        emoji: '🐳' },
  { label: 'Firebase',      emoji: '🔥' },
  { label: 'Python',        emoji: '🐍' },
  { label: 'Git & GitHub',  emoji: '🗂️' },
  { label: 'Arduino',       emoji: '🔌' },
  { label: 'Vercel',        emoji: '▲' },
];

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/tsedeysolomons/',         icon: Github,   color: 'hover:border-white/30 hover:text-white' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tsedey-solomon',      icon: Linkedin, color: 'hover:border-blue-500/50 hover:text-blue-400' },
  { label: 'Telegram', href: 'https://t.me/tsedi_sol',                      icon: Send,     color: 'hover:border-sky-500/50 hover:text-sky-400' },
  { label: 'Email',    href: 'mailto:tsdeys19@gmail.com',                   icon: Mail,     color: 'hover:border-primary/50 hover:text-primary' },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[68px]"
    >
      {/* Background — subtle grid + blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code background texture */}
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.25] transition-opacity duration-300"
          style={{
            backgroundImage: 'url("/bg-code.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Green blob top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] animate-float" />
        {/* Purple blob bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2.5s' }} />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT — Headline ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for work
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground font-medium">
                <MapPin size={12} className="text-primary" />
                Addis Ababa, ET
              </span>
            </motion.div>

            {/* Giant Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
                <span className="block text-foreground">I Build</span>
                <span className="block clip-green">Digital</span>
                <span className="block text-foreground">Experiences.</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 h-8"
            >
              <span className="text-lg md:text-xl font-semibold text-muted-foreground">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-primary rounded-full animate-cursor" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-foreground/55 leading-relaxed max-w-lg"
            >
              Specialized in crafting performant, high-scale digital solutions —
              bridging beautiful frontends with robust backends at{' '}
              <span className="text-foreground/80 font-semibold">DAF Tech Computer</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                id="view-work-btn"
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300"
              >
                View My Work
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/24.21.TsedeysResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="download-resume-btn"
                className="group flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-border text-foreground/70 font-bold text-sm hover:border-primary/50 hover:text-foreground hover:bg-primary/5 transition-all duration-300"
              >
                <Download size={15} className="text-primary" />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-2 pt-2"
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95 + idx * 0.07, duration: 0.4 }}
                    className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color}`}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Avatar Bento ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar card — geometric frame */}
            <div className="relative w-full max-w-sm">
              {/* Outer decorative ring */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-accent/20 blur-sm" />
              <div className="relative bento-card p-6 flex flex-col items-center gap-6 overflow-hidden">
                {/* Geometric pattern background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

                {/* Avatar */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 animate-pulse-glow relative">
                    <Image
                      src="/profile.jpg"
                      alt="Tsedey Solomon"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  {/* Online badge */}
                  <div className="absolute -bottom-2 -right-2 glass px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-foreground/80">Open to Work</span>
                  </div>
                </div>

                {/* Name + Title */}
                <div className="text-center relative z-10">
                  <h2 className="text-xl font-black text-foreground tracking-tight">Tsedey Solomon</h2>
                  <p className="text-sm text-muted-foreground mt-1">Full-Stack Software Developer</p>
                </div>

                {/* Stat chips */}
                <div className="grid grid-cols-3 gap-3 w-full relative z-10">
                  {[
                    { value: '3+',   label: 'Years Exp.' },
                    { value: '15+',  label: 'Projects' },
                    { value: '500+', label: 'Commits' },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                      className="flex flex-col items-center py-3 rounded-xl bg-muted/50 border border-border/50"
                    >
                      <span className="text-xl font-black text-primary leading-none">{stat.value}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-1 text-center">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini about chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="w-full max-w-sm bento-card p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-xl">💻</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Currently at DAF Tech Computer</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Full-Stack Developer · Addis Ababa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack — Dual Counter-Rotating Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground shrink-0">
              Tech Stack
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* 3D perspective wrapper */}
          <div
            className="relative overflow-hidden space-y-3"
            style={{ perspective: '1000px' }}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Row 1 — scrolls LEFT */}
            <div className="flex overflow-hidden">
              <div className="marquee-track">
                {techRow1.map((item, idx) => (
                  <span
                    key={`r1-${item.label}-${idx}`}
                    className="skill-pill shrink-0 flex items-center gap-1.5"
                  >
                    <span className="text-sm leading-none">{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls RIGHT */}
            <div className="flex overflow-hidden">
              <div className="marquee-track-reverse">
                {techRow2.map((item, idx) => (
                  <span
                    key={`r2-${item.label}-${idx}`}
                    className="skill-pill shrink-0 flex items-center gap-1.5"
                  >
                    <span className="text-sm leading-none">{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
