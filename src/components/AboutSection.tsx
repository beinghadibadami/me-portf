const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 md:p-12 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-semibold text-foreground mb-6">
                  Independent & Forward-Thinking
                </h3>
                
                <p className="text-lg text-foreground-muted leading-relaxed">
                  I'm an AI/ML engineer who thrives on solving complex problems with innovative solutions. 
                  My approach is different from the crowd – I believe in deep understanding over surface-level implementations.
                </p>
                
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Knowledge-driven and independent, I specialize in building intelligent systems that make a real impact. 
                  From RAG-based chatbots to predictive models, I craft solutions that bridge the gap between 
                  cutting-edge research and practical applications.
                </p>

                <p className="text-lg text-foreground-muted leading-relaxed">
                  When I'm not building AI systems, you'll find me exploring the latest research papers, 
                  contributing to open-source projects, or mentoring fellow developers in the world of machine learning.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">3+</div>
                    <div className="text-sm text-foreground-muted">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-foreground-muted">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">270+</div>
                    <div className="text-sm text-foreground-muted">Data Points Enriched</div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative z-10 bg-gradient-card rounded-2xl p-8 border border-glass-border">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-cyan rounded-full animate-glow" />
                      <span className="font-mono text-sm text-foreground-muted">Building intelligent systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-purple rounded-full animate-glow" style={{ animationDelay: '0.5s' }} />
                      <span className="font-mono text-sm text-foreground-muted">RAG & Vector Search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-pink rounded-full animate-glow" style={{ animationDelay: '1s' }} />
                      <span className="font-mono text-sm text-foreground-muted">Data pipelines & ML models</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-blue rounded-full animate-glow" style={{ animationDelay: '1.5s' }} />
                      <span className="font-mono text-sm text-foreground-muted">Scalable web applications</span>
                    </div>
                  </div>
                </div>

                {/* Background Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;