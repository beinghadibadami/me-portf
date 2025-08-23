import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'Oracle AI Vector Search Certified',
    issuer: 'Oracle University',
    date: 'January 2025',
    credentialId: 'ORA-AIVS-2025-HB001',
    description: 'Comprehensive certification covering vector database implementations, similarity search algorithms, and AI-powered search optimization.',
    skills: ['Vector Databases', 'Similarity Search', 'Oracle Database', 'AI Search Optimization'],
    hasCredentials: true,
    logo: '🔍'
  }
];

const upcomingCerts = [
  {
    title: 'AWS Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    expectedDate: 'Q2 2025',
    description: 'Advanced certification focusing on ML model deployment, optimization, and management on AWS cloud infrastructure.',
    logo: '☁️'
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    expectedDate: 'Q3 2025',
    description: 'Practical certification demonstrating proficiency in building and deploying ML models using TensorFlow.',
    logo: '🧠'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Validated expertise through industry-recognized certifications
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Current Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
              Current Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 group"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Certificate Info */}
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl text-background">
                          {cert.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                            {cert.title}
                          </h4>
                          <div className="flex items-center gap-4 text-foreground-muted mb-2">
                            <span className="font-semibold text-neon-cyan">{cert.issuer}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{cert.date}</span>
                            </div>
                          </div>
                          <p className="text-sm font-mono text-foreground-muted mb-4">
                            ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>

                      <p className="text-foreground-muted leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-foreground mb-3">Skills Validated:</h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Verification */}
                    <div className="text-center">
                      <div className="bg-background-accent rounded-2xl p-6 border border-glass-border mb-6">
                        <Award className="w-12 h-12 mx-auto mb-4 text-neon-cyan" />
                        <div className="text-lg font-bold text-foreground mb-2">Verified</div>
                        <div className="text-sm text-foreground-muted">Professional Certification</div>
                      </div>

                      {cert.hasCredentials && (
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Credentials
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Certifications */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
              Upcoming Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingCerts.map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                >
                  {/* Progress Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-background-accent">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: index === 0 ? '60%' : '30%' }}
                    />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-background-accent border border-glass-border flex items-center justify-center text-lg">
                      {cert.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-display font-bold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <div className="text-neon-cyan font-semibold mb-1">{cert.issuer}</div>
                      <div className="text-sm text-foreground-muted">Expected: {cert.expectedDate}</div>
                    </div>
                  </div>

                  <p className="text-foreground-muted leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Status Badge */}
                  <div className="mt-6">
                    <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-semibold border border-neon-purple/30">
                      In Progress
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Continuous Learning Commitment
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                In the rapidly evolving field of AI/ML, staying certified ensures I'm equipped with the latest 
                knowledge and best practices. My certification journey reflects my commitment to professional 
                excellence and continuous skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;