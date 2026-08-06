import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EMwA Trainer Pooling System',
    subtitle: 'Enterprise Trainer Management Platform',
    description:
      'Streamlining professional trainer mobilization for the Ethiopian Midwives Association with a centralized, data-driven management platform. The system optimizes nationwide allocation across Ethiopia\'s healthcare education network.',
    tech: ['Angular', 'Tailwind CSS', 'C#', '.NET'],
    emoji: '🏥',
    status: 'Finished',
    statusColor: 'bg-primary text-primary-foreground',
    link: 'http://49.12.194.224:8081/',
    github: 'https://github.com/tsedeysolomons/Trainer-pooling.git',
    featured: true,
  },
  {
    id: 2,
    title: 'Ethiopian Midr Babur E-Ticket',
    subtitle: 'Digital Transport Ticketing System',
    description:
      'Digital transportation ticket management system with online booking, payment integration, and real-time tracking features for Ethiopian railway transport services.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    emoji: '🎫',
    status: 'Completed',
    statusColor: 'bg-green-500/15 text-green-500',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Bible Mobile App',
    subtitle: 'Offline Bible Reader (Amharic & English)',
    description:
      'React Native mobile application with full offline support for Bible reading in Amharic and English, with beautiful typography, chapter navigation, and bookmarking.',
    tech: ['React Native', 'Expo', 'Firebase'],
    emoji: '📖',
    status: 'Completed',
    statusColor: 'bg-green-500/15 text-green-500',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'E-Combinator Platform',
    subtitle: 'Startup Incubation & Collaboration Hub',
    description:
      'Startup incubation platform inspired by Y Combinator with smart matching algorithms between founders and investors, investor profiles, and collaboration tools.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emoji: '🚀',
    status: 'In Progress',
    statusColor: 'bg-amber-500/15 text-amber-500',
    link: '#',
    github: '#',
    featured: false,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/65">Showcase of my best work and innovations</p>
        </div>

        {/* Featured Project — Large Card */}
        {featured.map((project) => (
          <div
            key={project.id}
            className="mb-10 rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
          >
            <div className="grid lg:grid-cols-2 min-h-[320px]">
              {/* Visual side */}
              <div className="relative bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20 flex items-center justify-center min-h-[240px] overflow-hidden">
                <span className="text-[120px] select-none group-hover:scale-110 transition-transform duration-500">
                  {project.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
              </div>
              {/* Content side */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${project.statusColor}`}>
                      <Star size={10} /> {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-1 tracking-tight">{project.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{project.subtitle}</p>
                  <p className="text-foreground/65 leading-relaxed text-sm mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border hover:border-primary/50 hover:bg-muted text-sm font-semibold transition-all"
                    >
                      <Github size={15} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-black text-base mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-primary font-semibold mb-2">{project.subtitle}</p>
                <p className="text-xs text-foreground/60 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:shadow-md hover:shadow-primary/25 transition-all">
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary/40 text-xs font-semibold transition-all">
                      <Github size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/tsedeysolomons/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-primary/40 text-primary font-semibold hover:bg-primary/8 hover:border-primary hover:scale-[1.02] transition-all duration-300"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
