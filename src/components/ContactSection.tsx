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
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'neon-purple'
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a chat about the latest developments in AI and machine learning.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bg-gradient-card backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center`}>
                        <info.icon className="w-6 h-6 text-background" />
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
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-card backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group flex-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-background" />
                        </div>
                        <div>
                          <div className="text-foreground font-semibold">{social.label}</div>
                          <div className="text-sm text-foreground-muted">{social.username}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card backdrop-blur-md rounded-3xl p-8 border border-glass-border shadow-card">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background-accent border-glass-border focus:border-neon-cyan"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background-accent border-glass-border focus:border-neon-cyan"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background-accent border-glass-border focus:border-neon-cyan"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background-accent border-glass-border focus:border-neon-cyan resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
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