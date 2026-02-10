
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-[#1a1a1a] border border-white/5 p-4 rounded-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#39FF14]/30 hover:shadow-[0_10px_40px_rgba(57,255,20,0.1)]">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#2a2a2a] rounded-sm mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="w-full py-3 bg-[#39FF14] text-black font-bold text-xs tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart size={16} />
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-white font-medium text-sm tracking-wide group-hover:text-[#39FF14] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#39FF14] text-xl font-bold tracking-tight">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Inner Glow Detail */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#39FF14]/10 pointer-events-none rounded-sm transition-all duration-500"></div>
    </div>
  );
};

export default ProductCard;
