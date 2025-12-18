import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = 'recuperator' | 'purifier';

interface ProductContextType {
  activeProduct: Product;
  setActiveProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState<Product>('recuperator');

  return (
    <ProductContext.Provider value={{ activeProduct, setActiveProduct }}>
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
