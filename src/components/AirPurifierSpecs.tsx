import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import purifierImage from '@/assets/K-08A.png';

export const AirPurifierSpecs = () => {
  const { translations, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specs = translations.purifier?.specs?.items || [];

  return (
    <section id='specs' className="section-padding bg-background relative overflow-hidden">
      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            {t('purifier.specs.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground"
          >
            {t('purifier.specs.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <img
                src={purifierImage}
                alt="K-08A"
                className="relative w-full max-w-md rounded-2xl shadow-2xl"
              />
              {/* Badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-[#fec300] rounded-full text-accent-foreground text-xs font-semibold">
                99%
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 bg-[#fec300] rounded-full text-white text-xs font-semibold">
                HEPA H13
              </div>
            </div>
          </motion.div>

          {/* Specifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {specs.map((item: { label: string; value: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

           <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[#fec300] text-black font-semibold 
            rounded-2xl shadow-lg hover:bg-[#e6b000] hover:scale-105 
            transition-all duration-300 inline-block"
          >
            {translations.atmosphere.button}
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
