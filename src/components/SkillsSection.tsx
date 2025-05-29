
import { Code, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Django", level: 88 },
        { name: "ReactJS", level: 85 },
        { name: "Bootstrap", level: 90 },
      ]
    },
    {
      title: "Operating Systems",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Linux/Unix", level: 85 },
        { name: "Windows", level: 90 },
      ]
    },
    {
      title: "Additional Skills",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "AI/ML Basics", level: 75 },
        { name: "Graphic Design", level: 80 },
        { name: "Multimedia Tech", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: "Communication in English", certification: "IBM Certified" },
              { skill: "Leadership in Projects", certification: "Team Management" },
              { skill: "Event Coordination", certification: "Multi-event Experience" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <h4 className="text-lg font-semibold text-white mb-2">{item.skill}</h4>
                <p className="text-primary text-sm">{item.certification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
