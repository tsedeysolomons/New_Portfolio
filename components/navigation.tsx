'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { num: '01', href: '#home', label: '[home]' },
  { num: '02', href: '#about', label: 'about' },
  { num: '03', href: '#journey', label: 'journey' },
  { num: '04', href: '#projects', label: 'projects' },
  { num: '05', href: '#skills', label: 'skills' },
  { num: '06', href: '#contact', label: 'contact' },
];

const sections = ['home', 'about', 'journey', 'projects', 'skills', 'contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      setScrolled(window.scrollY > 40);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Shell prompt logo */}
          <a href="#home" className="flex items-center gap-2.5 font-mono text-sm" aria-label="Tsedey Solomon — home">
            <Image
              src="/ts-logo.png"
              alt="Tsedey Solomon logo"
              width={28}
              height={28}
              priority
              className="h-7 w-7 rounded-md"
            />
            <span className="flex gap-1.5">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
            </span>
            <span className="ml-1 text-foreground/90">
              tsedey@dev<span className="text-primary">:~$</span>
            </span>
            <span className="inline-block h-3.5 w-2 bg-primary caret-blink" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group rounded px-3 py-1.5 font-mono text-xs transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className={`mr-1 text-[9px] ${isActive ? 'text-primary/60' : 'text-muted-foreground/40'}`}>
                    {link.num}
                  </span>
                  {link.label}
                </a>
              );
            })}

            {mounted && (
              <button
                onClick={toggleDarkMode}
                id="dark-mode-toggle"
                title="Toggle dark/light mode"
                aria-label="Toggle theme"
                className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            )}

            <a
              href="/Tsedey_Solomon_Junior_Full_Stack_Software_Engineer_20260813.pdf"
              download
              className="ml-1.5 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-3 w-3" />
              cv.pdf
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            {mounted && (
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-foreground"
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Gold hairline under the bar */}
      <div className="hairline-gold" />

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-[9px] text-muted-foreground/40">{link.num}</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Tsedey_Solomon_Junior_Full_Stack_Software_Engineer_20260813.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-2 font-mono text-xs text-primary"
            >
              <Download className="h-3 w-3" />
              cv.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
