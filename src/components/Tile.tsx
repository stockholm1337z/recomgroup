import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface TileProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Tile({ children, className = '', delay = 0, ...props }: TileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay 
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0, 122, 255, 0.15)"
      }}
      className={`
        relative overflow-hidden
        rounded-[32px] 
        liquid-gradient
        border border-white/10
        p-8
        ${className}
      `}
      {...props}
    >
      {/* Glossy reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
