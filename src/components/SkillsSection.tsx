const skills = [
  'RAG', 'Web Scraping', 'Python', 'Beautiful Soup', 'Selenium', 'LLMs',
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js',
  'Docker', 'GitHub', 'AWS', 'Render',
  'FastAPI', 'Flask', 'PostgreSQL', 'Pinecone', 'PyTorch', 'PHP',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Skills</h2>

        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <div
              key={skill}
              className="flex items-center justify-center px-3 py-1.5 text-[13px] font-semibold rounded-md bg-foreground text-background hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
