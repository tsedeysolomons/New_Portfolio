import { Mail, Send, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Twitter } from '@/components/icons';

const socialLinks = [
  { icon: Github, href: 'https://github.com/tsedeysolomons/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/tsedey-solomon', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/TsedeySolomon', label: 'Twitter/X' },
  { icon: Send, href: 'https://t.me/tsedi_sol', label: 'Telegram' },
  { icon: Mail, href: 'mailto:tsdeys19@gmail.com', label: 'Email' },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-primary-foreground font-black text-sm">TS</span>
              </div>
              <span className="font-black text-base tracking-tight text-foreground">
                tsedey<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
              Full-Stack Software Developer based in Addis Ababa, Ethiopia. Building performant,
              high-scale digital solutions.
            </p>
            <a
              href="mailto:tsdeys19@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              tsdeys19@gmail.com
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/55 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + Resume */}
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/8 hover:scale-105 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <a
              href="/Tsedey_Solomon_Junior_Full_Stack_Software_Engineer_20260813.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-6 text-xs text-foreground/40">
          <p>© {currentYear} Tsedey Solomon. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
