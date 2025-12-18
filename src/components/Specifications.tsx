import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import productImage from '@/assets/recuperator3.png';

export const Specifications = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specs" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            {translations.specs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground"
          >
            {translations.specs.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product Image - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={productImage}
                alt="Welkin Air Recuperator"
                className="w-full max-w-xl rounded-2xl shadow-2xl shadow-slate-300/30"
              />
              {/* Simple badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-primary rounded-full text-primary-foreground text-xs font-semibold">
                82%
              </div>
            </div>
          </motion.div>

          {/* Specifications Grid - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {translations.specs.items.map((item: { label: string; value: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
