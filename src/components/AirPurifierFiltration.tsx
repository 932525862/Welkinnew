import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Leaf, 
  Bug, 
  Wind,
  Sparkles,
  Sun,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import filtersImage from '@/assets/air-purifier-filters.png';

const filterIcons = [Shield, Leaf, Bug, Wind, Sparkles, Sun, Zap];

export const AirPurifierFiltration = () => {
  const { t, translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filters = translations.purifier?.filtration?.filters || [];

  return (
    <section className="section-padding bg-gradient-to-b from-navy to-slate-900 text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4"
          >
            <Shield className="w-4 h-4" />
            {t('purifier.filtration.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {t('purifier.filtration.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/70 max-w-3xl mx-auto"
          >
            {t('purifier.filtration.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Filters Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              </div>
              
              <img
                src={filtersImage}
                alt="Multi-layer filtration system"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              />

              {/* Filter layers indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-green-500 to-accent rounded-full text-white font-semibold"
              >
                7 {t('purifier.filtration.layers')}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Filter Types */}
          <div className="space-y-4">
            {filters.map((filter: { title: string; description: string }, index: number) => {
              const IconComponent = filterIcons[index] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-accent/50 group-hover:to-green-500/50 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{filter.title}</h3>
                      <p className="text-sm text-primary-foreground/60 leading-relaxed">{filter.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '99%', label: t('purifier.filtration.stat1') },
            { value: '0.3μm', label: t('purifier.filtration.stat2') },
            { value: 'PM2.5', label: t('purifier.filtration.stat3') },
            { value: 'HEPA H13', label: t('purifier.filtration.stat4') },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
