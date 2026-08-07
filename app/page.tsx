'use client';

import Hero from '@/components/sections/hero';
import Navigation from '@/components/navigation';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import AIJourney from '@/components/sections/ai-journey';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Global Background Image Watermark */}
      <div
        className="fixed inset-0 opacity-[0.04] dark:opacity-[0.09] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/bg-code.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIJourney />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
