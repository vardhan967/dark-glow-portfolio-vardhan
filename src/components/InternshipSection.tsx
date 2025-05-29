
const InternshipSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Internship</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">Sentiment Analysis</h3>
                <span className="text-primary font-semibold">Dec 2024</span>
              </div>
              
              <p className="text-primary font-medium mb-4">IBM SkillsBuild Internship</p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Focused on sentiment analysis, applying NLP techniques effectively to build and deploy 
                machine learning models for text classification and emotion detection.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Developed models to analyze and classify textual emotions
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Enhanced data processing and machine learning proficiency
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Applied Natural Language Processing techniques effectively
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gained hands-on experience with ML model deployment
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {["NLP", "Machine Learning", "Python", "Data Analysis", "Text Processing"].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Program Impact</h4>
                <p className="text-gray-300 text-sm">
                  This internship significantly enhanced my understanding of AI/ML applications 
                  and prepared me for advanced machine learning projects.
                </p>
              </div>

              <div className="glass-card p-4 rounded-xl bg-primary/10">
                <h4 className="text-lg font-semibold text-primary mb-2">IBM SkillsBuild</h4>
                <p className="text-gray-300 text-sm">
                  Certified program focusing on practical AI and machine learning applications 
                  in real-world scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
