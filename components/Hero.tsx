
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#39FF14]/10 via-transparent to-black pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-6 inline-block">
          <span className="px-4 py-1.5 border border-[#39FF14] text-[#39FF14] text-xs font-bold tracking-[0.2em] uppercase pulse-glow rounded-sm">
            15% OFF HASTA 12/2/26
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          TU ESTILO <br className="hidden md:block" />
          <span className="text-[#39FF14]">DESPEGA</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-[#39FF14] text-black font-bold tracking-widest hover:bg-[#2ecc11] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] rounded-sm"
          >
            COMPRA AHORA
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.3em] font-medium text-[#39FF14]">SCROLL</span>
        <ChevronDown size={20} className="text-[#39FF14]" />
      </div>

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </section>
  );
};

export default Hero;
