import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-neon-cyan rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-40 w-4 h-4 bg-neon-pink rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--glass-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glass-border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl font-display font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hadi
            </span>
            <br />
            <span className="text-foreground">Badami</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-foreground-muted mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-mono bg-background-accent px-4 py-2 rounded-lg border border-glass-border">
              AI/ML Engineer & Data Scientist
            </span>
          </div>

          {/* Inspiring Quote */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-foreground leading-relaxed">
              "Climb the mountain so that you can see the world,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                not so the world can see you."
              </span>
            </blockquote>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm text-lg px-8 py-6 rounded-2xl font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/hadibadami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-foreground-muted group-hover:text-neon-cyan transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/hadibadami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-foreground-muted group-hover:text-neon-blue transition-colors" />
            </a>
            <a
              href="mailto:hadi.badami@example.com"
              className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-foreground-muted group-hover:text-neon-purple transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce" style={{ animationDelay: '1s' }}>
            <ArrowDown className="w-8 h-8 text-foreground-muted mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;