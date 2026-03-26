import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(240,77,35,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(214,195,163,0.05) 0%, transparent 50%), #161415',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-liqueur/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className="text-liqueur/70 uppercase tracking-[0.3em] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium Brand Experience
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-beige">We Craft</span>
            <br />
            <span className="text-orange">Digital</span>
            <br />
            <span className="text-beige">Experiences</span>
          </motion.h1>

          <motion.p
            className="text-liqueur/60 text-lg md:text-xl max-w-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Elevating brands through thoughtful design, bold creativity, and
            seamless digital craftsmanship.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full text-beige font-medium tracking-wide hover:bg-beige/10 transition-all duration-300 group"
            >
              Get In Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-full text-liqueur/70 font-medium tracking-wide border border-liqueur/20 hover:border-orange/50 hover:text-orange transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-liqueur/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-liqueur/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
