import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gauge, Volume2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import Logo from "@/assets/logow.png";
export const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Gauge, value: t("hero.stats.efficiency") },
    { icon: Sparkles, value: t("hero.stats.filtration") },
    { icon: Volume2, value: t("hero.stats.noise") },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Welkin Air Recuperator"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative pl-20 pt-32 pb-20 max-lg:pl-10 max-md:pl-4 max-lg:mt-20 max-md:pt-2">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#fec300]/6 backdrop-blur-sm rounded-full border border-primary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#fec300]" />
            <span className="text-sm font-medium text-primary-foreground">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4"
          >
            <div className="relative inline-block">
              <img className="w-50 h-24" src={Logo} alt="Welkin Air Logo" />
              <span className="absolute bottom-1 right-2 translate-x-[35px] w-5 h-5 bg-[#fec300] rounded-full"></span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl md:text-3xl font-semibold text-[#fec300] mb-6"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
              >
                <stat.icon className="w-5 h-5 text-[#fec300]" />
                <span className="text-sm font-medium text-primary-foreground">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="btn-primary  text-[#000000] bg-[#fec300] rounded-xl px-8 py-6 text-lg font-display font-semibold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/* <Button
              // variant="outline"
              size="lg"
              className="rounded-xl px-8 py-6 text-lg font-display font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaSecondary')}
            </Button> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
