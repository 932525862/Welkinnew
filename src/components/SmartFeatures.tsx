import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  Bell, 
  Mic, 
  Smartphone, 
  Wifi, 
  Calendar,
  Shield,
  Zap,
  Settings,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import productImage from '@/assets/recuperator4.png';

const smartIcons = [Clock, Bell, Mic, Smartphone, Wifi, Calendar, Shield, Zap, Settings, BarChart3];

export const SmartFeatures = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="smart" className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            {translations.smart?.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {translations.smart?.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/70 max-w-2xl mx-auto"
          >
            {translations.smart?.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Features */}
          <div className="space-y-4">
            {translations.smart?.features?.slice(0, 4).map((feature: { title: string; description: string }, index: number) => {
              const IconComponent = smartIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-primary-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              <img
                src={productImage}
                alt="Welkin Air Smart"
                className="relative w-full max-w-xs drop-shadow-2xl animate-float rounded-2xl"
              />

              {/* AI Badge */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground text-sm font-bold shadow-glow"
              >
                AI Powered
              </motion.div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-4">
            {translations.smart?.features?.slice(4, 8).map((feature: { title: string; description: string }, index: number) => {
              const IconComponent = smartIcons[index + 4];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-primary-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom AI Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-center text-primary-foreground/60 mb-6">{translations.smart?.integrations}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {translations.smart?.platforms?.map((platform: string, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-primary-foreground font-medium"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
