
import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#0a0a0a]/95 backdrop-blur-2xl z-[101] shadow-2xl transition-transform duration-500 ease-in-out border-l border-[#39FF14]/20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <h2 className="text-2xl font-bold tracking-tight">TU CARRITO</h2>
            <button 
              onClick={onClose}
              className="p-2 text-white/60 hover:text-[#39FF14] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center opacity-40">
                <ShoppingBag size={64} className="mb-4" />
                <p className="text-lg font-medium tracking-widest uppercase">Tu carrito está vacío</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-32 flex-shrink-0 bg-[#1a1a1a] overflow-hidden rounded-sm border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold tracking-wide text-white uppercase">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/10 rounded-sm"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[#39FF14] font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-white/10 rounded-sm overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-[#39FF14]/10 hover:text-[#39FF14] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-bold border-x border-white/10">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-[#39FF14]/10 hover:text-[#39FF14] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 bg-[#121212] border-t border-white/10 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-white/60 text-sm tracking-widest font-medium uppercase">Total estimado</span>
              <span className="text-3xl font-bold text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            
            <button 
              disabled={items.length === 0}
              className="w-full py-4 bg-[#39FF14] text-black font-bold tracking-[0.2em] shadow-[0_4px_20px_rgba(57,255,20,0.25)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.4)] hover:bg-[#2ecc11] transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
