import { motion } from 'framer-motion';
import { Wind, Sparkles } from 'lucide-react';
import { useProduct } from '@/contexts/ProductContext';
import { useLanguage } from '@/contexts/LanguageContext';

export const ProductSelector = () => {
  const { activeProduct, setActiveProduct } = useProduct();
  const { t } = useLanguage();

  return (
    <section className="py-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {t('products.selectTitle')}
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          {/* Recuperator Card */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveProduct('recuperator')}
            className={`flex-1 p-5 rounded-2xl border-2 transition-all duration-300 ${
              activeProduct === 'recuperator'
                ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20'
                : 'bg-card border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                activeProduct === 'recuperator' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
              }`}>
                <Wind className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className={`font-display font-semibold text-lg ${
                  activeProduct === 'recuperator' ? 'text-primary' : 'text-foreground'
                }`}>
                  {t('products.recuperator.name')}
                </h3>
                <p className="text-sm text-muted-foreground">{t('products.recuperator.short')}</p>
              </div>
            </div>
          </motion.button>

          {/* Air Purifier Card */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveProduct('purifier')}
            className={`flex-1 p-5 rounded-2xl border-2 transition-all duration-300 ${
              activeProduct === 'purifier'
                ? 'bg-accent/10 border-accent shadow-lg shadow-accent/20'
                : 'bg-card border-border hover:border-accent/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                activeProduct === 'purifier' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-foreground'
              }`}>
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className={`font-display font-semibold text-lg ${
                  activeProduct === 'purifier' ? 'text-accent' : 'text-foreground'
                }`}>
                  {t('products.purifier.name')}
                </h3>
                <p className="text-sm text-muted-foreground">{t('products.purifier.short')}</p>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
