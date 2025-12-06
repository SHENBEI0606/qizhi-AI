import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundSection } from './components/BackgroundSection';
import { OrganizationalStructureSection } from './components/OrganizationalStructureSection';
import { GoalsSection } from './components/GoalsSection';
import { CultivationSection } from './components/CultivationSection';
import { WorkDirectionSection } from './components/WorkDirectionSection';
import { MechanismSection } from './components/MechanismSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BackgroundSection />
        <OrganizationalStructureSection />
        <GoalsSection />
        <CultivationSection />
        <WorkDirectionSection />
        <MechanismSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
