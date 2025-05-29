
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Seat Booking System (Full Stack)",
      date: "Nov 2024",
      description: "Django-powered system for seat registration, booking with efficiency, enhancing security and reducing manual effort.",
      features: [
        "Developed with Django framework and database integration",
        "Ensures seamless authentication and user workflow",
        "Reduced manual errors and improved security",
        "Complete admin access and user management system"
      ],
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQL"],
      type: "Full Stack Web Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{project.title}</h3>
                    <span className="text-primary font-semibold">{project.date}</span>
                  </div>
                  
                  <p className="text-primary font-medium mb-4">{project.type}</p>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button className="bg-primary hover:bg-primary/80">
                      Live Demo
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-xl">
                    <h4 className="text-lg font-semibold text-white mb-2">Project Impact</h4>
                    <p className="text-gray-300 text-sm">
                      Successfully reduced manual booking errors by implementing automated seat allocation 
                      and secure user authentication system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">More projects coming soon!</p>
          <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
