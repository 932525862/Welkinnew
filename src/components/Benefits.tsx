import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Filter,
  Building2,
  Zap,
  Gauge,
  Fan,
  Smartphone,
  Activity,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = [
  Filter,
  Building2,
  Zap,
  Gauge,
  Fan,
  Smartphone,
  Activity,
  Wrench,
];

export const Benefits = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="font-serif section-padding relative overflow-hidden bg-navy"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            {translations.benefits.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-primary-foreground/70"
          >
            {translations.benefits.subtitle}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {translations.benefits.items.map(
            (item: { title: string; description: string }, index: number) => {
              const Icon = iconMap[index] ?? Filter; // default icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5
                    bg-[#fec300] group-hover:scale-110 
                    transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Single Contact Button under all items */}
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
