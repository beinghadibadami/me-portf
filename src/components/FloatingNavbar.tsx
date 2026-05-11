import { useState, useEffect } from 'react';
import Dock from '@/components/Dock';
import { Home, Code, Github, Linkedin, Sun, Moon } from 'lucide-react';

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const dockItems = [
    { icon: <Home className="w-5 h-5 text-white" />, label: 'Home', onClick: () => scrollToSection('hero') },
    { icon: <Code className="w-5 h-5 text-white" />, label: 'Projects', onClick: () => scrollToSection('projects') },
    { icon: <Github className="w-5 h-5 text-white" />, label: 'GitHub', onClick: () => window.open('https://github.com/beinghadibadami', '_blank') },
    { icon: <Linkedin className="w-5 h-5 text-white" />, label: 'LinkedIn', onClick: () => window.open('https://linkedin.com/in/hadi-badami', '_blank') },
    { icon: <XIcon />, label: 'X', onClick: () => window.open('https://x.com/beinghadibadami', '_blank') },
    { icon: isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />, label: isDark ? 'Light Mode' : 'Dark Mode', onClick: toggleTheme },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="pointer-events-auto">
        <Dock items={dockItems} />
      </div>
    </div>
  );
};

export default FloatingNavbar;
