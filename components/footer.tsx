import Link from 'next/link';

const quickLinks = [
  { num: '02', label: 'about', href: '#about' },
  { num: '03', label: 'journey', href: '#journey' },
  { num: '04', label: 'projects', href: '#projects' },
  { num: '05', label: 'skills', href: '#skills' },
  { num: '06', label: 'contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-card/30">
      <div className="hairline-gold" />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 font-mono text-xs text-muted-foreground md:flex-row">
          {/* Prompt */}
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="flex gap-1.5">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
            </span>
            <span className="ml-1">
              tsedey@dev<span className="text-primary">:~$</span>
            </span>
            <span className="inline-block h-3.5 w-2 bg-primary caret-blink" />
          </Link>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-1">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded px-2.5 py-1.5 transition-colors hover:text-primary"
              >
                <span className="mr-1 text-[9px] text-muted-foreground/40">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-center">
            © {currentYear} tsedey.dev — <span className="text-primary/80">exit code 0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
