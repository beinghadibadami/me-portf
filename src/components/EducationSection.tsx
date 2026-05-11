import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface EducationEntry {
  logo?: string;
  initial: string;
  institution: string;
  degree: string;
  period: string;
  link?: string;
}

interface CertEntry {
  logo?: string;
  initial: string;
  issuer: string;
  title: string;
  date: string;
  description: string;
  credentialLink?: string;
}

const education: EducationEntry[] = [
  {
    initial: 'V',
    logo: '/logos/vgec.png',
    institution: 'Vishwakarma Govt. Engineering College',
    degree: 'B.E. Computer Science (Data Science)',
    period: '2024 – Present',
    link: 'https://www.vgecg.ac.in/',
  },
  {
    initial: 'G',
    logo: '/logos/gmb.png',
    institution: 'GMB Polytechnic',
    degree: 'Diploma in Computer Engineering',
    period: '2021 – 2024',
    link: 'http://www.gmbpolytechnic.ac.in/',
  },
];

const certifications: CertEntry[] = [
  {
    initial: 'O',
    logo: '/logos/oracle_logo.png',
    issuer: 'Oracle University',
    title: 'Oracle AI Vector Search Certified',
    date: 'July 2025',
    description:
      'Comprehensive certification covering vector database implementations, similarity search algorithms, and AI-powered search optimization.',
    credentialLink:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D2B1D64104F7EC257F0AA496DC34EBC19CD433C8B527499CDAAAD2EC8DA79F12',
  },
];

const EducationSection = () => {
  const [openCertIndex, setOpenCertIndex] = useState<number | null>(null);

  const toggleCert = (idx: number) => {
    setOpenCertIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="education" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>

        <div className="divide-y divide-[hsl(var(--glass-border))]">
          {education.map((edu) => (
            <div key={edu.institution} className="w-full flex items-center gap-4 py-4">
              {edu.logo ? (
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-background-accent border border-[hsl(var(--glass-border))] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-foreground">
                    {edu.initial}
                  </span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-foreground text-sm truncate">
                    {edu.institution}
                  </div>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <div className="text-foreground-muted text-sm">
                  {edu.degree}
                </div>
              </div>

              <span className="text-foreground-muted text-sm flex-shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications merged here */}
        {certifications.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-foreground mt-10 mb-4">Certifications</h3>

            <div className="divide-y divide-[hsl(var(--glass-border))]">
              {certifications.map((cert, idx) => (
                <div key={cert.title}>
                  <button
                    onClick={() => toggleCert(idx)}
                    className="w-full flex items-center gap-4 py-4 text-left hover:opacity-80 transition-opacity"
                  >
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-10 h-10 rounded-full object-contain bg-white flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-background-accent border border-[hsl(var(--glass-border))] flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-foreground">
                          {cert.initial}
                        </span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-sm">
                        {cert.title}
                      </div>
                      <div className="text-foreground-muted text-sm">
                        {cert.issuer}
                      </div>
                    </div>

                    <span className="text-foreground-muted text-sm flex-shrink-0">
                      {cert.date}
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 text-foreground-muted flex-shrink-0 transition-transform duration-200 ${openCertIndex === idx ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openCertIndex === idx ? 'max-h-40 pb-4' : 'max-h-0'
                      }`}
                  >
                    <div className="pl-14">
                      <p className="text-foreground-muted text-sm leading-relaxed mb-2">
                        {cert.description}
                      </p>
                      {cert.credentialLink && (
                        <a
                          href={cert.credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
