'use client';

import { motion } from 'framer-motion';

const commits = [
  {
    hash: 'HEAD',
    branch: 'main',
    badge: 'Now',
    title: 'Software Developer — DAF Tech Computer',
    description:
      'Building enterprise software solutions and internal tools with Angular, .NET and React, delivering high-performance, scalable applications for business clients.',
    tech: ['Angular', '.NET / C#', 'React', 'TypeScript'],
  },
  {
    hash: '7c1e4b9',
    branch: 'feat/platforms',
    badge: '2024 —',
    title: 'Web Developer — Freelance & Personal Projects',
    description:
      'Designing and shipping full-stack web applications for clients across different sectors — from UI/UX through backend APIs to deployment.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    hash: '4b8d2a1',
    branch: 'feat/embedded',
    badge: '2023 — 24',
    title: 'Microprocessor Systems Developer',
    description:
      'Developed embedded systems and IoT projects using microcontrollers and Arduino, building sensor-based automation and low-level hardware programming.',
    tech: ['Arduino', 'C++', 'Sensors', 'IoT'],
  },
  {
    hash: '9e2f7c5',
    branch: 'fix/support',
    badge: '2024',
    title: 'ICT Support Intern — PEDS',
    description:
      'Provided technical support and troubleshooting for Point of Sale systems, gaining hands-on experience in enterprise IT infrastructure and user support.',
    tech: ['IT Support', 'Hardware', 'Networking'],
  },
];

const training = [
  'Full-Stack Web Development',
  'React Native & Expo Mobile Development',
  'Python for Data Science & AI',
  'Machine Learning Fundamentals',
  'Arduino & IoT Fundamentals',
  'Software Engineering Best Practices',
];

const competencies = [
  'Problem Solving',
  'Team Collaboration',
  'Continuous Learning',
  'Clean Code',
  'Performance Optimization',
  'Agile Methodology',
];

const Experience = () => {
  return (
    <section id="journey" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

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
            <span className="opacity-50">03 ·</span> $ git log --career
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            My Professional <span className="text-luxe italic pr-1">Journey</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="os-window"
          >
            <div className="os-window-bar">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                ~/career — git log
              </span>
              <span className="ml-auto font-mono text-[10px] text-primary/70">{commits.length} commits</span>
            </div>

            <div className="relative p-6 md:p-8">
              {/* Timeline rails */}
              <div className="absolute bottom-8 left-[34px] top-8 w-px bg-border md:left-[42px]" />
              <div className="absolute bottom-8 left-[34px] top-8 w-px bg-gradient-to-b from-primary via-primary to-primary/20 md:left-[42px]" />

              <div className="space-y-8">
                {commits.map((commit, idx) => (
                  <motion.article
                    key={commit.hash}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="group relative pl-12 md:pl-16"
                  >
                    <span
                      className={`absolute left-[30px] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-all duration-300 md:left-[38px] ${
                        idx === 0
                          ? 'bg-primary shadow-[0_0_14px_var(--primary)]'
                          : 'border border-primary/60 bg-background group-hover:bg-primary'
                      }`}
                    />

                    <p className="font-mono text-xs leading-relaxed md:text-sm">
                      <span className="text-luxe">{commit.hash}</span>{' '}
                      <span className="text-muted-foreground">
                        (<span className="text-primary/80">{commit.branch}</span>)
                      </span>{' '}
                      <span className="ml-1 rounded border border-primary/25 bg-primary/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-primary">
                        {commit.badge}
                      </span>
                    </p>

                    <h3 className="mt-2 font-display text-xl tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                      {commit.title}
                    </h3>

                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {commit.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {commit.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── training.log ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="os-window mt-6"
          >
            <div className="os-window-bar">
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="os-dot" />
              <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                $ ls ~/training
              </span>
              <span className="ml-auto font-mono text-[10px] text-primary/70">{training.length} modules</span>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-[1.4fr,1fr] md:p-8">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  certifications &amp; courses
                </p>
                <ul className="space-y-2">
                  {training.map((course) => (
                    <li key={course} className="flex items-start gap-2.5 font-mono text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span className="text-foreground/85">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  key competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
