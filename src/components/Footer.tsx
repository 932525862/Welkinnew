import { Wind, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "../assets/welkinLogo.png"
export const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="font-serif bg-navy py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex items-center gap-4">
            
            <div>
              <h3 className="font-display text-xl font-bold text-primary-foreground">
               <img className='w-30 h-10' src={logo} alt="" />
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
              <span>+998 71 200 06 46</span>
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
