'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Highlight active nav section
      const sections = ['about', 'skills', 'projects', 'journey', 'experience', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkState = !isDark;
    if (newDarkState) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDark(newDarkState);
  };

  const navLinks = [
    { href: '#about',      label: 'About' },
    { href: '#skills',     label: 'Skills' },
    { href: '#projects',   label: 'Projects' },
    { href: '#journey',    label: 'Journey' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact',    label: 'Contact' },
  ];

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-background/85 backdrop-blur-2xl border-b border-border shadow-2xl shadow-black/20'
      : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-[68px]">

          {/* Logo — bold monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Tsedey Solomon — Home"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-black text-sm leading-none">TS</span>
            </div>
            <span className="font-black text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              tsedey<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav — uppercase small caps */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-widest transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/50 hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={toggleDarkMode}
                id="dark-mode-toggle"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-bold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-200"
            >
              Hire Me
              <span className="text-primary-foreground/70">→</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-3 border-t border-border mt-1 animate-fade-slide-up">
            <div className="space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[13px] font-semibold uppercase tracking-widest text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="px-4 mt-4 pt-4 border-t border-border">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                Hire Me →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
