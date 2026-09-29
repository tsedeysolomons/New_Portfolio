'use client';

import { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Github } from '@/components/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    slug: 'trainer-pooling',
    title: 'EMwA Trainer Pooling System',
    org: 'Ethiopian Midwives Association',
    role: 'Full-Stack Developer',
    description:
      "Streamlining professional trainer mobilization for the Ethiopian Midwives Association — a centralized, data-driven platform optimizing nationwide trainer allocation across Ethiopia's healthcare education network.",
    tech: ['Angular', 'Tailwind CSS', 'C#', '.NET'],
    image: '/trainerpooling.webp',
    link: 'http://49.12.194.224:8081/',
    github: 'https://github.com/tsedeysolomons/Trainer-pooling.git',
  },
  {
    slug: 'water-billing',
    title: 'DAF-TECH Water Billing System',
    org: 'Awash Town Water & Sewerage Office',
    role: 'Software Developer',
    description:
      'An enterprise-grade billing and management platform featuring meter rate configuration, consumption tariff management, customer service, finance and human resource modules.',
    tech: ['Angular', 'C#', '.NET', 'SQL Server'],
    image: '/daftech-billing.webp',
    link: 'http://196.190.251.194:8089/',
    github: '#',
  },
  {
    slug: 'e-ticket',
    title: 'Ethiopian Midr Babur E-Ticket',
    org: 'EMBE-T',
    role: 'Full-Stack Developer',
    description:
      'A digital ticketing system designed to modernize public transportation in Ethiopia with online booking, payment integration and real-time tracking.',
    tech: ['React', 'Node.js', 'Prisma', 'MySQL'],
    image: '/eticket.webp',
    link: '#',
    github: 'https://github.com/tsedeysolomons/EMBE-T.git',
  },
  {
    slug: 'e-combinator',
    title: 'E-Combinator Platform',
    org: 'i-cog Labs',
    role: 'Full-Stack Developer',
    description:
      'A digital startup accelerator platform built for i-cog labs that connects Ethiopian innovators and investors in one collaboration hub.',
    tech: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    image: '/ecombinator.webp',
    link: '#',
    github: 'https://github.com/tsedeysolomons/E-COMBINATOR.git',
  },
  {
    slug: 'skillswap',
    title: 'SkillSwap Platform',
    org: 'Personal Project',
    role: 'Mobile Developer',
    description:
      'A skill-sharing mobile app built with React Native, letting users exchange skills and services through profiles, chat and scheduling.',
    tech: ['React Native', 'Firebase', 'Chat', 'Scheduling'],
    image: '/skillswap.webp',
    link: '#',
    github: 'https://github.com/tsedeysolomons/SkillSwap.git',
  },
  {
    slug: 'bgs-menu',
    title: 'BGS Restaurant Menu',
    org: 'BGS Restaurant',
    role: 'Frontend Developer',
    description:
      'A fully responsive digital menu with categories, real-time cart, advanced search and filtering for mobile and desktop.',
    tech: ['Next.js', 'Supabase', 'Prisma', 'React'],
    image: '/bgs-restaurant.webp',
    link: '#',
    github: 'https://github.com/tsedeysolomons/BGS-Restaurant_Menu.git',
  },
  {
    slug: 'have-fashion',
    title: 'Have Fashion Inventory',
    org: 'Have Fashion',
    role: 'Frontend Developer',
    description:
      "A modern web-based inventory management system for a men's clothing store, with dashboard analytics and stock tracking.",
    tech: ['React', 'Tailwind CSS', 'Dashboard', 'Inventory'],
    image: '/havefashion.webp',
    link: '#',
    github: 'https://github.com/tsedeysolomons/have-fashi-inventory-system.git',
  },
];

const Projects = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.6;
    track.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
            <span className="opacity-50">04 ·</span> $ ls ~/projects
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Featured <span className="text-luxe italic pr-1">Projects</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Controls */}
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                ~/projects — {projects.length} repos
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous project"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollByCard(1)}
                  aria-label="Next project"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={trackRef}
              className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 outline-none"
            >
              {projects.map((project, idx) => {
                const href = project.link !== '#' ? project.link : project.github;
                return (
                  <motion.div
                    key={project.slug}
                    data-card
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: Math.min(idx, 3) * 0.08 }}
                    className="basis-full shrink-0 snap-start snap-always md:basis-[calc(50%-0.75rem)]"
                  >
                    <div className="os-window group h-full transition-shadow duration-500 hover:shadow-[0_0_50px_-15px_var(--primary)]">
                      <div className="os-window-bar">
                        <span className="os-dot" />
                        <span className="os-dot" />
                        <span className="os-dot" />
                        <span className="ml-3 truncate font-mono text-[11px] tracking-wider text-muted-foreground">
                          ~/projects/{project.slug}
                        </span>
                        <span className="ml-auto hidden font-mono text-[10px] text-primary/60 sm:block">
                          public
                        </span>
                      </div>

                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block aspect-[16/9] overflow-hidden scanlines"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top saturate-[0.8] transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </a>

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="font-display text-2xl leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                              {project.title}
                            </h3>
                            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                              {project.org} · {project.role}
                            </p>
                          </div>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/90"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Github className="h-3.5 w-3.5" /> source
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
