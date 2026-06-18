import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Dereja Academy Training',
      period: '2023 - 2024',
      description: 'Comprehensive software development bootcamp covering full-stack web development with React and Node.js',
      type: 'training',
    },
    {
      title: 'Software Development Learning Journey',
      period: '2021 - Present',
      description: 'Continuous self-paced learning in web development, mobile development, and software engineering best practices',
      type: 'learning',
    },
    {
      title: 'AI Talent Program Preparation',
      period: '2024',
      description: 'Intensive preparation for AI/ML roles including algorithm optimization and AI fundamentals',
      type: 'training',
    },
    {
      title: 'React Native Development Learning',
      period: '2023 - 2024',
      description: 'Specialized training in mobile app development using React Native and Expo framework',
      type: 'learning',
    },
    {
      title: 'Embedded Systems Projects',
      period: '2023 - Present',
      description: 'Hands-on experience with Arduino microcontrollers, IoT projects, and sensor integration',
      type: 'project',
    },
  ];

  const certifications = [
    'Full Stack Web Development Certification',
    'React Native Development Certificate',
    'Python for Data Science',
    'Machine Learning Fundamentals',
    'Arduino & IoT Certificate',
    'Software Engineering Best Practices',
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-lg text-foreground/70">Educational journey and professional development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Experience & Training
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title}
                  className="relative pl-6 pb-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary" />
                  {idx !== experiences.length - 1 && (
                    <div className="absolute left-1 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                  )}

                  {/* Content */}
                  <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
                    <p className="text-sm font-semibold text-primary mb-1">{exp.period}</p>
                    <h4 className="text-lg font-bold text-foreground mb-2">{exp.title}</h4>
                    <p className="text-foreground/70 text-sm">{exp.description}</p>
                    <span className="inline-block mt-3 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-accent" size={28} />
              Certifications & Achievements
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="font-semibold text-foreground">{cert}</p>
                </div>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="mt-8 p-6 rounded-xl bg-card border-2 border-primary/30">
              <h4 className="font-bold text-foreground mb-4">Key Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation', 'Code Quality', 'Performance Optimization'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-primary text-primary-foreground font-semibold"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
