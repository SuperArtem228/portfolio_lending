import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <ExperienceTimeline />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
    </main>
  );
}

