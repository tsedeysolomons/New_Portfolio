'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Send, Loader, ExternalLink } from 'lucide-react';
import { Github, Linkedin, Twitter, Telegram } from '@/components/icons';
import { motion } from 'framer-motion';

const channels = [
  {
    label: 'email',
    value: 'tsdeys19@gmail.com',
    href: 'mailto:tsdeys19@gmail.com',
    icon: Mail,
  },
  {
    label: 'telegram',
    value: '@tsedi_sol',
    href: 'https://t.me/tsedi_sol',
    icon: Telegram,
  },
  {
    label: 'github',
    value: 'tsedeysolomons',
    href: 'https://github.com/tsedeysolomons/',
    icon: Github,
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/tsedeysolomons/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tsedey-solomon', icon: Linkedin },
  { label: 'Twitter', href: 'https://x.com/TsedeySolomon', icon: Twitter },
  { label: 'Telegram', href: 'https://t.me/tsedi_sol', icon: Telegram },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // FormSubmit is a free no-signup relay: it forwards the POST to the destination
    // mailbox. First ever send triggers a one-time confirmation email to that
    // mailbox — click the link in it to activate.
    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/tsedeysolomon91@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New portfolio message from ${formData.name}`,
            message: formData.message,
            _subject:
              formData.subject ||
              `[Portfolio] New message from ${formData.name} <${formData.email}>`,
            _template: 'table',
            _captcha: 'false',
          }),
        },
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Contact form submit failed:', err);
      setError('Could not send right now. Please email me directly — see the panel on the left.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-md border border-border bg-card/50 px-3.5 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none';

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
            <span className="opacity-50">06 ·</span> $ contact --new-message
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Get in <span className="text-luxe italic pr-1">Touch</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-5 lg:grid-cols-[1fr,1.25fr] lg:items-stretch">
          {/* ── Connection info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="os-window flex flex-col"
          >
            <div className="os-window-bar">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                connection — info
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-5 font-mono text-sm">
              <div className="space-y-4">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 transition-colors hover:text-primary"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="block truncate text-foreground/90 group-hover:text-primary">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  );
                })}

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      location
                    </span>
                    <span className="block text-foreground/90">Addis Ababa, Ethiopia</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">social</p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Message form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="os-window flex flex-col"
          >
            <div className="os-window-bar">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                message.txt
              </span>
              <span className="ml-auto font-mono text-[10px] text-primary/60">
                {error ? '● error' : submitted ? '● sent' : '● editing'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4 p-5 font-mono">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ada Lovelace"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={inputClass}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the project…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-5 py-3 text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" /> sending…
                  </>
                ) : submitted ? (
                  <>
                    <ExternalLink className="h-4 w-4" /> message sent
                  </>
                ) : (
                  <>
                    <span className="opacity-60">$</span> send --message
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-center font-mono text-xs text-destructive" role="alert">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
