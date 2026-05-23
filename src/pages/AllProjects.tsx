import { useState } from 'react';
import { X, ExternalLink, Github, ArrowLeft, Play } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';

interface Project {
  title: string;
  description: string;
  overview: string;
  tech: string[];
  features?: string[];
  video?: string;
  videoPlaceholder?: boolean;
  github?: string;
  demo?: string;
  period: string;
  category: string;
}

const allProjects: Project[] = [
  {
    title: 'CodeChat AI',
    period: '2025',
    category: 'AI',
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
    category: 'Data Pipeline',
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
    period: '2026',
    category: 'B2B Automation',
    description:
      'An automation tool utilized by companies to generate dynamic business pitch presentations. B2B AUTOMATION.',
    overview:
      'Aire Real Estate is a sophisticated B2B automation platform designed for real estate companies. It streamlines the generation of dynamic, data-driven business pitch presentations, allowing teams to create professional materials in minutes rather than hours.',
    tech: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Redis'],
    demo: 'https://www.aire-realestate.com/',
    video: '/videos/aire-realestate.mp4',
  },
  {
    title: 'DivineSyncServe',
    period: '2025',
    category: 'Web',
    description:
      'Core PHP based website for an IT Company with payment integration.',
    overview:
      'DivineSyncServe is a production IT company website built with core PHP. Features include JWT authentication, HDFC SmartGateway payment integration for secure transactions, and MongoDB for storing user data and transaction records.',
    tech: ['PHP', 'JWT Auth', 'MongoDB', 'HDFC SmartGateway'],
    demo: 'https://divinesyncserve.com',
    video: '/videos/divine-demo.mp4',
  },
  {
    title: 'Masani Marine',
    period: '2026',
    category: 'Web',
    description:
      'Professional corporate website for a marine services company, featuring modern UI and seamless user experience.',
    overview:
      'Masani Marine is a professionally crafted corporate website built for a marine services company. The site delivers a clean, authoritative online presence with a modern design, showcasing the company\'s services, expertise, and fleet. Features a responsive layout optimized for all devices.',
    tech: ['React', 'Node.js', 'Modern UI', 'Responsive Design'],
    demo: 'https://masani-marine.onrender.com/',
    video: '/videos/masani-marine.mp4',
  },
  {
    title: 'MA Global Ventures',
    period: '2026',
    category: 'Web',
    description:
      'Corporate B2B catalog and web presence for a leading manufacturer of dehydrated alliums, herbs, and specialty food powders.',
    overview:
      'MA Global Ventures is a full corporate B2B catalog website built for a manufacturer of dehydrated foods and spices based in India. The platform showcases an extensive 9-category product range including dehydrated garlic, various onions, ginger, vegetable powders, and specialty items. It features a modern, responsive UI with a well-structured information hierarchy designed to attract international clients.',
    tech: ['React', 'Node.js', 'Modern UI', 'Responsive Design'],
    demo: 'https://ma-global-ventures.onrender.com/',
    video: '/videos/ma-global.mp4',
  },
  {
    title: 'GruntWorkr',
    period: '2026',
    category: 'AI',
    description:
      'AI-Powered Multi-Agent Talent Intelligence platform for streamlining recruitment through intelligent resume parsing and candidate matching.',
    overview:
      'GruntWorkr is a modern, AI-driven platform designed to streamline the recruitment process through intelligent resume parsing, skill normalization, and candidate matching. Built with a multi-agent orchestration architecture, it leverages cutting-edge LLMs to provide precise talent insights — from extracting personal info to matching candidates against specific roles.',
    features: [
      'Multi-Agent Parsing: Specialized agents for personal info, experience, and education extraction',
      'Intelligent Skill Mapping: Normalizes skills against a central taxonomy',
      'Candidate-Job Matching: Advanced algorithms to find the best fit for roles',
      'Real-time Telemetry: Built-in tracking for performance monitoring and API health',
      'Modern Dashboard: Sleek, responsive interface for managing the talent pipeline',
    ],
    tech: ['FastAPI', 'Python', 'React', 'TypeScript', 'Vite', 'Groq', 'HuggingFace', 'SQLite', 'Multi-Agent'],
    videoPlaceholder: true,
  },
  {
    title: 'Sistani Jurisprudence',
    period: '2025',
    category: 'AI',
    description:
      'RAG-based Islamic jurisprudence chatbot for asking rulings on Islamic law, worship, and daily practices — strictly based on Ayatullah al-Sistani\'s scholarly opinions.',
    overview:
      'Sistani Jurisprudence is a Shia Islamic religious chatbot designed to answer questions about Islamic law, worship, and daily practices. Built on a Retrieval-Augmented Generation (RAG) architecture, every answer is grounded strictly in the authenticated rulings of Ayatullah al-Uzma Sayyid Ali al-Sistani — no outside LLM knowledge, no speculation. Users can ask about ritual purity, prayer, fasting, transactions, and more, and receive precise, source-referenced fatawa.',
    features: [
      'Pure RAG Architecture: All answers sourced exclusively from al-Sistani\'s authenticated rulings',
      'Covers Islamic Law: Ritual purity (Tahara), Prayer (Salat), Fasting (Sawm), Transactions & more',
      'No Hallucination: Strict retrieval-only mode — no outside LLM knowledge injected',
      'Source-Referenced: Responses tied back to specific sections of the Risalah al-Amaliyyah',
      'Multilingual Intent: Built to serve English-speaking Shia Muslim communities worldwide',
    ],
    demo: 'https://al-sistani-chat.onrender.com/',
    tech: ['Python', 'RAG', 'Vector Search', 'LLM', 'FastAPI', 'Islamic Jurisprudence'],
    videoPlaceholder: true,
  },
];

