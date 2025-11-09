import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InfiniteMenu from '@/components/InfiniteMenu';

const projects = [
  {
    title: 'Shakbhaji',
    description: 'AI-powered system for fruit and vegetable quality assessment and Real-time market price Scraping using Beautiful Soup & LLMs.',
    tech: ['Next.js', 'Market Price Scraping', 'FastAPI', 'LLM'],
    github: 'https://github.com/beinghadibadami/shakbhaji',
    demo: 'https://vegvision.onrender.com',
    video: '/videos/vegvision-demo.mp4',
    featured: true
  },
  {
    title: 'CodeBase Chat',
    description: 'RAG-based GitHub Repo understanding chatbot that helps developers navigate and understand large codebases using vector search and LLM capabilities.',
    tech: ['Python', 'RAG', 'Vector Search', 'LLM', 'FastAPI','Pinecone'],
    github: 'https://github.com/beinghadibadami/codechat-ai',
    demo: 'https://codechat-jgxg.onrender.com/',
    video: '/videos/codechat-demo.mp4',
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
  },
  {
    title: 'Religious Chatbot',
    description: 'An AI-powered Islamic knowledge assistant that answers questions using Ayatullah al-Sistani rulings, with verified references through a custom RAG system.',
    tech: ['Python', 'RAG', 'FAISS', 'LLM', 'FastAPI'],
    github: 'https://github.com/beinghadibadami/sistani-chatbot/',
    video: '/videos/carphd_demo.mp4', 
    demo: "https://google.com",
    featured: true
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Check Out My Recent Projects !
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto px-4">
             Along with the demo and GitHub links, explore some of my featured projects below.
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6" />
          </div>

          {/* Infinite Menu Projects Display */}
          <div style={{ height: '450px', position: 'relative' }} className="mt-4 sm:mt-6 md:mt-8 sm:h-[500px] md:h-[550px] lg:h-[600px]">
            <InfiniteMenu
              items={projects.map((project) => ({
                video: project.video,
                title: project.title,
                description: project.description,
                tech: project.tech,
                github: project.github,
                demo: project.demo,
                link: project.demo || project.github
              }))}
            />
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl font-semibold"
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
