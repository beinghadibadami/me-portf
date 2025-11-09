import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface InfiniteMenuItem {
  video?: string;
  image?: string;
  link?: string;
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
}

interface InfiniteMenuProps {
  items: InfiniteMenuItem[];
  className?: string;
}

// Individual Menu Item Component
const MenuItem: React.FC<{
  item: InfiniteMenuItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  itemWidth: number;
}> = ({ item, isHovered, onHover, onLeave, itemWidth }) => {
  return (
    <motion.div
      className="flex-shrink-0"
      style={{ width: `${itemWidth}px` }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
                <div className="relative group bg-gradient-card backdrop-blur-md rounded-2xl sm:rounded-3xl border border-glass-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden h-[450px] sm:h-[500px]">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                  {/* Video/Image Container */}
                  <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden bg-background-accent">
                    {item.video ? (
                      <video
                        className={cn(
                          'w-full h-full object-cover transition-transform duration-500',
                          isHovered ? 'scale-110' : 'scale-100'
                        )}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          'w-full h-full object-cover transition-transform duration-500',
                          isHovered ? 'scale-110' : 'scale-100'
                        )}
                      />
                    ) : (
                      <div className="w-full h-full bg-background-accent flex items-center justify-center">
                        <span className="text-foreground-muted">No media</span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col h-[250px] sm:h-[220px]">
                    {/* Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-foreground mb-2 line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 flex-grow">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    {item.tech && item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full bg-background-accent border border-glass-border text-xs text-foreground-muted font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.tech.length > 3 && (
                          <span className="px-2 py-1 rounded-full bg-background-accent border border-glass-border text-xs text-foreground-muted font-mono">
                            +{item.tech.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {item.github && (
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-xs px-3 py-1.5 h-auto"
                          asChild
                        >
                          <a href={item.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Github className="w-3 h-3 mr-1.5" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {item.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-glass-border bg-glass hover:bg-glass-hover backdrop-blur-sm text-xs px-3 py-1.5 h-auto"
                          asChild
                        >
                          <a href={item.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="w-3 h-3 mr-1.5" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan/30 rounded-full blur-sm animate-float pointer-events-none" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-neon-purple/30 rounded-full blur-sm animate-float pointer-events-none" style={{ animationDelay: '0.5s' }} />
                </div>
    </motion.div>
  );
};

const InfiniteMenu: React.FC<InfiniteMenuProps> = ({ items, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [itemWidth, setItemWidth] = useState(400);

  // Responsive item width based on screen size
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setItemWidth(280); // Mobile
      } else if (window.innerWidth < 768) {
        setItemWidth(320); // Small tablet
      } else if (window.innerWidth < 1024) {
        setItemWidth(360); // Tablet
      } else {
        setItemWidth(400); // Desktop
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Duplicate items for infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  const itemGap = itemWidth < 320 ? 16 : itemWidth < 360 ? 24 : 32;
  const totalItemWidth = itemWidth + itemGap;
  const scrollDistance = items.length * totalItemWidth;

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center">
        <motion.div
          className="flex"
          style={{ 
            gap: `${itemGap}px`,
            width: `${duplicatedItems.length * totalItemWidth}px`
          }}
          animate={{
            x: [0, -scrollDistance],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <MenuItem
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              itemWidth={itemWidth}
            />
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default InfiniteMenu;

