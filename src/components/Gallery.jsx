import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80',
    alt: 'Abstract gradient art',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80',
    alt: 'Colorful fluid design',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
    alt: 'Vibrant gradient',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80',
    alt: 'Artistic ink splash',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1604076913837-52ab5f0b3e1e?w=600&q=80',
    alt: 'Modern abstract texture',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80',
    alt: 'Cosmic abstract design',
    span: '',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Showcase
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Selected Work
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${image.span}`}
              data-hoverable="true"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-beige font-medium text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                    {image.alt}
                  </p>
                  <p className="text-liqueur/60 text-xs mt-1">View Project →</p>
                </div>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-orange/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
