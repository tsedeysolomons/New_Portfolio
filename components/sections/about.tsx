'use client';

import { Zap, Heart, Coffee, MapPin, Mail } from 'lucide-react';

const coreValues = [
  {
    icon: Zap,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
    title: 'High Performance',
    desc: 'Building blazing-fast applications with optimized core logic and lightweight, efficient frontend architectures.',
  },
  {
    icon: Heart,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-400/10',
    title: 'User Centric',
    desc: 'Designing experiences that aren\'t just functional, but delightful and accessible for every user.',
  },
  {
    icon: Coffee,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'Fast Learning',
    desc: 'Continuously exploring new tech stacks and methodologies to stay ahead in the fast-moving digital landscape.',
  },
];

const stats = [
  { value: '10+', label: 'Projects Completed', color: 'text-primary' },
  { value: '2+', label: 'Years Experience', color: 'text-pink-400' },
  { value: '500+', label: 'Code Commits', color: 'text-amber-400' },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            The Developer Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            I craft{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              solutions
            </span>{' '}
            for the future.
          </h2>
        </div>

        {/* Bio & Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground/75 leading-relaxed">
              I&apos;m Tsedey Solomon, a Full-Stack Software Developer based in Addis Ababa, Ethiopia.
              I&apos;ve spent the last few years mastering the art of full-stack engineering — focusing on
              bridging the gap between complex backend architectures and intuitive, high-performance user interfaces.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              With experience spanning Angular, React, .NET, and Node.js, I combine creativity with
              technical excellence to deliver solutions that solve real-world problems. Currently working full-time
              as a Software Developer at <span className="text-primary font-semibold">DAF Tech Computer</span>, and
              actively taking on freelance projects.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              My approach is to understand problems deeply, design elegant solutions, and implement them
              with precision and care — writing code that is clean, scalable, and maintainable.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/70">
                <MapPin size={16} className="text-primary" />
                Addis Ababa, Ethiopia
              </div>
              <a
                href="mailto:tsdeys19@gmail.com"
                className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                tsdeys19@gmail.com
              </a>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-4">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex gap-5 items-start group"
                >
                  <div className={`w-12 h-12 rounded-xl ${val.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={val.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{val.title}</h3>
                    <p className="text-sm text-foreground/65 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <p className={`text-5xl font-black mb-2 ${stat.color} group-hover:scale-105 transition-transform`}>
                {stat.value}
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
