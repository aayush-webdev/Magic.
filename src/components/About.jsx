import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-80 md:h-80 rounded-full bg-orange/3 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-orange uppercase tracking-[0.3em] text-sm font-medium mb-4">
              About Us
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Building the
              <br />
              <span className="text-liqueur">Future of Design</span>
            </h2>

            <div className="glass rounded-2xl p-8">
              <p className="text-liqueur/70 leading-relaxed mb-4 text-base md:text-lg">
                We are a creative studio dedicated to building remarkable digital
                experiences. With a passion for design and technology, we help
                brands stand out in an increasingly crowded digital landscape.
              </p>
              <p className="text-liqueur/70 leading-relaxed text-base md:text-lg">
                Our approach combines strategic thinking with artistic execution,
                delivering products that not only look stunning but also drive
                measurable results for our clients.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-liqueur/10">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-orange" style={{ fontFamily: 'var(--font-heading)' }}>
                    50+
                  </p>
                  <p className="text-liqueur/50 text-sm mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-beige" style={{ fontFamily: 'var(--font-heading)' }}>
                    8+
                  </p>
                  <p className="text-liqueur/50 text-sm mt-1">Years</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-liqueur" style={{ fontFamily: 'var(--font-heading)' }}>
                    30+
                  </p>
                  <p className="text-liqueur/50 text-sm mt-1">Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                alt="Abstract creative design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Floating glass card */}
            <div className="glass absolute -bottom-6 -left-6 rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange animate-pulse" />
              <p className="text-beige text-sm font-medium">Available for projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
