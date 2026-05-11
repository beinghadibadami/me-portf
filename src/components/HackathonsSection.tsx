const hackathons = [
  {
    initial: 'G',
    logo: '/logos/gec.jfif',
    name: 'HackTheSpring (GEC Gandhinagar)',
    organizer: 'GEC Gandhinagar',
    date: 'Feb 2025',
    description: 'Top 5 out of 200+ teams. Built a digital healthcare platform connecting users with nearby pharmacies.',
  },
  {
    initial: 'D',
    logo: '/logos/daiict.jfif',
    name: 'DAIICT Tic Tac Toe 2025',
    organizer: 'DAIICT Gandhinagar',
    date: 'Apr 2025',
    description: 'Top 10 out of 500+ teams. Developed a learning and interview prep platform with AI-powered mock interviews.',
  },
  {
    initial: 'N',
    logo: '/logos/nirma.webp',
    name: 'Nirma University (NASA Space Apps Challenge)',
    organizer: 'Nirma University, Ahmedabad',
    date: 'Oct 2025',
    description: 'Participated in the NASA Space Apps Challenge, developing innovative solutions for space-related challenges.',
  },
  {
    initial: 'D',
    logo: '/logos/daiict.jfif',
    name: 'DAIICT Hackout 2025',
    organizer: 'DAIICT Gandhinagar',
    date: 'Oct 2025',
    description: 'Developed a prototype for a decentralized energy management system using blockchain and IoT.',
  },
  {
    initial: 'N',
    logo: '/logos/noble.png',
    name: 'Noble University Hackathon',
    organizer: 'Noble University, Junagadh',
    date: 'Jan 2026',
    description: 'Winner. Developed a smart agriculture monitoring system using AI and IoT devices.',
  },
  {
    initial: 'D',
    logo: '/logos/daiict.jfif',
    name: 'DAIICT Tic Tac Toe',
    organizer: 'DAIICT Gandhinagar',
    date: 'April 2026',
    description: 'Top 10 out of 600+ teams. Enhanced the platform with advanced RAG capabilities for better user query understanding.',
  },
];

const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-16">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1.5 rounded-md bg-foreground text-background text-[13px] font-semibold hover:scale-105 transition-transform">
            Hackathons
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Competitive Builds
          </h2>
        </div>

        <div className="relative border-l border-[hsl(var(--glass-border))] ml-6 md:ml-8 space-y-12">
          {hackathons.map((hack, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Circle on the line */}
              <div className="absolute -left-6 top-0 w-12 h-12 bg-background border border-[hsl(var(--glass-border))] rounded-full flex items-center justify-center shadow-subtle group-hover:border-brand transition-colors overflow-hidden">
                {hack.logo ? (
                  <img src={hack.logo} alt={hack.organizer} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-brand font-bold text-lg">{hack.initial}</span>
                )}
              </div>

              {/* Content */}
              <div>
                <span className="text-foreground-muted text-sm">{hack.date}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-1">{hack.name}</h3>
                <span className="text-foreground-muted text-sm block mb-3">{hack.organizer}</span>
                <p className="text-foreground-muted text-base leading-relaxed">
                  {hack.description}
                </p>
              </div>

              {/* Divider for next item (unless it's the last) */}
              {index !== hackathons.length - 1 && (
                <div className="absolute left-8 md:left-12 right-0 -bottom-6 border-b border-dashed border-[hsl(var(--glass-border))]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;