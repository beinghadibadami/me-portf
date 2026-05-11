import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Experience {
  logo?: string;
  initial: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    initial: 'L',
    company: 'LearnCrate AI',
    position: 'AI Engineer',
    period: 'Mar 2026 – Present',
    description:
      'Driving the development of an advanced EdTech platform for a startup company. Engineered complex RAG pipelines and structured document processing for database storage. Leveraged LLMs to build student-centric features, conducting in-depth product research, competitive analysis, and strategic feature planning.',
  },
  {
    initial: 'F',
    company: 'Freelance Developer',
    position: 'Full Stack, AI & Automation',
    period: 'Aug 2025 – Present',
    description:
      'Specialized in Full Stack development, AI integration, and business automation workflows. Built comprehensive ecosystems integrating AI, web, and mobile for diverse clientele.',
  },
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="experience" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Work Experience</h2>

        <div className="divide-y divide-[hsl(var(--glass-border))]">
          {experiences.map((exp, idx) => (
            <div key={exp.company}>
              {/* Row */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center gap-4 py-4 text-left hover:opacity-80 transition-opacity"
              >
                {/* Logo / Initial */}
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-background-accent border border-[hsl(var(--glass-border))] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-foreground">
                      {exp.initial}
                    </span>
                  </div>
                )}

                {/* Company + Position */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground text-sm">
                    {exp.company}
                  </div>
                  <div className="text-foreground-muted text-sm">
                    {exp.position}
                  </div>
                </div>

                {/* Duration */}
                <span className="text-foreground-muted text-sm flex-shrink-0">
                  {exp.period}
                </span>

                {/* Chevron */}
                <ChevronDown
                  className={`w-4 h-4 text-foreground-muted flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
              >
                <p className="text-foreground-muted text-sm leading-relaxed pl-14">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;