import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Heart, Home, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Atmosphere = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const icons = [Home, Building, Heart];

  return (
    <section className="section-padding bg-gradient-sky relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {translations.atmosphere.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12"
          >
            {translations.atmosphere.description}
          </motion.p>

          {/* Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {translations.atmosphere.points.map((point: string, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:shadow-card transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{point}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-4 bg-fresh/10 border border-fresh/20 rounded-2xl"
          >
            <div className="w-10 h-10 bg-fresh rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground text-left">
              {translations.atmosphere.conclusion}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
