import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';

interface Project {
  title: string;
  description: string;
  overview: string;
  tech: string[];
  video?: string;
  github?: string;
  demo?: string;
  period: string;
}

const projects: Project[] = [
  {
    title: 'CodeChat AI',
    period: '2025',
    description:
      'RAG-based GitHub Repo understanding chatbot that helps developers navigate and understand large codebases.',
    overview:
      'CodeChat AI is a RAG-based GitHub Repository understanding chatbot that helps developers navigate and understand large codebases using vector search and LLM capabilities. It indexes entire repositories, creates vector embeddings, and allows natural language queries about code structure, functions, and architecture.',
    tech: ['Python', 'RAG', 'Vector Search', 'LLM', 'FastAPI', 'Pinecone'],
    github: 'https://github.com/beinghadibadami/codechat-ai',
    demo: 'https://codechat-jgxg.onrender.com/',
    video: '/videos/codechat-demo.mp4',
  },
  {
    title: 'CarPHD',
    period: '2025',
    description:
      'Comprehensive data pipeline for scraping car information, reviews, dealer & service center data.',
    overview:
      'CarPHD is a comprehensive data pipeline for scraping car information, reviews, enriching metadata, dealer & service center data for a client. It includes 270+ new car records, Google reviews scraping, dealer info for Delhi NCR, and dynamic UI features with an AI-powered chatbot for car comparisons.',
    tech: ['Web Scraping', 'Data Pipeline', 'PostgreSQL', 'Google Reviews Scraping'],
    demo: 'https://carphd.com',
    video: '/videos/carphd_demo.mp4',
  },
  {
    title: 'Aire Real Estate',
    period: '2025',
    description:
      'An automation tool utilized by companies to generate dynamic business pitch presentations. B2B AUTOMATION.',
    overview:
      'Aire Real Estate is a sophisticated B2B automation platform designed for real estate companies. It streamlines the generation of dynamic, data-driven business pitch presentations, allowing teams to create professional materials in minutes rather than hours.',
    tech: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Redis'],
    demo: 'https://www.aire-realestate.com/',
    video: '/videos/aire-realestate.mp4',
  },
  {
    title: 'MA Global Ventures',
    period: '2025',
    description:
      'Corporate B2B catalog and web presence for a leading manufacturer of dehydrated alliums, herbs, and specialty food powders.',
    overview:
      'MA Global Ventures is a full corporate B2B catalog website built for a manufacturer of dehydrated foods and spices based in India. The platform showcases an extensive 9-category product range including dehydrated garlic, various onions, ginger, vegetable powders, and specialty items. It features a modern, responsive UI with a well-structured information hierarchy designed to attract international clients.',
    tech: ['React', 'Node.js', 'Modern UI', 'Responsive Design'],
    demo: 'https://ma-global-ventures.onrender.com/',
    video: '/videos/ma-global.mp4',
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1.5 rounded-md bg-foreground text-background text-[13px] font-semibold hover:scale-105 transition-transform">
            Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-foreground-muted text-base max-w-2xl">
            A collection of projects I've built and shipped, focusing on AI, backend systems, and scalable applications.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-[hsl(var(--glass-border))] bg-background overflow-hidden group shadow-subtle hover:shadow-card transition-shadow"
            >
              {/* Video */}
              {project.video ? (
                <div className="aspect-[16/10] bg-background-accent overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="aspect-[16/10] bg-background-accent" />
              )}

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-foreground text-xl mb-1">
                    {project.title}
                  </h3>
                  <span className="text-foreground-muted text-sm uppercase tracking-wider">
                    {project.period}
                  </span>
                </div>

                <p className="text-foreground-muted text-base leading-relaxed text-center mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 mt-auto">
                  {project.tech.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-background-secondary text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-md bg-background-secondary text-foreground-muted">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[hsl(var(--glass-border))]">
                  <Magnetic>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                      </svg>
                      View Case Study
                    </button>
                  </Magnetic>
                  {project.demo && (
                    <Magnetic>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-[hsl(var(--glass-border))] text-foreground hover:bg-background-accent transition-colors block"
                        title="Visit Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Magnetic>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Magnetic>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View All Projects
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-[hsl(var(--glass-border))] bg-background shadow-card"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-lg bg-background-accent hover:bg-background-secondary transition-colors"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            {/* Video */}
            {selectedProject.video && (
              <div className="aspect-video bg-background-accent overflow-hidden rounded-t-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={selectedProject.video} type="video/mp4" />
                </video>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>

              <h4 className="text-sm font-semibold text-foreground mb-2">
                Overview
              </h4>
              <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                {selectedProject.overview}
              </p>

              <h4 className="text-sm font-semibold text-foreground mb-2">
                Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedProject.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full border border-[hsl(var(--glass-border))] text-foreground-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Project
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-[hsl(var(--glass-border))] text-foreground hover:bg-background-accent transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
