
const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology in Artificial Intelligence and Machine Learning
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">Aditya University</p>
                <p className="text-gray-300 mb-6">
                  Currently pursuing B.Tech in AIM with a focus on cutting-edge AI technologies, 
                  machine learning algorithms, and their practical applications in real-world scenarios.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Core Subjects</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data Structures & Algorithms
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Machine Learning
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Artificial Intelligence
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Database Management Systems
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Consistent academic performance
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Active in technical projects
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Participated in coding competitions
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Leadership in group projects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-4 rounded-xl bg-primary/10">
                  <h4 className="text-lg font-semibold text-primary mb-2">Academic Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Duration</span>
                      <span className="text-white font-medium">2022 - 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">CGPA</span>
                      <span className="text-white font-medium">8.24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Year</span>
                      <span className="text-white font-medium">3rd Year</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-2">Specialization</h4>
                  <p className="text-gray-300 text-sm">
                    Focused on practical applications of AI and ML in web development, 
                    with emphasis on creating intelligent systems and data-driven solutions.
                  </p>
                </div>

                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-2">Future Goals</h4>
                  <p className="text-gray-300 text-sm">
                    Aiming to bridge the gap between traditional software development 
                    and AI-powered applications in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
