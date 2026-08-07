'use client';

import { Zap, Heart, Coffee, MapPin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const coreValues = [
  {
    icon: Zap,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    title: 'High Performance',
    desc: 'Blazing-fast apps with optimized core logic and efficient frontend architectures.',
  },
  {
    icon: Heart,
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-400/10',
    title: 'User Centric',
    desc: 'Experiences that aren\'t just functional — they\'re delightful and accessible.',
  },
  {
    icon: Coffee,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'Continuous Growth',
    desc: 'Always exploring new stacks to stay ahead in the fast-moving digital landscape.',
  },
];

const stats = [
  { value: '15+', label: 'Projects Shipped', color: 'text-primary' },
  { value: '3+',  label: 'Years Building',   color: 'text-accent' },
  { value: '500+', label: 'Git Commits',     color: 'text-amber-400' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-[0.15em]">
            The Developer
          </span>
        </motion.div>

        {/* ── Bento Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* 1. Editorial quote — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bento-card p-8 md:p-10 flex flex-col justify-between min-h-[300px] overflow-hidden"
          >
            <div className="space-y-6">
              <blockquote className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-black leading-[1.1] tracking-tight text-foreground">
                "Code is my craft,{' '}
                <span className="clip-green">performance</span>{' '}
                is my religion."
              </blockquote>
              <div className="space-y-4 text-base text-foreground/60 leading-relaxed max-w-2xl">
                <p>
                  I&apos;m <span className="text-foreground font-semibold">Tsedey Solomon</span>, a
                  Full-Stack Software Developer based in Addis Ababa, Ethiopia.
                  I&apos;ve spent 3+ years mastering full-stack engineering — bridging complex
                  backend architectures with intuitive, high-performance user interfaces.
                </p>
                <p>
                  With experience spanning Angular, React, .NET, and Node.js, I work full-time at{' '}
                  <span className="text-primary font-semibold">DAF Tech Computer</span> and
                  actively take on freelance projects that challenge me to grow.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/60">
                <MapPin size={14} className="text-primary" />
                Addis Ababa, Ethiopia
              </div>
              <a
                href="mailto:tsdeys19@gmail.com"
                className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary" />
                tsdeys19@gmail.com
              </a>
            </div>
          </motion.div>

          {/* 2. Core values column — spans 1 col */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={itemVariants}
                  className="bento-card p-5 flex items-start gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${val.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={19} className={val.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">{val.title}</h3>
                    <p className="text-xs text-foreground/55 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Contact CTA chip */}
            <motion.a
              variants={itemVariants}
              href="#contact"
              className="bento-card p-5 flex items-center justify-between group cursor-pointer"
            >
              <span className="text-sm font-bold text-foreground">Let&apos;s work together</span>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all">
                <ArrowRight size={16} />
              </div>
            </motion.a>
          </motion.div>

          {/* 3. Stats bento row — full width */}
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bento-card p-8 text-center group"
            >
              <p className={`text-5xl md:text-6xl font-black mb-2 group-hover:scale-105 transition-transform ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
