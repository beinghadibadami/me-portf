const skills = [
  {
    category: 'AI/ML & Data Science',
    items: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow', level: 88 },
      { name: 'scikit-learn', level: 92 },
      { name: 'pandas', level: 90 },
      { name: 'NLP', level: 85 },
      { name: 'LLMs', level: 87 },
      { name: 'Machine Learning', level: 90 },
      { name: 'Data Science', level: 88 }
    ]
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'Web Scraping', level: 85 }
    ]
  },
  {
    category: 'Databases & Vector Search',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'Pinecone', level: 80 },
      { name: 'Vector Databases', level: 82 },
      { name: 'RAG Systems', level: 88 }
    ]
  },
  {
    category: 'Frontend & Web',
    items: [
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Expertise across the full AI/ML development stack
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card hover:shadow-glow transition-all duration-500"
              >
                <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.items.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground-muted font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-background-accent rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:animate-glow"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Icon */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-background">
                    {categoryIndex === 0 && '🤖'}
                    {categoryIndex === 1 && '⚡'}
                    {categoryIndex === 2 && '🗄️'}
                    {categoryIndex === 3 && '🎨'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Always Learning, Always Growing
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                The AI/ML field evolves rapidly, and I'm committed to staying at the forefront. 
                Currently exploring advanced RAG architectures, multimodal AI systems, and the latest developments in large language models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;