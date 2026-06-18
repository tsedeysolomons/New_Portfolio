import { ExternalLink, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Ethiopian Midr Babur E-Ticket System',
      description: 'Digital transportation ticket management system with booking, payment, and tracking features for Ethiopian transport services.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: '🎫',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Bible Mobile Application',
      description: 'React Native mobile application with offline support for Bible reading in Amharic and English with beautiful typography and navigation.',
      tech: ['React Native', 'Expo', 'Firebase'],
      image: '📱',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'E-Combinator Startup Platform',
      description: 'Startup incubation platform inspired by Y Combinator with matching algorithms, investor profiles, and collaboration tools.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🚀',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Embedded Systems Projects',
      description: 'Microcontroller-based automation and sensor integration projects including weather stations and home automation systems.',
      tech: ['Arduino', 'C++', 'Sensors', 'IoT'],
      image: '⚙️',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70">Showcase of my best work and innovations</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <span>View</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all"
                  >
                    <GitBranch size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
