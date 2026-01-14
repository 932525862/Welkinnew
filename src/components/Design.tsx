import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Home, Building2, Award, Sparkles, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import productImage from '@/assets/recuperator4.png';

const designFeatures = [
  { icon: Palette, key: 0 },
  { icon: Home, key: 1 },
  { icon: Building2, key: 2 },
  { icon: Layers, key: 3 },
  { icon: Award, key: 4 },
  { icon: Sparkles, key: 5 },
];

export const Design = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="design" className="font-serif section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#fec300] rounded-full text-[#000000] text-sm font-medium mb-4"
          >
            {translations.design?.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {translations.design?.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {translations.design?.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-navy/90 to-navy rounded-3xl p-8 overflow-hidden">
              {/* Ambient light effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-40 h-40 bg-sky-light/20 rounded-full blur-3xl" />
              </div>
              
              <img
                src={productImage}
                alt="Welkin Air Design"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
              />
              
              {/* Premium badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-[#fec300] to-[#fec300] rounded-full text-white text-sm font-semibold flex items-center gap-2"
              >
                <Award className="w-4 h-4 " />
                Premium
              </motion.div>
            </div>
          </motion.div>

          {/* Design Features */}
          <div className="space-y-6">
            {translations.design?.features?.map((feature: { title: string; description: string }, index: number) => {
              const IconComponent = designFeatures[index]?.icon || Sparkles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#fec300] rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#000000] " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-display text-foreground/80 italic max-w-3xl mx-auto">
            "{translations.design?.quote}"
          </blockquote>
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
    </section>
  );
};
