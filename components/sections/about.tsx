import { Code2, Zap, Brain, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '20+', icon: Code2 },
    { label: 'Technologies Learned', value: '15+', icon: Zap },
    { label: 'Training Programs', value: '8+', icon: Brain },
    { label: 'Years of Learning', value: '4+', icon: Cpu },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-foreground/70">Passionate developer building solutions that matter</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m Tsedey Solomon, a passionate Software Developer with deep expertise in Full Stack Web Development, Mobile App Development, and Artificial Intelligence. My journey in technology started with a curiosity to understand how things work and has evolved into a mission to build innovative software solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With experience spanning React, Node.js, Python, and embedded systems, I combine creativity with technical excellence to deliver solutions that solve real-world problems. I&apos;m particularly enthusiastic about AI/ML, where I&apos;m continuously expanding my knowledge through practical projects and learning.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I&apos;m committed to continuous learning and staying updated with the latest technologies. My approach is to understand problems deeply, design elegant solutions, and implement them with precision and care.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-primary/50 transition-all">
              <h3 className="font-semibold text-lg text-primary mb-2">Full Stack Development</h3>
              <p className="text-foreground/70">Expert in React, Node.js, and modern web technologies for building scalable applications.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-primary/50 transition-all">
              <h3 className="font-semibold text-lg text-primary mb-2">Mobile Development</h3>
              <p className="text-foreground/70">Proficient in React Native and Expo for cross-platform mobile applications.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-primary/50 transition-all">
              <h3 className="font-semibold text-lg text-primary mb-2">AI & Machine Learning</h3>
              <p className="text-foreground/70">Learning and implementing ML models using Python and modern frameworks.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border backdrop-blur-sm hover:border-primary/50 transition-all">
              <h3 className="font-semibold text-lg text-primary mb-2">Embedded Systems</h3>
              <p className="text-foreground/70">Arduino and microcontroller expertise for IoT and automation projects.</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center hover:border-primary/50 transition-all"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="text-primary" size={32} />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
