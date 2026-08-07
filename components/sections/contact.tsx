'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Loader, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Twitter } from '@/components/icons';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'GitHub',     href: 'https://github.com/tsedeysolomons/',        icon: Github,   desc: '@tsedeysolomons',  color: 'hover:border-white/30 hover:text-white' },
  { label: 'LinkedIn',   href: 'https://linkedin.com/in/tsedey-solomon',     icon: Linkedin, desc: 'tsedey-solomon',   color: 'hover:border-blue-500/40 hover:text-blue-400' },
  { label: 'Twitter / X',href: 'https://x.com/TsedeySolomon',               icon: Twitter,  desc: '@TsedeySolomon',   color: 'hover:border-sky-500/40 hover:text-sky-400' },
  { label: 'Telegram',   href: 'https://t.me/tsedi_sol',                     icon: Send,     desc: '@tsedi_sol',       color: 'hover:border-primary/40 hover:text-primary' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
    'w-full px-4 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm font-medium';

  return (
    <section id="contact" className="relative py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
            ✉ Let's Connect
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-none">
            Got a project{' '}
            <span className="clip-blue">in mind?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5">

          {/* ── Left — Big CTA Card (3 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bento-card p-10 md:p-12 flex flex-col justify-between min-h-[440px] overflow-hidden relative"
          >
            {/* Decorative blue glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
                <Mail size={26} className="text-primary" />
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3">
                  Let&apos;s work<br />
                  <span className="clip-blue">together.</span>
                </h3>
                <p className="text-foreground/55 text-base leading-relaxed max-w-md">
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just having a great conversation about tech.
                </p>
              </div>

              {/* Quick contact info */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:tsdeys19@gmail.com"
                  className="group flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold">tsdeys19@gmail.com</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="mailto:tsdeys19@gmail.com"
                id="email-cta-btn"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/tsedey-solomon"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin-cta-btn"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground/70 font-bold text-sm hover:border-primary/50 hover:text-foreground hover:bg-primary/5 transition-all"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
              <button
                onClick={() => setShowForm(!showForm)}
                id="contact-form-toggle"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border text-muted-foreground font-bold text-sm hover:border-primary/30 hover:text-foreground transition-all"
              >
                {showForm ? 'Hide Form' : 'Message Form'}
              </button>
            </div>
          </motion.div>

          {/* ── Right — Social Links (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground px-1 mb-1">
              Find me online
            </h3>
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.45 }}
                  className={`bento-card p-5 flex items-center gap-4 group ${social.color}`}
                >
                  <div className="w-11 h-11 rounded-xl border border-border bg-muted flex items-center justify-center shrink-0 group-hover:bg-transparent transition-colors">
                    <Icon size={19} className="text-muted-foreground group-hover:text-current transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground group-hover:text-current transition-colors">{social.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{social.desc}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground/40 group-hover:text-current group-hover:opacity-100 transition-all" />
                </motion.a>
              );
            })}

            {/* Availability chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bento-card p-5 flex items-center gap-3 mt-auto"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">Available for freelance work</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Response within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Optional Contact Form (collapsible) ── */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-5 bento-card p-8 md:p-10"
          >
            <h3 className="text-xl font-black mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold mb-2 text-muted-foreground uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange} required
                  className={inputClass} placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold mb-2 text-muted-foreground uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange} required
                  className={inputClass} placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-[11px] font-bold mb-2 text-muted-foreground uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange} required
                  className={inputClass} placeholder="Project discussion, collaboration..."
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-[11px] font-bold mb-2 text-muted-foreground uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} required
                  rows={5} className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <div className="md:col-span-2 flex items-center gap-4">
                <button
                  type="submit" disabled={loading} id="contact-submit-btn"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? (
                    <><Loader size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-primary text-sm font-bold"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center text-xs">✓</span>
                    Message sent! I&apos;ll get back to you shortly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
