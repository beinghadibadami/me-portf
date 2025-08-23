import { useEffect } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import HackathonsSection from '@/components/HackathonsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Floating Navigation */}
      <FloatingNavbar />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <HackathonsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
