
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#39FF14]/10 py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tighter text-white">
            STYLE <span className="text-[#39FF14]">UP</span>
          </h2>
        </div>

        <div className="flex gap-8 mb-12">
          <a href="#" className="text-white/60 hover:text-[#39FF14] transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-[#39FF14] transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-[#39FF14] transition-colors">
            <Facebook size={24} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
        </div>

        <div className="text-center">
          <p className="text-white/40 text-xs tracking-widest font-medium uppercase">
            &copy; 2026 STYLE UP COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
