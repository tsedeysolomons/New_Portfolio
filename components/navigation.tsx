'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      setScrolled(window.scrollY > 50);
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
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border'
      : 'bg-transparent'
  }`;

  if (!mounted) {
    return (
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-black text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
              TSEDEY.DEV
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="w-10 h-10" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity"
          >
            TSEDEY.DEV
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/24.21.TsedeysResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200"
            >
              <FileText size={15} />
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-border mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/8 rounded-xl transition-all text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/24.21.TsedeysResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-4 mt-3 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold justify-center"
              onClick={() => setIsOpen(false)}
            >
              <FileText size={15} />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
