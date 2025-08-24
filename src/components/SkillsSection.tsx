const skills = [
  {
    category: 'AI/ML & Data Science',
    items: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'NLP', 'LLMs', 'Machine Learning']
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Flask', 'Django', 'RESTful APIs', 'Web Scraping']
  },
  {
    category: 'Databases & Vector Search',
    items: ['MongoDB', 'Pinecone', 'Vector Databases', 'RAG Systems']
  },
  {
    category: 'Frontend & Web',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
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

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-background-accent text-foreground rounded-full text-sm font-medium hover:bg-gradient-primary hover:text-background transition-all duration-300"
                      style={{
                        animationDelay: `${categoryIndex * 200 + index * 100}ms`
                      }}
                    >
                      {skill}
                    </span>
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