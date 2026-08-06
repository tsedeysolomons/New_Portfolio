import { Mail, Send } from 'lucide-react';
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
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
              TSEDEY.DEV
            </h3>
            <p className="text-sm text-foreground/65 leading-relaxed">
              Full-Stack Software Developer based in Addis Ababa, Ethiopia. Building performant, high-scale digital solutions that bridge design and technology.
            </p>
            <p className="text-sm font-semibold text-primary">
              tsdeys19@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/65 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Resume */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-5">Connect</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/25 hover:scale-[1.05] transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <a
              href="/24.21.TsedeysResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-xs text-foreground/55">
          <p>
            © {currentYear} Tsedey Solomon. All rights reserved.
          </p>
          <p className="text-foreground/40">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
