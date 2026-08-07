'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'C# / .NET', 'Express.js', 'REST APIs', 'WebSockets', 'Auth & JWT'],
  },
  {
    name: 'Languages',
    icon: '💻',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Dart', 'PHP', 'SQL'],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB'],
  },
  {
    name: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Docker', 'Vercel', 'VS Code', 'Postman', 'Linux'],
  },
  {
    name: 'Embedded & IoT',
    icon: '🔌',
    skills: ['Arduino', 'Microcontrollers', 'Sensors', 'C++ Embedded', 'IoT Protocols'],
  },
];

const proficiencyAreas = [
  { area: 'Full-Stack Web Development',   level: 90, color: '#2563EB' },
  { area: 'Angular & .NET Enterprise',    level: 85, color: '#3B82F6' },
  { area: 'React / Next.js Development',  level: 88, color: '#2563EB' },
  { area: 'Database Design & SQL',        level: 85, color: '#3B82F6' },
  { area: 'Mobile (React Native)',        level: 78, color: '#60A5FA' },
  { area: 'Embedded Systems / IoT',       level: 72, color: '#1D4ED8' },
];

// SVG ring component
const RingProgress = ({ level, color, size = 80 }: { level: number; color: string; size?: number }) => {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={5} className="text-border" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke={color} strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      />
    </svg>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />

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
            Expertise
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-none">
              Technical{' '}
              <span className="clip-blue">Skills</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-sm">
              Deep expertise across the full technology stack — from UI to embedded systems.
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              id={`skill-tab-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]'
                  : 'bg-card border border-border text-foreground/55 hover:text-foreground hover:border-primary/40'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Pills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16"
          >
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                className="bento-card p-4 flex items-center justify-between group cursor-default"
              >
                <span className="font-semibold text-sm text-foreground/70 group-hover:text-primary transition-colors">
                  {skill}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary group-hover:shadow-[0_0_6px_rgba(37,99,235,0.8)] transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Proficiency — Ring Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-end justify-between mb-8">
            <h3 className="text-2xl font-black tracking-tight">
              Proficiency{' '}
              <span className="clip-blue">Overview</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {proficiencyAreas.map((item, idx) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bento-card p-6 flex flex-col items-center gap-4"
              >
                {/* Ring */}
                <div className="relative flex items-center justify-center">
                  <RingProgress level={item.level} color={item.color} size={90} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-black" style={{ color: item.color }}>
                      {item.level}%
                    </span>
                  </div>
                </div>
                {/* Label */}
                <p className="text-xs font-bold text-center text-foreground/70 leading-snug">
                  {item.area}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
