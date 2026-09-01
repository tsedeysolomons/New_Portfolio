'use client';

import { useEffect, useState } from 'react';
import { Mail, Send, MapPin, ArrowDown } from 'lucide-react';
import { Github, Linkedin, Twitter } from '@/components/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  'Developer',
  'Software Engineer',
  'Full-Stack Developer',
  'Angular & .NET Engineer',
  'React / Next.js Developer',
];

const techRow1 = [
  { label: 'TypeScript', emoji: '📘' },
  { label: 'React', emoji: '⚛️' },
  { label: 'Next.js', emoji: '▲' },
  { label: 'Angular', emoji: '🔴' },
  { label: '.NET / C#', emoji: '💜' },
  { label: 'Node.js', emoji: '🟩' },
  { label: 'Tailwind CSS', emoji: '🎨' },
  { label: 'REST APIs', emoji: '🔗' },
  // duplicate for loop
  { label: 'TypeScript', emoji: '📘' },
  { label: 'React', emoji: '⚛️' },
  { label: 'Next.js', emoji: '▲' },
  { label: 'Angular', emoji: '🔴' },
  { label: '.NET / C#', emoji: '💜' },
  { label: 'Node.js', emoji: '🟩' },
  { label: 'Tailwind CSS', emoji: '🎨' },
  { label: 'REST APIs', emoji: '🔗' },
];

const techRow2 = [
  { label: 'PostgreSQL', emoji: '🐘' },
  { label: 'React Native', emoji: '📱' },
  { label: 'Docker', emoji: '🐳' },
  { label: 'Firebase', emoji: '🔥' },
  { label: 'Python', emoji: '🐍' },
  { label: 'Git & GitHub', emoji: '🗂️' },
  { label: 'Arduino', emoji: '🔌' },
  { label: 'Vercel', emoji: '▲' },
  // duplicate for loop
  { label: 'PostgreSQL', emoji: '🐘' },
  { label: 'React Native', emoji: '📱' },
  { label: 'Docker', emoji: '🐳' },
  { label: 'Firebase', emoji: '🔥' },
  { label: 'Python', emoji: '🐍' },
  { label: 'Git & GitHub', emoji: '🗂️' },
  { label: 'Arduino', emoji: '🔌' },
  { label: 'Vercel', emoji: '▲' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/tsedeysolomons/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tsedey-solomon', icon: Linkedin },
  { label: 'Twitter', href: 'https://x.com/TsedeySolomon', icon: Twitter },
  { label: 'Telegram', href: 'https://t.me/tsedi_sol', icon: Send },
  { label: 'Email', href: 'mailto:tsdeys19@gmail.com', icon: Mail },
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
          setTimeout(() => setIsDeleting(true), 2500);
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
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px] pb-10"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />
        {/* Glow Effects */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10 py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">

          {/* ── LEFT COLUMN: Text Block (spans 7 cols on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 lg:pr-10"
          >
            {/* Social Icons row (top left of text) */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>

            {/* Typewriter Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                I&apos;m a <span className="clip-blue inline-block">{displayText}</span>
                <span className="w-1 h-[40px] sm:h-[50px] md:h-[60px] ml-1 bg-primary inline-block animate-cursor align-middle" />
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-xl">
              I am a Software Developer with extensive experience of 2+ years. My expertise is to build and design performant full-stack applications, mobile apps, and embedded systems at <span className="text-primary font-semibold">DAF Tech Computer</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
              >
                My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 rounded-full border-2 border-foreground text-foreground font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-200"
              >
                Hire Me
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Portrait Image Block (spans 5 cols on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-2xl group">
              {/* Grayscale portrait of Tsedey */}
              <Image
                src="/profile.jpg"
                alt="Tsedey Solomon Portrait"
                fill
                priority
                className="object-cover grayscale contrast-[1.20] brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
              />
              {/* Radial gradient mask overlay to blend profile smoothly */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent opacity-20" />
            </div>
          </motion.div>
        </div>

        {/* Counter-rotating Tech stack row at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16"
        >
          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground shrink-0">
              Expertise
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="relative overflow-hidden space-y-3" style={{ perspective: '1000px' }}>
            {/* Fade overlays on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Row 1 — left */}
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

            {/* Row 2 — right */}
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
