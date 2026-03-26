import { motion } from 'framer-motion';

const services = [
  {
    title: 'Brand Identity',
    description:
      'Crafting unique visual identities that capture the essence of your brand and resonate with your target audience.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    accent: 'group-hover:shadow-orange/20',
  },
  {
    title: 'Web Development',
    description:
      'Building performant, responsive websites with cutting-edge technology and pixel-perfect attention to detail.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: 'group-hover:shadow-beige/20',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive interfaces and seamless user experiences that delight users and drive engagement.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    accent: 'group-hover:shadow-liqueur/20',
  },
  {
    title: 'Motion Design',
    description:
      'Creating captivating animations and micro-interactions that bring your digital products to life.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    accent: 'group-hover:shadow-orange/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Cards() {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-orange/3 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Our Services
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What We Do
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass group rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${service.accent} hover:border-orange/30`}
              data-hoverable="true"
            >
              <div className="text-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold text-beige mb-3 group-hover:text-orange transition-colors duration-300"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {service.title}
              </h3>
              <p className="text-liqueur/60 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-liqueur/40 group-hover:text-orange transition-colors duration-300 text-sm">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
