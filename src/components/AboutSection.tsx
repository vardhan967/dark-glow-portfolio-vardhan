
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              As a skilled and versatile individual, I have expertise in multiple programming languages, 
              including <span className="text-primary font-semibold">Python, Java, and C</span>. 
              I am passionate about developing robust web applications and constantly expanding my technical knowledge.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my <span className="text-primary font-semibold">B.Tech in Artificial Intelligence and Machine Learning</span> 
              at Aditya University, where I am honing my problem-solving skills and staying at the forefront of emerging technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across full-stack development with Django and React, database management, 
              and I'm particularly passionate about creating secure, scalable solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">📍</span> Amalapuram
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">🎓</span> B.Tech AIM Student
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-primary font-semibold">💻</span> Full Stack Developer
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 gradient-text">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">University</span>
                <span className="text-white font-medium">Aditya University</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">CGPA</span>
                <span className="text-white font-medium">8.24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Graduation</span>
                <span className="text-white font-medium">2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Experience</span>
                <span className="text-white font-medium">2+ Years Learning</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Focus</span>
                <span className="text-white font-medium">Full Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
