'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full-Stack Developer',
  'Software Engineer',
  'Angular & .NET Engineer',
  'React / Next.js Developer',
];

const stats = [
  { value: '2+', label: 'years experience' },
  { value: '7+', label: 'projects shipped' },
  { value: '3+', label: 'companies served' },
];

const bootLines = [
  { cmd: 'whoami', out: 'tsedey — full-stack developer' },
  { cmd: 'cat ./location', out: 'Addis Ababa, Ethiopia' },
  { cmd: './availability --check', out: 'true ─ open to work' },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2400);
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

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16 scanlines">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.35fr,1fr]">
          {/* ── Left column ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80"
            >
              // tsedey.os — v2.0 — engineered in addis ababa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
            >
              Tsedey
              <br />
              <span className="text-luxe italic pr-2">Solomon</span>
            </motion.h1>

            {/* Typewriter prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-3 font-mono text-base md:text-xl"
            >
              <span className="text-primary">&#10095;</span>
              <span className="text-foreground/90">{displayText}</span>
              <span className="inline-block h-5 w-2.5 bg-primary caret-blink md:h-6" />
            </motion.div>

            {/* Terminal CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_-8px_var(--primary)]"
              >
                <span className="opacity-60">$</span> open ./projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 font-mono text-sm text-foreground/90 transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                <span className="opacity-60">$</span> contact --send
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="font-mono">
                  <span className="text-3xl text-luxe md:text-4xl">{stat.value}</span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: floating terminal window ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -6 }}
            animate={{ opacity: 1, x: 0, rotateY: -6 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <div className="os-window glow-gold">
              <div className="os-window-bar">
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                  tsedey@dev:~${' '}
                </span>
              </div>
              <div className="min-h-[180px] p-5">
                <div className="space-y-1.5 font-mono text-xs md:text-sm">
                  {bootLines.map((line) => (
                    <div key={line.cmd}>
                      <p>
                        <span className="text-primary/90">$ </span>
                        <span className="text-foreground/90">{line.cmd}</span>
                      </p>
                      <p className="text-muted-foreground">&gt; {line.out}</p>
                    </div>
                  ))}
                  <span className="inline-block h-3.5 w-2 bg-primary caret-blink" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="block">&#9660; scroll --down</span>
      </a>
    </section>
  );
};

export default Hero;
