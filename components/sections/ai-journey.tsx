import { CheckCircle2 } from 'lucide-react';

const AIJourney = () => {
  const milestones = [
    {
      title: 'Started Python Programming',
      description: 'Began learning Python and understanding programming fundamentals',
      year: '2021',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Mastered DSA concepts and competitive programming techniques',
      year: '2022',
    },
    {
      title: 'Machine Learning Concepts',
      description: 'Studied supervised learning, classification, and regression models',
      year: '2023',
    },
    {
      title: 'Deep Learning Exploration',
      description: 'Explored neural networks, CNNs, and deep learning frameworks',
      year: '2024',
    },
    {
      title: 'Building AI Projects',
      description: 'Implemented real-world AI applications and solutions',
      year: '2024',
    },
    {
      title: 'AI Engineer Goal',
      description: 'Working towards becoming a professional AI/ML Engineer',
      year: '2025+',
    },
  ];

  return (
    <section id="journey" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI & ML <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-foreground/70">My path to becoming an AI Engineer</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-20" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div
                key={milestone.title}
                className={`flex gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex w-1/2 justify-end pr-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
                    <div className="relative w-6 h-6 rounded-full bg-primary border-4 border-background" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-background to-card border border-primary/20 hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-primary mb-1">{milestone.year}</p>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Current Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Advanced ML Techniques',
                desc: 'Exploring ensemble methods, feature engineering, and optimization algorithms',
              },
              {
                title: 'Deep Learning',
                desc: 'Building neural networks, transformers, and exploring NLP applications',
              },
              {
                title: 'Real-world Applications',
                desc: 'Implementing ML solutions for practical problems and industry use cases',
              },
            ].map((focus) => (
              <div key={focus.title} className="space-y-2">
                <h4 className="font-semibold text-foreground">{focus.title}</h4>
                <p className="text-foreground/70">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourney;
