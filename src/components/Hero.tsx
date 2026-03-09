import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Skyscraper" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050b]/70 via-[#05050b]/50 to-[#05050b]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo Placeholder - Replaced image with icon */}
          <div className="mb-8 relative group">
             <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
             <img 
               src="/photo/logo.png" 
               alt="ReCom Group Logo" 
               className="w-64 md:w-[500px] h-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
             />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">
            ReCom Group
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide mb-10">
            Управление коммерческой недвижимостью
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-full text-lg font-medium transition-all liquid-button-primary cursor-pointer"
          >
            <span>Заказать аудит объекта</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
