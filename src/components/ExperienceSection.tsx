import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Freelance Data Scraping Work',
    company: 'Independent',
    location: 'Remote',
    period: 'July 2025 – Present',
    type: 'Freelance',
    description: 'Enhanced an existing car platform by adding 270+ new car data, dealer info, dynamic UI features, and an AI-powered chatbot.',
    achievements: [
      'Uploaded and enriched content for 270+ new cars with metadata (name, variant, fuel type,transmission, images, key specs)',
      'Integrated reviews and ratings with reviewer details and calculated average ratings for cars',
      'Scraped dealer & service center data for Delhi NCR with filters for ratings and review counts',
      'Developed dynamic homepage widgets for top-rated cars and auto-updating car comparisons',
      'Developed a chatbot using LLMs to answer user queries about car features and comparisons',
    ],
    tech: ['Python', 'Beatutiful Soup', 'Selenium', 'Web Scraping', 'PostgreSQL', 'Data Pipeline'],
    // featured: true
  },
  {
    title: 'Web Development Intern',
    company: 'Impero IT Services Pvt Ltd',
    location: 'Ahmedabad, India',
    period: 'Summer 2023',
    type: 'Internship',
    description: 'Gained hands-on experience in web development fundamentals, backend logic and project deployment basics.',
    // achievements: [
    //   'Contributed to customer behavior prediction model with 87% accuracy',
    //   'Optimized data preprocessing pipeline reducing processing time by 40%',
    //   'Collaborated with senior engineers on production ML system',
    //   'Participated in code reviews and agile development practices'
    // ],
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    featured: false
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Building innovative AI solutions through hands-on development and collaboration
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`relative bg-gradient-card backdrop-blur-md rounded-3xl border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden ${
                  exp.featured ? 'ring-2 ring-neon-cyan/30' : ''
                }`}
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-primary text-background text-sm font-semibold">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                <div className={`p-6 ${exp.featured ? 'md:p-8' : ''}`}>
                  <div className={`${exp.featured ? 'grid md:grid-cols-3 gap-8' : ''}`}>
                    {/* Main Content */}
                    <div className={exp.featured ? 'md:col-span-2' : ''}>
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                          <Briefcase className="w-8 h-8 text-background" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-display font-bold text-foreground mb-2 ${
                            exp.featured ? 'text-3xl' : 'text-2xl'
                          }`}>
                            {exp.title}
                          </h3>
                          <h4 className="text-xl font-semibold text-neon-cyan mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-foreground-muted">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              exp.type === 'Freelance' 
                                ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                                : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-foreground-muted leading-relaxed mb-6 ${
                        exp.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      {(exp.achievements && exp.achievements.length > 0) && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <li key={achieveIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                              <span className="text-foreground-muted leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Side Panel for Featured Experience */}
                    {exp.featured && (
                      <div className="space-y-6">
                        <div className="bg-background-accent rounded-2xl p-6 border border-glass-border">
                          <h5 className="text-lg font-semibold text-foreground mb-4">Impact Metrics</h5>
                          <div className="space-y-4">
                            <div>
                              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">270+</div>
                              <div className="text-sm text-foreground-muted">Records Enriched</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
                              <div className="text-sm text-foreground-muted">Accuracy Rate</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">50K+</div>
                              <div className="text-sm text-foreground-muted">New Reviews Scraped</div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="bg-background-accent rounded-2xl p-6 border border-glass-border">
                          <h5 className="text-lg font-semibold text-foreground mb-4">Client Feedback</h5>
                          <blockquote className="text-foreground-muted italic">
                            "Exceptional work quality and attention to detail. Delivered beyond expectations."
                          </blockquote>
                          <div className="flex mt-3">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-neon-cyan">⭐</span>
                            ))}
                          </div>
                        </div> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Goals */}
          {/* <div className="mt-12">
            <div className="bg-gradient-card backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-card max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Looking Forward
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                Seeking full-time opportunities in AI/ML engineering where I can contribute to cutting-edge 
                projects, mentor junior developers, and continue pushing the boundaries of what's possible 
                with artificial intelligence.
              </p>
              <div className="flex justify-center gap-4">
                <span className="px-4 py-2 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted">
                  Open to Remote Work
                </span>
                <span className="px-4 py-2 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted">
                  Full-time Opportunities
                </span>
                <span className="px-4 py-2 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted">
                  Team Leadership
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;