const categoryColors: Record<string, string> = {
  'AI': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Data Pipeline': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'B2B Automation': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Web': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
};

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.025] mix-blend-difference"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--glass-border))] bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center gap-4 h-16">
          <Magnetic>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-accent transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </a>
          </Magnetic>
          <div className="h-4 w-px bg-[hsl(var(--glass-border))]" />
          <span className="text-sm font-semibold text-foreground">All Projects</span>
        </div>
      </header>

      <main className="container py-16 relative z-10">
        {/* Page Hero */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-block mb-4 px-3 py-1.5 rounded-md bg-foreground text-background text-[13px] font-semibold">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            All Projects
          </h1>
          <p className="text-foreground-muted text-base max-w-2xl">
            Every project I've built and shipped — from AI-powered platforms to corporate websites
            and data pipelines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${filter === cat
                ? 'bg-foreground text-background border-foreground'
                : 'bg-transparent text-foreground-muted border-[hsl(var(--glass-border))] hover:border-foreground/30 hover:text-foreground'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(project => (
            <div
              key={project.title}
              className="flex flex-col bg-background overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Media — large, rounded, no border */}
              {project.video ? (
                <div className="w-full aspect-[16/9] rounded-2xl bg-background-accent overflow-hidden mb-5">
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
              ) : project.videoPlaceholder ? (
                <div className="w-full aspect-[16/9] rounded-2xl bg-background-accent flex flex-col items-center justify-center gap-3 relative overflow-hidden mb-5">
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(236 84% 65% / 0.5), transparent 70%)' }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-[hsl(var(--glass-border))] flex items-center justify-center bg-background-secondary">
                      <Play className="w-6 h-6 text-foreground-muted ml-0.5" />
                    </div>
                    <span className="text-xs text-foreground-muted font-medium tracking-widest uppercase">Demo Video Coming Soon</span>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[16/9] rounded-2xl bg-background-accent relative overflow-hidden mb-5">
                  <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(ellipse at 30% 70%, hsl(200 84% 65% / 0.6), transparent 60%)' }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <ExternalLink className="w-9 h-9 text-foreground-muted" />
                    <span className="text-xs text-foreground-muted font-medium tracking-wide">Live Website</span>
                  </div>
                </div>
              )}

              {/* Meta row: category label + divider + tech pills */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-foreground">
                  {project.category}
                </span>
                <span className="w-8 h-px bg-[hsl(var(--glass-border))]" />
                {project.tech.slice(0, 3).map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-md border border-[hsl(var(--glass-border))] text-foreground-muted bg-transparent"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-md border border-[hsl(var(--glass-border))] text-foreground-muted bg-transparent">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2 group-hover:opacity-80 transition-opacity">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* Links row */}
              <div className="flex items-center gap-3 mt-auto" onClick={e => e.stopPropagation()}>
                <Magnetic>
                  <button
                    onClick={e => { e.stopPropagation(); setSelectedProject(project); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </button>
                </Magnetic>
                {project.github && (
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[hsl(var(--glass-border))] text-foreground hover:bg-background-accent transition-colors block"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Magnetic>
                )}
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
          ))}
        </div>

      </main>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[hsl(var(--glass-border))] bg-background shadow-card"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-lg bg-background-accent hover:bg-background-secondary transition-colors"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            {/* Media */}
            {selectedProject.video ? (
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
            ) : selectedProject.videoPlaceholder ? (
              <div className="aspect-video bg-background-accent rounded-t-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 50%, hsl(236 84% 65% / 0.25), transparent 70%)',
                  }}
                />
                {/* Pulsing ring */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-2 border-[hsl(var(--glass-border))] flex items-center justify-center bg-background-secondary animate-pulse">
                      <Play className="w-8 h-8 text-foreground-muted ml-1" />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-[hsl(236_84%_65%_/_0.3)] animate-ping" />
                  </div>
                  <div className="text-center">
                    <p className="text-foreground font-semibold text-sm">Demo Video</p>
                    <p className="text-foreground-muted text-xs mt-1">Will be added soon</p>
                  </div>
                </div>
              </div>
            ) : selectedProject.demo ? (
              <div className="aspect-video bg-background-accent rounded-t-2xl flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      'radial-gradient(ellipse at 30% 70%, hsl(200 84% 65% / 0.5), transparent 60%)',
                  }}
                />
                <ExternalLink className="w-10 h-10 text-foreground-muted relative z-10" />
                <span className="text-sm text-foreground-muted font-medium relative z-10">
                  Live at{' '}
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2"
                    onClick={e => e.stopPropagation()}
                  >
                    {selectedProject.demo.replace('https://', '')}
                  </a>
                </span>
              </div>
            ) : null}

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                  <span className="text-foreground-muted text-sm">{selectedProject.period}</span>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${categoryColors[selectedProject.category] ?? 'text-foreground-muted bg-background-secondary border-[hsl(var(--glass-border))]'
                    }`}
                >
                  {selectedProject.category}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-2">Overview</h4>
              <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                {selectedProject.overview}
              </p>

              {selectedProject.features && (
                <>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-5">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand))] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full border border-[hsl(var(--glass-border))] text-foreground-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

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
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
