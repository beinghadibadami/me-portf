import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-30 transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div className="bg-gradient-card backdrop-blur-md border border-glass-border rounded-2xl px-6 py-3 shadow-card">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden',
                activeSection === item.href.substring(1)
                  ? 'text-foreground bg-gradient-primary shadow-glow'
                  : 'text-foreground-muted hover:text-foreground hover:bg-glass-hover'
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.href.substring(1) && (
                <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-glow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;