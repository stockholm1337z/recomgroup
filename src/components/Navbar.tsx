import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Главная', href: '#' },
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div className={`
        flex items-center gap-8 px-8 py-4 
        rounded-full 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-lg shadow-black/20
        transition-all duration-300
        ${scrolled ? 'scale-90 bg-white/10' : 'scale-100'}
      `}>
        <div className="text-white font-bold text-lg tracking-tight mr-4">ReCom</div>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="bg-[#007AFF] hover:bg-[#0066CC] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
          Связаться
        </button>
      </div>
    </motion.nav>
  );
}
