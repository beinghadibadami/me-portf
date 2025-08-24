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

      <div className="container relative z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Column - Content */}
            <div className="text-left space-y-8">
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Hadi
                </span>
                {' '}
                <span className="text-foreground">Badami</span>
              </h1>

              {/* Subtitle */}
              {/* <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-lg md:text-xl bg-background-accent px-4 py-2 rounded-lg border border-glass-border text-foreground-muted inline-block">
                  AI/ML Engineer
                </span>
              </div> */}

              {/* Inspiring Quote */}
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                  "No treasure is more beneficial than knowledge,
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                      and no honor is greater than wisdom."
                  </span>
                </blockquote>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 rounded-xl font-medium text-lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm px-8 py-4 rounded-xl font-medium text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://github.com/beinghadibadami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-foreground-muted group-hover:text-neon-cyan transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/hadi-badami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-foreground-muted group-hover:text-neon-blue transition-colors" />
                </a>
                <a
                  href="mailto:hadibadami14@gmail.com"
                  className="p-4 rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-foreground-muted group-hover:text-neon-purple transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Profile Image with enhanced size and styling */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-primary p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-background-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src="/hadi.jpg"
                      alt="Hadi Badami"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Decorative elements around the image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Centered at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
            <ArrowDown className="w-8 h-8 text-foreground-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
