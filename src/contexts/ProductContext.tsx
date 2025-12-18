import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';

type Product = 'recuperator' | 'purifier';

interface ProductContextType {
  activeProduct: Product;
  setActiveProduct: (product: Product) => void;
  statsRef: React.RefObject<HTMLDivElement>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProduct, setActiveProductState] = useState<Product>('recuperator');

  // Scroll qilinadigan section uchun ref
  const statsRef = useRef<HTMLDivElement>(null);

  // setActiveProduct funksiyasi scroll bilan
  const setActiveProduct = (product: Product) => {
    setActiveProductState(product);

    // Smooth scroll biroz kechikish bilan
    setTimeout(() => {
      statsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <ProductContext.Provider value={{ activeProduct, setActiveProduct, statsRef }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
