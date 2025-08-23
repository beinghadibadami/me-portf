import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hadi.badami@gmail.com',
      href: 'mailto:hadi.badami@gmail.com',
      color: 'neon-cyan'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: null,
      color: 'neon-pink'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/hadibadami',
      username: '@hadibadami'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/hadibadami',
      username: 'Hadi Badami'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Ready to collaborate on exciting AI/ML projects? Let's discuss how we can work together.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Get In Touch
                </h3>
                <p className="text-base text-foreground-muted leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a chat about the latest developments in AI and machine learning.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bg-gradient-card backdrop-blur-md rounded-xl p-4 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                        <info.icon className="w-5 h-5 text-background" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground-muted mb-1">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-semibold hover:text-neon-cyan transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-semibold">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-3 text-center">
                  Follow Me
                </h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-card backdrop-blur-md rounded-xl p-4 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <social.icon className="w-4 h-4 text-background" />
                        </div>
                        <div>
                          <div className="text-foreground font-semibold text-sm">{social.label}</div>
                          <div className="text-xs text-foreground-muted">{social.username}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card">
              <p className="text-foreground-muted mb-4">
                © 2025 Hadi Badami. Built with passion for AI/ML and beautiful design.
              </p>
              <p className="text-sm text-foreground-muted">
                "It is what it is." - Let's make it better together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;