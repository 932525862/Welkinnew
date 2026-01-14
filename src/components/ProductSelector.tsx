import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gauge, Volume2, Wind } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProduct } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/baner 2.png";
import Havo from "@/assets/icon.png";
import Logo from "@/assets/logow.png";
import { useEffect } from "react";

export const ProductSelector = () => {
  const { t } = useLanguage();
  const { activeProduct, setActiveProduct, statsRef } = useProduct();

  // 🔥 SAYT OCHILGANDA BIRINCHI BO‘LIB PURIFIER AKTIV BO‘LADI
  useEffect(() => {
    setActiveProduct("purifier");

    setTimeout(() => {
      statsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  const stats = [
    { icon: Gauge, value: t("hero.stats.efficiency") },
    { icon: Sparkles, value: t("hero.stats.filtration") },
    { icon: Volume2, value: t("hero.stats.noise") },
  ];

  const handleSelectProduct = (product: "recuperator" | "purifier") => {
    setActiveProduct(product);

    setTimeout(() => {
      statsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section
      id="home"
      className="font-serif relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative pl-20 pt-32 pb-20 max-lg:pl-10 max-md:pl-4">
        <div className="max-w-3xl">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-4"
          >
            <div className="relative inline-block">
              <img className="w-50 h-24" src={Logo} alt="Welkin Air Logo" />
              <span className="absolute bottom-1 right-2 translate-x-[35px] w-5 h-5 bg-[#fec300] rounded-full"></span>
            </div>
          </motion.h1>

          <p className="text-white text-3xl mb-7">{t("hero.title2")}</p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Purifier */}
            <button
              onClick={() => handleSelectProduct("purifier")}
              className={`w-full sm:w-auto px-8 py-4 text-lg rounded-2xl font-semibold border-2 transition-all
                ${
                  activeProduct === "purifier"
                    ? "bg-[#fec300] text-primary-foreground border-[#fec300] shadow-lg"
                    : "bg-black/40 text-white border-white/20 hover:border-[#fec300]"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <img className="w-8 h-8" src={Havo} alt="welkin air" />
                {t("products.purifier.name")}
              </div>
            </button>

            {/* Recuperator */}
            <button
              onClick={() => handleSelectProduct("recuperator")}
              className={`w-full sm:w-auto px-8 py-4 text-lg rounded-2xl font-semibold border-2 transition-all
                ${
                  activeProduct === "recuperator"
                    ? "bg-[#fec300] text-primary-foreground border-[#fec300] shadow-lg"
                    : "bg-black/40 text-white border-white/20 hover:border-[#fec300]"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Wind className="w-6 h-6" />
                {t("products.recuperator.name")}
              </div>
            </button>
          </motion.div>

          {/* STATS */}
          <div ref={statsRef} className="mt-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white text-xl mb-4"
                >
                  <Icon className="w-6 h-6" />
                  {stat.value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
