'use client';

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'PHP', 'SQL'],
    },
    {
      name: 'Frontend',
      skills: ['React', 'React Native', 'Expo', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'Authentication'],
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB'],
    },
    {
      name: 'AI & ML',
      skills: ['Machine Learning', 'Data Analysis', 'Model Training', 'Data Visualization', 'Python for AI'],
    },
    {
      name: 'Embedded Systems',
      skills: ['Arduino', 'Sensors', 'Microcontrollers', 'Electronics', 'IoT Fundamentals'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-foreground/70">Expertise across multiple domains</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-foreground/70 hover:border-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={skill}
              className="p-4 rounded-lg bg-gradient-to-br from-background to-card border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill}</span>
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Breakdown */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-8">Proficiency Areas</h3>
          {[
            { area: 'Web Development', level: 90 },
            { area: 'Mobile Development', level: 85 },
            { area: 'AI & Machine Learning', level: 75 },
            { area: 'Embedded Systems', level: 80 },
            { area: 'Database Design', level: 88 },
            { area: 'UI/UX Design', level: 82 },
          ].map((item) => (
            <div key={item.area}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{item.area}</span>
                <span className="text-primary font-bold">{item.level}%</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                  style={{ width: `${item.level}%` }}
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
