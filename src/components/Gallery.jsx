import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1678854575668-3a7e3c50d621?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb29rZXIlMjBTdHVkaW8lMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjQ1NjIwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Looker Studio dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Power BI visualization',
  },
  {
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Attribution model view',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight"
        >
          Dashboard Gallery
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <img src={img.src} alt={img.alt} className="h-48 w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white/80">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
