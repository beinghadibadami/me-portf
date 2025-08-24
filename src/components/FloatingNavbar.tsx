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
        'fixed bottom-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-300',
        // Responsive positioning and sizing
        'w-[95%] max-w-2xl sm:w-auto sm:bottom-6',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div className="bg-gradient-card backdrop-blur-md border border-glass-border rounded-xl sm:rounded-2xl px-2 sm:px-6 py-2 sm:py-3 shadow-card">
        <div className="flex items-center justify-center">
          {/* Mobile: Horizontal scrollable container */}
          <div className="flex items-center space-x-0.5 sm:space-x-1 overflow-x-auto scrollbar-hide w-full justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'flex-shrink-0 transition-all duration-300 relative overflow-hidden whitespace-nowrap',
                  // Responsive padding and text sizing
                  'px-2 py-1.5 sm:px-4 sm:py-2',
                  'text-xs sm:text-sm font-medium',
                  'rounded-lg sm:rounded-xl',
                  // Responsive min-width to prevent squashing
                  'min-w-[60px] sm:min-w-auto',
                  activeSection === item.href.substring(1)
                    ? 'text-foreground bg-gradient-primary shadow-glow'
                    : 'text-foreground-muted hover:text-foreground hover:bg-glass-hover'
                )}
              >
                <span className="relative z-10 text-center block">
                  {/* Show abbreviated text on very small screens */}
                  <span className="hidden sm:inline">{item.name}</span>
                  <span className="sm:hidden">
                    {item.name === 'Experience' ? 'Exp' : 
                     item.name === 'Education' ? 'Edu' : 
                     item.name === 'Projects' ? 'Work' :
                     item.name}
                  </span>
                </span>
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-glow" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
