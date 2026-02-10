
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';
import { Product, CartItem } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#39FF14] selection:text-black">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <section id="productos" className="relative py-24 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#39FF14] opacity-[0.03] blur-[150px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#39FF14] opacity-[0.02] blur-[180px] rounded-full"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center tracking-tight">
              COLECCIÓN <span className="text-[#39FF14]">UNISEX</span>
            </h2>
            <ProductGrid products={PRODUCTS} onAddToCart={addToCart} />
          </div>
        </section>
      </main>

      <Footer />
      
      <CartPanel 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;
