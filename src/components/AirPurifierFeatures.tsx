import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Timer,
  Bell,
  Smartphone,
  Wifi,
  Moon,
  Lock,
  Zap,
  Sun,
  Activity,
  Gauge
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import purifierImage from '@/assets/hhh.webp';

const featureIcons = [Timer, Bell, Smartphone, Wifi, Moon, Lock, Zap, Sun, Activity, Gauge];

export const AirPurifierFeatures = () => {
  const { t, translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = translations.purifier?.features?.items || [];

  return (
    <section id='smart' className="section-padding bg-secondary/30 relative overflow-hidden font-serif">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#fec300] rounded-full text-[#000000] text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4 text-[#000000]" />
            {t('purifier.features.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {t('purifier.features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('purifier.features.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Features */}
          <div className="space-y-4">
            {features.slice(0, 4).map((feature: { title: string; description: string }, index: number) => {
              const IconComponent = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#fec300] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#000000]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
              
              <img
                src={purifierImage}
                alt="Air Purifier Features"
                className="relative w-full max-w-sm drop-shadow-2xl animate-float"
              />

              {/* Smart Badge */}
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
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#fec300] from-accent to-green-500 rounded-full text-[#000000] text-sm font-bold shadow-glow"
              >
                Smart Life App
              </motion.div>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-4">
            {features.slice(4, 8).map((feature: { title: string; description: string }, index: number) => {
              const IconComponent = featureIcons[index + 4];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#fec300] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#000000]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
          
        {/* App Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">{t('purifier.features.appInfo')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Android', 'iOS', 'Smart Life', 'Wi-Fi 2.4GHz'].map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 bg-card border border-border rounded-full text-foreground font-medium"
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
