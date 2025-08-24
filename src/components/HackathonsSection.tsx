import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

const hackathons = [
  {
    name: 'HackTheSpring 2025',
    position: 'Top 10',
    organizer: 'GEC Gandhinagar',
    date: 'February 2025',
    participants: '150+',
    description: 'Developed a digital healthcare platform that connects users with nearby pharmacies for real-time medicine availability and empowers doctors with secure access to patient medical records. It enhances accessibility, reduces misdiagnosis, and streamlines pharmacy operations through advanced inventory and sales management.',
    achievement: 'Top 10 Finalist',
    tech: ['React', 'MongoDB', 'FastAPI', 'LLMs'  ],
    color: 'neon-cyan'
  },
  {
    name: 'Tic Tech Toe 2025',
    position: 'Top 10',
    organizer: 'DAIICT Gandhinagar',
    date: 'April 2025',
    participants: '200+',
    description: 'Developed a web-based learning and interview preparation platform featuring AI-powered mock interviews, peer-to-peer video GDs, a live code editor, and blockchain-backed payments. Aimed at helping students get placement-ready with interactive tools and career guidance.',
    achievement: 'Top 10 out of 200+ teams',
    tech: ['Next.js', 'Python', 'FastAPI', 'Blockchain', 'AI/ML'],
    color: 'neon-purple'
  }
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hackathon Achievements
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Turning innovative ideas into winning solutions under pressure
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={hackathon.name}
                className="relative bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 group overflow-hidden"
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${hackathon.color} opacity-10 rounded-full blur-3xl`} />
                
                {/* Trophy Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-background mb-6`}>
                  <Trophy className="w-8 h-8" />
                </div>

                {/* Achievement Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 rounded-full bg-gradient-primary text-background text-sm font-bold">
                    🏆 {hackathon.achievement}
                  </span>
                  <span className="text-sm font-mono text-foreground-muted">
                    {hackathon.date}
                  </span>
                </div>

                {/* Hackathon Name */}
                <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                  {hackathon.name}
                </h3>

                {/* Event Details */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hackathon.organizer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{hackathon.participants} teams</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {hackathon.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-glass-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {hackathon.position}
                    </div>
                    <div className="text-xs text-foreground-muted">Position</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      48h
                    </div>
                    <div className="text-xs text-foreground-muted">Duration</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16">
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
                Hackathon Impact
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">2</div>
                  <div className="text-sm text-foreground-muted">Top 10 Positions</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Users className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">700+</div>
                  <div className="text-sm text-foreground-muted">Competitors Faced</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">96</div>
                  <div className="text-sm text-foreground-muted">Hours of Coding</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">4</div>
                  <div className="text-sm text-foreground-muted">Innovative Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;