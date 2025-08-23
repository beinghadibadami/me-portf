import { useEffect, useState } from 'react';
import dogMascot from '@/assets/dog-mascot.png';

const CursorDog = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsIdle(false);
      
      // Clear existing timer
      clearTimeout(idleTimer);
      
      // Set new idle timer
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: position.x - 32,
        top: position.y - 32,
        transform: `scale(${clicked ? 1.2 : 1}) ${isIdle ? 'rotate(-5deg)' : ''}`,
      }}
    >
      <img
        src={dogMascot}
        alt="Cursor Dog"
        className={`w-16 h-16 transition-all duration-300 ${
          isIdle ? 'animate-float opacity-80' : 'opacity-100'
        } ${clicked ? 'animate-bounce' : ''}`}
        style={{
          filter: clicked ? 'drop-shadow(0 0 20px hsl(var(--neon-cyan)))' : 'none',
        }}
      />
    </div>
  );
};

export default CursorDog;