
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Github, ArrowDown } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <a 
                  href="mailto:vsvardhan967@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  vsvardhan967@gmail.com
                </a>
              </div>

              <div className="glass-card p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                <a 
                  href="tel:+919381014098"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +91 93810 14098
                </a>
              </div>

              <div className="glass-card p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-300">Amalapuram, India</p>
              </div>
            </div>

            <div className="flex gap-4">
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
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/vardhan967" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </a>
              </Button>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
              size="lg"
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              <a  href="https://drive.google.com/file/d/11qdJz0PVPJgqtS6hzWisTeW42dpWQHpD/view?usp=sharing" target='_blank' >Download Resume</a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-primary resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400">
          © 2024 Vittanala Satya Prakash Vardhan. Crafted with passion and code.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
