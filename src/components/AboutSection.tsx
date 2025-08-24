import {Typewriter} from 'react-simple-typewriter'
import { useEffect, useRef, useState } from 'react';
const AboutSection = () => {


  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.5 } // trigger when 50% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

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
                <h3 className="text-5xl font-display font-semibold text-foreground mb-6"
                ref={ref}>
                  {isInView && (
                   <Typewriter
                    words={["Hi, I'm Hadi."]}
                    loop={0} // type once
                    cursor
                    cursorStyle="|"
                    typeSpeed={75} // adjust typing speed
                  />
                  )}
                </h3>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Tech enthusiast from Ahmedabad, India, I like exploring ideas differently than most. Always chasing knowledge ahead of the curve, I prefer building and learning my own way rather than following the crowd.
                </p>

                <p className="text-lg text-foreground-muted leading-relaxed">
                  With experience in Data Scraping, RAG Systems, working with LLMs, and building predictive/NLP models. Skilled in scalable API development using Python, FastAPI, Node.js, with strong proficiency in vector databases like Pinecone.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">3+</div>
                    <div className="text-sm text-foreground-muted">Years Of Coding Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-foreground-muted">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">4</div>
                    <div className="text-sm text-foreground-muted">Hackathons </div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative z-10 bg-gradient-card rounded-2xl p-8 border border-glass-border">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-neon-cyan rounded-full animate-glow" />
                      <span className="font-mono text-sm text-foreground-muted">Building intelligent systems (Using LLMs)</span>
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
