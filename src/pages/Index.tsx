import { LanguageProvider } from '@/contexts/LanguageContext';
import { ProductProvider, useProduct } from '@/contexts/ProductContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Atmosphere } from '@/components/Atmosphere';
import { Benefits } from '@/components/Benefits';
import { Design } from '@/components/Design';
import { SmartFeatures } from '@/components/SmartFeatures';
import { Specifications } from '@/components/Specifications';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ProductSelector } from '@/components/ProductSelector';
import { AirPurifierHero } from '@/components/AirPurifierHero';
import { AirPurifierFiltration } from '@/components/AirPurifierFiltration';
import { AirPurifierFeatures } from '@/components/AirPurifierFeatures';
import { AirPurifierSpecs } from '@/components/AirPurifierSpecs';

const ProductContent = () => {
  const { activeProduct } = useProduct();

  if (activeProduct === 'purifier') {
    return (
      <>
        <AirPurifierHero />
        <Atmosphere />
        <AirPurifierFiltration />
        <AirPurifierFeatures />
        <AirPurifierSpecs />
      </>
    );
  }

  return (
    <>
      <Hero />
      <Atmosphere />
      <Benefits />
      <Design />
      <SmartFeatures />
      <Specifications />
    </>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <ProductProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <ProductSelector />
            <ProductContent />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </ProductProvider>
    </LanguageProvider>
  );
};

export default Index;
