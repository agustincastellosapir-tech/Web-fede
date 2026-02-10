
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'CARRITO', onClick: onCartOpen },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-[#39FF14]/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <h1 className="text-2xl font-bold tracking-tighter text-white">
            STYLE <span className="text-[#39FF14]">UP</span>
          </h1>
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#39FF14] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_8px_#39FF14]"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.onClick ? link.onClick() : (window.location.href = link.href)}
              className="text-sm font-medium tracking-widest text-white/70 hover:text-[#39FF14] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={onCartOpen}
            className="relative p-2 text-white hover:text-[#39FF14] transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#39FF14] text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-[0_0_10px_#39FF14]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={onCartOpen} className="relative p-2">
            <ShoppingCart size={22} className="text-[#39FF14]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#39FF14] text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#39FF14]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#39FF14]/20 py-8 px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.onClick ? link.onClick() : (window.location.href = link.href);
                setMobileMenuOpen(false);
              }}
              className="text-lg font-semibold tracking-widest text-white hover:text-[#39FF14] text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
