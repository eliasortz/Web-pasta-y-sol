import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(250, 247, 242, 0)', 'rgba(250, 247, 242, 0.95)']
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['#3D3A35', '#3D3A35']
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(212, 163, 115, 0)', '1px solid rgba(212, 163, 115, 0.1)']
  );

  const navLinks = [
    { name: 'Carta', href: '#menu' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Reservas', href: '#reservations' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, color: textColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-16 h-24 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">Pasta y Sol</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 font-sans font-medium text-xs tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent"
              whileHover={{ y: -1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ backgroundColor: '#3D3A35', color: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-primary transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Reservar
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-paper overflow-hidden flex flex-col items-center justify-center gap-8 text-primary"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-serif text-3xl hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button className="bg-accent text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase mt-4">
          Hacer una Reserva
        </button>
      </motion.div>
    </motion.nav>
  );
}
