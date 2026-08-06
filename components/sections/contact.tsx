'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Loader, Github, Linkedin, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tsdeys19@gmail.com',
    href: 'mailto:tsdeys19@gmail.com',
    color: 'bg-primary/10 text-primary',
    hoverColor: 'group-hover:bg-primary group-hover:text-primary-foreground',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: '#',
    color: 'bg-accent/10 text-accent',
    hoverColor: 'group-hover:bg-accent group-hover:text-white',
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tsedeysolomons/',
    icon: Github,
    desc: '@tsedeysolomons',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tsedey-solomon',
    icon: Linkedin,
    desc: 'tsedey-solomon',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/TsedeySolomon',
    icon: Twitter,
    desc: '@TsedeySolomon',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/tsedi_sol',
    icon: Send,
    desc: '@tsedi_sol',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm';

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            ✉ Let&apos;s Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Have a project{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              in mind?
            </span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a great conversation about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl ${info.color} ${info.hoverColor} transition-all duration-300 shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base font-black mb-4 text-foreground">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 hover:shadow-md transition-all duration-200 group"
                    >
                      <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{social.label}</p>
                        <p className="text-[10px] text-muted-foreground">{social.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold mb-2 text-foreground/80 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold mb-2 text-foreground/80 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold mb-2 text-foreground/80 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Project discussion, collaboration..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold mb-2 text-foreground/80 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm font-semibold flex items-center gap-2">
                  <span>✓</span>
                  Message sent! I&apos;ll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
