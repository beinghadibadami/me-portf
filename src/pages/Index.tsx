import FloatingNavbar from '@/components/FloatingNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import HackathonsSection from '@/components/HackathonsSection';
import ContactSection from '@/components/ContactSection';
import { FadeIn } from '@/components/FadeIn';

const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[100] opacity-[0.025] mix-blend-difference"
    style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NoiseOverlay />
      <FloatingNavbar />

      <main className="relative z-10">
        <HeroSection />
        <FadeIn><AboutSection /></FadeIn>
        <FadeIn><ExperienceSection /></FadeIn>
        <FadeIn><EducationSection /></FadeIn>
        <FadeIn><SkillsSection /></FadeIn>
        <FadeIn><ProjectsSection /></FadeIn>
        <FadeIn><HackathonsSection /></FadeIn>
        <FadeIn><ContactSection /></FadeIn>
      </main>
    </div>
  );
};

export default Index;
