import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PixelTransition from '@/components/PixelTransition';
import DecryptedText from '@/components/DecryptedText';

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
          {/* Two Column Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center min-h-screen py-8 lg:py-0">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Main Title */}
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <DecryptedText
                  text="Hadi "
                  animateOn="view"
                  speed={120}
                  maxIterations={30}
                  sequential={true}
                  revealDirection="start"
                  className="text-foreground"
                  encryptedClassName="text-foreground-muted"
                  parentClassName=""
                />
                <DecryptedText
                  text="Badami"
                  animateOn="view"
                  speed={120}
                  maxIterations={30}
                  sequential={true}
                  revealDirection="start"
                  className="bg-gradient-primary bg-clip-text text-transparent"
                  encryptedClassName="text-foreground-muted"
                  parentClassName=""
                />
              </h1>

              {/* Inspiring Quote */}
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <blockquote className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-foreground leading-relaxed">
                  "No treasure is more beneficial than knowledge,
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                      and no honor is greater than wisdom."
                  </span>
                </blockquote>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Button
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-xl font-medium text-xs sm:text-sm md:text-base lg:text-lg px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm rounded-xl font-medium text-xs sm:text-sm md:text-base lg:text-lg px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://github.com/beinghadibadami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-foreground-muted group-hover:text-neon-cyan transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/hadi-badami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-foreground-muted group-hover:text-neon-blue transition-colors" />
                </a>
                <a
                  href="mailto:hadibadami14@gmail.com"
                  className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-glass border border-glass-border hover:bg-glass-hover hover:shadow-glow transition-all duration-300 group"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-foreground-muted group-hover:text-neon-purple transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Profile Image with PixelTransition animation */}
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full rounded-full bg-gradient-primary p-1 sm:p-1.5 md:p-1.5 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-background-secondary flex items-center justify-center overflow-hidden">
                        <img
                          src="/lift.jpg"
                          alt="Hadi Badami"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  }
                  secondContent={
                    // <div className="w-full h-full rounded-full bg-gradient-primary p-1 sm:p-1.5 md:p-2 shadow-2xl">
                    //   <div className="w-full h-full rounded-full bg-background-secondary flex items-center justify-center overflow-hidden">
                    //     <img
                    //       src="/lift.jpg"
                    //       alt="Hadi Badami"
                    //       className="w-full h-full object-cover rounded-full"
                    //     />
                    //   </div>
                    // </div>
                    <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111"
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hellow!</p>
                  </div>
                  }
                  gridSize={12}
                  pixelColor='#30abe8'
                  once={false}
                  animationStepDuration={0.4}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full border-0 bg-transparent"
                  aspectRatio="100%"
                />
                
                {/* Decorative elements around the image - hidden on very small screens */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-neon-cyan rounded-full animate-pulse hidden sm:block" />
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-neon-purple rounded-full animate-pulse hidden sm:block" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Centered at bottom */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
            <ArrowDown className="w-8 h-8 text-foreground-muted" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
