import { Wind, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-navy py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Wind className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                Welkin <span className="text-primary">Air</span>
              </h3>
              <p className="text-sm text-primary-foreground/60">
                {translations.footer.description}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="tel:+998901234567" 
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+998 90 123 45 67</span>
            </a>
            <a 
              href="mailto:info@welkinair.uz" 
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@welkinair.uz</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Welkin Air. {translations.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
