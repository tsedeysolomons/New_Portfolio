'use client';

import { Mail, MapPin, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillBars = [
  { name: 'Full-Stack Web Dev', level: 90 },
  { name: 'Angular & .NET',     level: 85 },
  { name: 'React & Next.js',    level: 88 },
];

const stats = [
  { label: 'Name',      value: 'Tsedey Solomon' },
  { label: 'Email',     value: 'tsdeys19@gmail.com' },
  { label: 'Telegram',  value: '@tsedi_sol' },
  { label: 'Location',  value: 'Addis Ababa, ET' },
  { label: 'Experience',value: '3+ Years' },
  { label: 'Status',    value: 'Open to Work' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-8 lg:px-10 overflow-hidden bg-card/10">
      {/* Background blobs */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN: Portrait + Floating Skills Card (spans 5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Tsedey Solomon portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Overlapping Floating Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-[-20px] right-[5%] sm:right-[10%] lg:right-[-20px] z-10 w-[260px] bg-card border border-border p-5 rounded-2xl shadow-2xl"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                My Skills
              </h3>
              <div className="space-y-4">
                {skillBars.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-bold text-foreground/80">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    {/* Progress Bar container */}
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Speech-bubble Header & Info (spans 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Boxed title "ABOUT ME" with point pointer */}
            <div className="inline-block relative">
              <div className="border-2 border-primary text-primary px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-[0.2em] relative z-10 bg-background">
                About Me
              </div>
              {/* Pointer bubble tail */}
              <div className="absolute left-[30px] bottom-[-6px] w-3 h-3 bg-background border-r-2 border-b-2 border-primary rotate-45 z-0" />
            </div>

            {/* Biography text */}
            <div className="space-y-4 text-base text-foreground/60 leading-relaxed">
              <p>
                Hi! My name is <span className="text-foreground font-bold">Tsedey Solomon</span>. I am a full-stack developer, and I am very passionate and dedicated to my work. With 3+ years of experience as a professional developer, I have acquired the skills and knowledge necessary to make your project a success.
              </p>
              <p>
                I enjoy every step of the development process, from discussion and collaboration to concept and execution. Currently working full-time at <span className="text-primary font-semibold">DAF Tech Computer</span> and open to freelance opportunities that push boundaries.
              </p>
            </div>

            {/* Info Grid (Labels & Values) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground block">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-foreground/90 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
