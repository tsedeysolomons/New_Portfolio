import { CheckCircle2, Cpu } from 'lucide-react';

const milestones = [
  {
    title: 'Started Software Development',
    description: 'Began learning Python, web fundamentals, and programming concepts — the foundation of everything that followed.',
    year: '2021',
    done: true,
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Mastered DSA concepts, algorithm optimization, and competitive programming techniques.',
    year: '2022',
    done: true,
  },
  {
    title: 'Full-Stack & Mobile Development',
    description: 'Built proficiency in React, Node.js, and React Native. Delivered first client-facing web applications.',
    year: '2023',
    done: true,
  },
  {
    title: 'Angular & .NET Enterprise Development',
    description: 'Specialized in Angular and C# / .NET for enterprise-grade applications. Built the EMwA Trainer Pooling System.',
    year: '2024',
    done: true,
  },
  {
    title: 'Machine Learning Exploration',
    description: 'Explored ML/AI concepts including supervised learning, data analysis, and model training with Python.',
    year: '2024',
    done: true,
  },
  {
    title: 'Full-Time Professional Developer',
    description: 'Joined DAF Tech Computer as a Software Developer — building production-grade enterprise software.',
    year: '2025',
    done: true,
  },
];

const currentFocus = [
  {
    title: 'Advanced TypeScript',
    desc: 'Mastering advanced TypeScript patterns, generics, and type-safe architecture for scalable systems.',
  },
  {
    title: 'AI Integration',
    desc: 'Integrating AI/ML capabilities into web applications — LLM APIs, embeddings, and smart features.',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Expanding knowledge in cloud platforms (AWS/Azure), Docker, CI/CD pipelines, and scalable deployment.',
  },
];

const AIJourney = () => {
  return (
    <section id="journey" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu size={12} /> Learning Path
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Developer{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="text-lg text-foreground/65">My continuous journey in software engineering and technology</p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/30 to-transparent opacity-40" />

          <div className="space-y-10">
            {milestones.map((milestone, idx) => (
              <div
                key={milestone.title}
                className={`flex gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Center dot (desktop) */}
                <div className="hidden md:flex w-1/2 justify-end pr-8 items-start pt-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-30 scale-150" />
                    <div className="relative w-5 h-5 rounded-full bg-primary border-4 border-background ring-2 ring-primary/30 flex items-center justify-center">
                      {milestone.done && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-background to-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        size={22}
                      />
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">{milestone.year}</p>
                        <h3 className="text-lg font-black mb-2 text-foreground">{milestone.title}</h3>
                        <p className="text-sm text-foreground/65 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Areas */}
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/20 hover:border-primary/40 transition-all">
          <h3 className="text-2xl font-black mb-8 tracking-tight">
            Current Focus{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Areas</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentFocus.map((focus) => (
              <div key={focus.title} className="space-y-2">
                <h4 className="font-bold text-foreground text-base">{focus.title}</h4>
                <p className="text-sm text-foreground/65 leading-relaxed">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourney;
