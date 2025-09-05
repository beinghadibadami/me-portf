const education = [
  {
    degree: 'B.E. Computer Science (Data Science)',
    institution: 'Vishwakarma Govt. Engineering College',
    location: 'Ahmedabad',
    period: '2024 – Present',
    status: 'Current',
    description: 'Specialized in Data Science with focus on machine learning algorithms, statistical analysis, and AI applications.',
    highlights: ['Machine Learning', 'Data Analytics', 'AI Applications', 'Statistical Computing']
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'GMB Polytechnic',
    location: 'Rajula, Amreli',
    period: '2021 – 2024',
    status: 'Completed',
    description: 'Comprehensive foundation in computer engineering with emphasis on programming, software development, and system design.',
    highlights: ['Programming Fundamentals', 'Software Development', 'Database Systems', 'Web Technologies']
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Building a strong foundation in computer science and data science
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Lines */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary rounded-full md:hidden" />
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary rounded-full" />

            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative flex flex-col md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Nodes */}
                  <div className="absolute left-4 -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10 md:hidden" />
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10" />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'} min-w-0`}>
                    <div className="bg-gradient-card backdrop-blur-md rounded-2xl p-4 md:p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 group">
                      {/* Status Badge + Period */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                            edu.status === 'Current'
                              ? 'bg-gradient-primary text-background'
                              : 'bg-background-accent text-foreground-muted border border-glass-border'
                          }`}
                        >
                          {edu.status}
                        </span>
                        <span className="text-xs md:text-sm font-mono text-foreground-muted break-words">
                          {edu.period}
                        </span>
                      </div>

                      {/* Titles */}
                      <h3 className="text-lg md:text-2xl font-display font-bold text-foreground mb-1 break-words">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base md:text-lg font-semibold text-neon-cyan mb-1 break-words">
                        {edu.institution}
                      </h4>
                      <p className="text-sm md:text-base text-foreground-muted mb-3 break-words">📍 {edu.location}</p>

                      {/* Description */}
                      <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-5 break-words">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h5 className="text-xs md:text-sm font-semibold text-foreground mb-2">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 rounded-full bg-background-accent border border-glass-border text-xs md:text-sm text-foreground-muted font-mono break-words"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer on desktop only */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-card backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Academic Excellence & Beyond
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                My academic journey has been complemented by practical experience through internships, 
                freelance projects, and active participation in hackathons and coding competitions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">9+</div>
                  <div className="text-sm text-foreground-muted">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-foreground-muted">Academic Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">4</div>
                  <div className="text-sm text-foreground-muted">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EducationSection;
