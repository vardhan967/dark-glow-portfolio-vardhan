
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Java Certification",
      provider: "EDX",
      description: "Comprehensive Java programming certification covering OOP concepts and advanced features",
      skills: ["Object-Oriented Programming", "Java Collections", "Exception Handling"]
    },
    {
      title: "Python Certification",
      provider: "EDX",
      description: "Advanced Python programming certification with focus on web development and data structures",
      skills: ["Python Fundamentals", "Web Development", "Data Structures"]
    },
    {
      title: "SQL Certification",
      provider: "HackerRank",
      description: "Database management and SQL query optimization certification",
      skills: ["Database Design", "Query Optimization", "Data Management"]
    },
    {
      title: "AI Certification",
      provider: "IBM SkillsBuild",
      description: "Artificial Intelligence fundamentals and machine learning applications",
      skills: ["Machine Learning", "AI Fundamentals", "Data Analysis"]
    }
    {
      title: "MongoDB",
      provider: "Let's Upgrade",
      description: "MongoDB fundamentals",
      skills: ["DataBase", "Schema Design", "Data Control Language"]
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-primary font-semibold">{cert.provider}</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-6 rounded-2xl inline-block">
            <h3 className="text-lg font-semibold text-white mb-2">
              Professional Development Focus
            </h3>
            <p className="text-gray-300">
              Continuously expanding knowledge through industry-recognized certifications 
              and hands-on project experience in emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
