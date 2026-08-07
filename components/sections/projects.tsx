'use client';

import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/icons';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'EMwA Trainer Pooling System',
    subtitle: 'Enterprise Trainer Management Platform',
    description:
      'Streamlining professional trainer mobilization for the Ethiopian Midwives Association. A centralized, data-driven platform optimizing nationwide trainer allocation across Ethiopia\'s healthcare education network.',
    tech: ['Angular', 'Tailwind CSS', 'C#', '.NET'],
    emoji: '🏥',
    status: 'Live',
    statusColor: 'bg-primary/15 text-primary border-primary/20',
    link: 'http://49.12.194.224:8081/',
    github: 'https://github.com/tsedeysolomons/Trainer-pooling.git',
    featured: true,
    accentColor: '#2563EB',
  },
  {
    id: 2,
    num: '02',
    title: 'Ethiopian Midr Babur E-Ticket',
    subtitle: 'Digital Transport Ticketing System',
    description:
      'Digital transportation ticket management with online booking, payment integration, and real-time tracking for Ethiopian railway transport services.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    emoji: '🎫',
    status: 'Completed',
    statusColor: 'bg-accent/15 text-accent border-accent/20',
    link: '#',
    github: '#',
    featured: false,
    accentColor: '#A78BFA',
  },
  {
    id: 3,
    num: '03',
    title: 'Bible Mobile App',
    subtitle: 'Offline Reader — Amharic & English',
    description:
      'React Native app with full offline Bible reading in Amharic & English. Beautiful typography, chapter navigation, and bookmarking.',
    tech: ['React Native', 'Expo', 'Firebase'],
    emoji: '📖',
    status: 'Completed',
    statusColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    link: '#',
    github: '#',
    featured: false,
    accentColor: '#06B6D4',
  },
  {
    id: 4,
    num: '04',
    title: 'E-Combinator Platform',
    subtitle: 'Startup Incubation & Collaboration Hub',
    description:
      'Startup incubation platform inspired by Y Combinator with smart matching algorithms between founders and investors, plus collaboration tools.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emoji: '🚀',
    status: 'In Progress',
    statusColor: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    link: '#',
    github: '#',
    featured: false,
    accentColor: '#F59E0B',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const Projects = () => {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

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
            ✦ Portfolio
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-none">
              Featured{' '}
              <span className="clip-blue">Projects</span>
            </h2>
            <a
              href="https://github.com/tsedeysolomons/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              All on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* ── Featured Project — Full-Width Bento ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bento-card mb-5 overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2">
            {/* Visual side */}
            <div
              className="relative min-h-[260px] lg:min-h-[360px] flex items-center justify-center overflow-hidden"
              style={{ background: `radial-gradient(ellipse at center, ${featured.accentColor}18 0%, transparent 70%)` }}
            >
              {/* Large number watermark */}
              <span
                className="absolute top-4 left-6 project-num select-none"
                style={{ color: `${featured.accentColor}15` }}
              >
                {featured.num}
              </span>
              {/* Emoji */}
              <span className="text-[9rem] select-none group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                {featured.emoji}
              </span>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 lg:block hidden" />
            </div>

            {/* Content side */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Status + number */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${featured.statusColor}`}>
                    {featured.status}
                  </span>
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight text-foreground">
                  {featured.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-5">{featured.subtitle}</p>
                <p className="text-foreground/60 leading-relaxed text-sm mb-6">
                  {featured.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                {featured.link !== '#' && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {featured.github !== '#' && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border hover:border-primary/50 hover:bg-muted text-sm font-bold transition-all"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other Projects — 3-col Bento ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {rest.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bento-card group overflow-hidden flex flex-col"
            >
              {/* Visual header */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(ellipse at center, ${project.accentColor}15 0%, transparent 70%)` }}
              >
                <span
                  className="absolute top-3 left-4 text-5xl font-black select-none"
                  style={{ color: `${project.accentColor}15` }}
                >
                  {project.num}
                </span>
                <span className="text-6xl select-none group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {project.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="font-black text-base mb-1 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold mb-3" style={{ color: project.accentColor }}>
                  {project.subtitle}
                </p>
                <p className="text-xs text-foreground/55 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                      <ExternalLink size={11} /> Live
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-muted text-muted-foreground text-xs font-bold cursor-default">
                      Coming Soon
                    </span>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border hover:border-primary/40 text-xs font-bold transition-all"
                    >
                      <Github size={11} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
