import { Brain, Code, Database, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  {
    category: 'AI/ML & Data Science',
    items: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'NLP', 'LLMs', 'Machine Learning'],
    icon: Brain,
    color: 'from-neon-cyan to-neon-blue',
    description: 'Building intelligent systems with cutting-edge AI/ML technologies'
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'Web Scraping', 'Beautiful Soup', 'Selenium'],
    icon: Code,
    color: 'from-neon-purple to-neon-pink',
    description: 'Scalable backend solutions and robust API development'
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'Pinecone', 'Vector Databases', 'MySQL', 'PostgreSQL'],
    icon: Database,
    color: 'from-neon-blue to-neon-cyan',
    description: 'Efficient data storage and vector search solutions'
  },
  {
    category: 'Frontend & Web',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
    color: 'from-neon-pink to-neon-purple',
    description: 'Modern, responsive web interfaces'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 px-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto px-4">
              Expertise across the full AI/ML development stack
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.category}
                    className={cn(
                    'group relative bg-gradient-card backdrop-blur-md border-2 border-glass-border',
                    'shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden',
                    'p-4 sm:p-5 md:p-6 flex flex-col h-full cursor-pointer',
                    'hover:scale-105 hover:-translate-y-2'
                  )}
                >
                  {/* Gradient Background */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20',
                    'transition-opacity duration-500',
                    skill.color
                  )} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={cn(
                      'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 sm:mb-5 md:mb-6',
                      'shadow-lg group-hover:scale-110 transition-transform duration-500',
                      skill.color
                    )}>
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Category Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-500">
                      {skill.category}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground-muted text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2 flex-grow items-start">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            'px-3 py-1.5 rounded-full text-xs font-medium',
                            'bg-background-accent/50 border border-glass-border',
                            'text-foreground-muted group-hover:text-foreground',
                            'group-hover:border-neon-cyan/50',
                            'transition-all duration-300'
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-cyan/20 rounded-full blur-xl group-hover:bg-neon-cyan/30 transition-colors duration-500" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl group-hover:bg-neon-purple/30 transition-colors duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
