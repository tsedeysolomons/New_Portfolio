import { Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'DAF Tech Computer',
    period: 'Dec 2025 — Present',
    type: 'Full-time',
    status: 'Active',
    description:
      'Building enterprise software solutions and internal tools. Working with modern web technologies to deliver high-performance, scalable applications for business clients.',
    tech: ['Angular', 'React', 'TypeScript', '.NET'],
  },
  {
    title: 'Web Developer',
    company: 'Freelance & Personal Projects',
    period: 'Jan 2024 — Present',
    type: 'Full-time',
    status: 'Active',
    description:
      'Designing and developing full-stack web applications for clients across different sectors. Delivering end-to-end solutions from UI/UX design to backend API development and deployment.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Microprocessor Systems Developer',
    company: 'Academic & Personal Projects',
    period: 'Jan 2023 — Dec 2024',
    type: 'Academic',
    status: 'Completed',
    description:
      'Developed embedded systems and IoT projects using microcontrollers and Arduino. Built sensor-based automation systems and gained hands-on experience in low-level hardware programming.',
    tech: ['Arduino', 'C++', 'Sensors', 'IoT'],
  },
  {
    title: 'ICT Support Intern',
    company: 'PEDS (Point of Sale Systems)',
    period: 'Jan 2024 — Dec 2024',
    type: 'Internship',
    status: 'Completed',
    description:
      'Provided technical support and troubleshooting for Point of Sale systems. Gained practical experience in enterprise IT infrastructure, system maintenance, and user support.',
    tech: ['IT Support', 'Hardware', 'Networking'],
  },
];

const certifications = [
  'Full-Stack Web Development (Dereja Academy)',
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

const statusColors: Record<string, string> = {
  Active: 'bg-green-500/15 text-green-500',
  Completed: 'bg-primary/10 text-primary',
};

const typeColors: Record<string, string> = {
  'Full-time': 'bg-blue-500/10 text-blue-400',
  Academic: 'bg-amber-500/10 text-amber-400',
  Internship: 'bg-purple-500/10 text-purple-400',
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Career
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-foreground/65">Professional experience and continuous growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={26} />
              Work Experience
            </h3>
            <div className="space-y-6 relative">
              {/* Timeline vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent ml-1.5" />

              {experiences.map((exp) => (
                <div key={exp.title} className="relative pl-8">
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30" />

                  <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${statusColors[exp.status] ?? 'bg-muted text-muted-foreground'}`}>
                        {exp.status}
                      </span>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${typeColors[exp.type] ?? 'bg-muted text-muted-foreground'}`}>
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="font-black text-base text-foreground">{exp.title}</h4>
                    <p className="text-sm text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-sm text-foreground/65 leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/8 text-primary/80 border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Competencies */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Award className="text-accent" size={26} />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="p-4 rounded-xl bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/20 hover:border-primary/40 transition-all flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm font-semibold text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="p-6 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all">
              <h4 className="font-black text-foreground mb-5">Key Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {competencies.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-md hover:shadow-primary/30 hover:scale-[1.03] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
