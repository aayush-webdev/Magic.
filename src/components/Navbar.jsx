import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#work' },
    { name: 'Showcase', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[9900] transition-all duration-300 ${
          scrolled ? 'py-4 glass border-b border-liqueur/10' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-beige z-[9910] relative" style={{ fontFamily: 'var(--font-heading)' }}>
            Magic<span className="text-orange">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-liqueur/70 hover:text-orange transition-colors duration-300"
                data-hoverable="true"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-dark bg-beige hover:bg-orange hover:text-beige transition-all duration-300 tracking-wide"
              style={{ fontFamily: 'var(--font-heading)' }}
              data-hoverable="true"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-[9910] text-beige p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9800] bg-dark/95 flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-beige hover:text-orange transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-liqueur/40 text-sm mb-4">Get in touch</p>
              <a href="mailto:hello@magicstudio.com" className="text-orange text-lg font-medium">
                hello@magicstudio.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
