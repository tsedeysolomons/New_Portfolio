'use client';

import { motion } from 'framer-motion';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const stack = [
  { name: 'typescript', slug: 'typescript' },
  { name: 'javascript', slug: 'javascript' },
  { name: 'python', slug: 'python' },
  { name: 'csharp', slug: 'csharp' },
  { name: 'c++', slug: 'cplusplus' },
  { name: 'php', slug: 'php' },
  { name: 'html5', slug: 'html5' },
  { name: 'css3', slug: 'css3' },
  { name: 'angular', slug: 'angular' },
  { name: 'react', slug: 'react' },
  { name: 'next-js', slug: 'nextjs' },
  { name: 'react-native', slug: 'reactnative' },
  { name: 'tailwind', slug: 'tailwindcss' },
  { name: 'redux', slug: 'redux' },
  { name: 'bootstrap', slug: 'bootstrap' },
  { name: 'sass', slug: 'sass' },
  { name: 'node-js', slug: 'nodejs' },
  { name: 'express', slug: 'express' },
  { name: 'dotnet', slug: 'dotnetcore' },
  { name: 'nestjs', slug: 'nestjs' },
  { name: 'prisma', slug: 'prisma' },
  { name: 'postgresql', slug: 'postgresql' },
  { name: 'mysql', slug: 'mysql' },
  { name: 'mongodb', slug: 'mongodb' },
  { name: 'firebase', slug: 'firebase' },
  { name: 'redis', slug: 'redis' },
  { name: 'docker', slug: 'docker' },
  { name: 'git', slug: 'git' },
  { name: 'github', slug: 'github' },
  { name: 'linux', slug: 'linux' },
  { name: 'vscode', slug: 'vscode' },
  { name: 'nginx', slug: 'nginx' },
  { name: 'postman', slug: 'postman' },
  { name: 'figma', slug: 'figma' },
  { name: 'arduino', slug: 'arduino' },
];

const categories = [
  {
    name: 'frontend',
    deps: ['Angular', 'React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'backend',
    deps: ['Node.js', 'C# / .NET', 'Express.js', 'REST APIs', 'WebSockets', 'Auth & JWT'],
  },
  {
    name: 'languages',
    deps: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Dart', 'PHP', 'SQL'],
  },
  {
    name: 'databases',
    deps: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB'],
  },
  {
    name: 'devops',
    deps: ['Git & GitHub', 'Docker', 'Vercel', 'VS Code', 'Postman', 'Linux'],
  },
  {
    name: 'embedded',
    deps: ['Arduino', 'Microcontrollers', 'Sensors', 'C++ Embedded', 'IoT Protocols'],
  },
];

const DepCard = ({ name, slug }: { name: string; slug: string }) => (
  <div
    title={name}
    className="group flex flex-shrink-0 items-center gap-2.5 rounded-md border border-border/70 bg-card/50 px-4 py-2.5 font-mono text-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
  >
    <div className="relative h-5 w-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${DEVICON}/${slug}/${slug}-original.svg`}
        alt={name}
        className="h-5 w-5 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </div>
    <span className="text-muted-foreground transition-colors group-hover:text-foreground">
      <span className="text-primary/70">&quot;</span>
      {name}
      <span className="text-primary/70">&quot;</span>
      <span className="text-muted-foreground/50">: </span>
      <span className="text-primary/80">&quot;^prod&quot;</span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-border/50 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary),transparent_60%)] opacity-[0.04]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary/80">
            <span className="opacity-50">05 ·</span> $ cat package.json
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Technology <span className="text-luxe italic pr-1">Stack</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Infinite dependency marquee ── */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <p className="container mx-auto mb-2 px-4 font-mono text-xs text-muted-foreground/60">{'{'}</p>

        <div className="overflow-hidden py-2.5">
          <div className="flex w-max gap-3 animate-scroll">
            {stack.map((item) => (
              <DepCard key={`a-${item.slug}`} name={item.name} slug={item.slug} />
            ))}
            {stack.map((item) => (
              <DepCard key={`b-${item.slug}`} name={item.name} slug={item.slug} />
            ))}
          </div>
        </div>

        <p className="container mx-auto mt-2 px-4 font-mono text-xs text-muted-foreground/60">{'}'}</p>
      </div>

      {/* ── Grouped dependency windows ── */}
      <div className="container mx-auto mt-16 px-4">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: Math.min(idx, 3) * 0.08 }}
              className="os-window"
            >
              <div className="os-window-bar">
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="os-dot" />
                <span className="ml-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                  dependencies/{cat.name}
                </span>
                <span className="ml-auto font-mono text-[10px] text-primary/60">{cat.deps.length}</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
                {cat.deps.map((dep) => (
                  <p key={dep}>
                    <span className="text-primary/70">&quot;</span>
                    <span className="text-foreground/90">{dep}</span>
                    <span className="text-primary/70">&quot;</span>
                    <span className="text-muted-foreground/50">: </span>
                    <span className="text-primary/80">&quot;^prod&quot;</span>
                    <span className="text-muted-foreground/60">,</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
