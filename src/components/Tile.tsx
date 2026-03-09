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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
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
        transition-all duration-300
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
