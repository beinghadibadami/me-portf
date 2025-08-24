import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Shakbhaji',
    description: 'AI-powered system for fruit and vegetable quality assessment and Real-time market price Scraping using Beautiful Soup & LLMs.',
    tech: ['Next.js', 'Market Price Scraping', 'FastAPI', 'LLM'],
    github: 'https://github.com/beinghadibadami/shakbhaji',
    demo: 'https://vegvision.onrender.com',
    video: '/videos/vegvision_demo.mp4',
    featured: true
  },
  {
    title: 'CodeBase Chat',
    description: 'RAG-based GitHub Repo understanding chatbot that helps developers navigate and understand large codebases using vector search and LLM capabilities.',
    tech: ['Python', 'RAG', 'Vector Search', 'LLM', 'FastAPI','Pinecone'],
    github: 'https://github.com/beinghadibadami/codebase-rag',
    // demo: 'https://codebase-chat.demo.com',
    video: '/videos/codebase_demo.mp4',
    featured: true
  },
  {
    title: 'Freelance Project',
    description: 'Comprehensive data pipeline for scraping car information, reviews, enriching metadata, dealer & service center data for a Client.',
    tech: ['Web Scraping', 'Data Pipeline', 'PostgreSQL', 'Data Migration', 'Google Reviews Scraping'],
    // github: 'https://github.com/hadibadami/car-data-pipeline',
    video: '/videos/carphd_demo.mp4', 
    demo: "https://carphd.com",
    featured: true
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Check Out My Recent Projects !
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
             Along with the demo and GitHub links, explore some of my featured projects below.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gradient-card backdrop-blur-md rounded-3xl border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className={`p-6 ${project.featured ? 'md:p-8' : ''}`}>
                  <div className={`${project.featured ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}>
                    <div>
                      {/* Project Badge */}
                      {project.featured && (
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-background text-sm font-semibold mb-4">
                          ⭐ Featured Project
                        </div>
                      )}

                      {/* Project Title */}
                      <h3 className={`font-display font-bold text-foreground mb-4 ${
                        project.featured ? 'text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-foreground-muted leading-relaxed mb-6 ${
                        project.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-background-accent border border-glass-border text-sm text-foreground-muted font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        {project.github && (
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                          )}
                        {project.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Visual Element for Featured Projects */}
                   {/* {project.featured && ( */}
                    <div className="relative">
                      <div className="bg-background-accent rounded-2xl border border-glass-border overflow-hidden">
                        
                          <video
                            
                            className="w-full h-80 object-cover rounded-2xl cursor-pointer hover:opacity-90 transition"
                            autoPlay
                            muted
                            loop
                            // controls
                            // playsInline
                          >
                          <source src={project.video} type="video/mp4" />
                          </video>
                        {/* </a> */}
                      </div>

    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan/30 rounded-full blur-sm animate-float" />
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-neon-purple/30 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }} />
                  </div>



                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm text-lg px-8 py-6 rounded-2xl font-semibold"
              asChild
            >
              <a href="https://github.com/beinghadibadami" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;