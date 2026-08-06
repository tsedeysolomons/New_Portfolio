'use client';

import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'C# / .NET', 'Express.js', 'REST APIs', 'WebSockets', 'Authentication & Auth'],
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
    skills: ['Arduino', 'Microcontrollers', 'Sensors', 'C++ for Embedded', 'IoT Fundamentals'],
  },
];

const proficiencyAreas = [
  { area: 'Full-Stack Web Development', level: 90 },
  { area: 'Angular & .NET Enterprise Apps', level: 85 },
  { area: 'React / Next.js Development', level: 88 },
  { area: 'Database Design & SQL', level: 85 },
  { area: 'Mobile (React Native)', level: 78 },
  { area: 'Embedded Systems / IoT', level: 72 },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-foreground/65">Deep expertise across the full technology stack</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === idx
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-[1.03]'
                  : 'bg-card border border-border text-foreground/65 hover:border-primary/50 hover:text-primary'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={skill}
              className="group p-4 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 cursor-default"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="space-y-5">
          <h3 className="text-2xl font-black mb-8 tracking-tight">
            Proficiency{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Overview
            </span>
          </h3>
          {proficiencyAreas.map((item, idx) => (
            <div key={item.area}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-sm text-foreground">{item.area}</span>
                <span className="text-primary font-bold text-sm">{item.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                  style={{ width: `${item.level}%`, transitionDelay: `${idx * 80}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
