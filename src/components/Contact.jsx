import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClass = (field) =>
    `w-full glass-light rounded-xl px-6 py-4 text-beige placeholder-liqueur/30 outline-none transition-all duration-300 ${
      focused === field
        ? 'border-orange/50 shadow-[0_0_20px_rgba(240,77,35,0.15)]'
        : 'border-liqueur/10'
    } border bg-transparent`;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-orange/3 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-orange uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Contact
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-beige mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's Work
              <br />
              <span className="text-liqueur">Together</span>
            </h2>
            <p className="text-liqueur/60 text-lg leading-relaxed mb-8">
              Have a project in mind? We'd love to hear about it. Drop us a
              message and let's create something extraordinary together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-liqueur/50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@magicstudio.com</span>
              </div>
              <div className="flex items-center gap-4 text-liqueur/50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 md:p-10 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className="text-liqueur/50 text-sm mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                placeholder="John Doe"
                className={inputClass('name')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-liqueur/50 text-sm mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                placeholder="john@example.com"
                className={inputClass('email')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-liqueur/50 text-sm mb-2 block">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                placeholder="Tell us about your project..."
                rows={5}
                className={`${inputClass('message')} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange hover:bg-orange-hover text-beige py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(240,77,35,0.3)] active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
