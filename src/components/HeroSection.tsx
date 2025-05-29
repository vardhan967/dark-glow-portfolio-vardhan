
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/812d7231-18cd-4b0d-b2db-bb922036631b.png"
              alt="Vittanala Satya Prakash Vardhan"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl animate-pulse-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Vittanala Satya</span>
          <br />
          <span className="gradient-text">Prakash Vardhan</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">Full Stack Engineer</h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building secure and scalable full stack applications with Django, React, and Python. 
          Passionate about creating innovative solutions that make a difference.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:vsvardhan967@gmail.com" className="flex items-center gap-2">
                Email
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://linkedin.com/prakashvardhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
