'use client';

import Navigation from '@/components/navigation';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <div className="hairline-gold mx-auto max-w-3xl" />
      <About />
      <div className="hairline-gold mx-auto max-w-3xl" />
      <Experience />
      <div className="hairline-gold mx-auto max-w-3xl" />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
