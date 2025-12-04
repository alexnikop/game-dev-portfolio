import React from 'react';
import { ArrowDown, Code, Mail } from 'lucide-react';
import { HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden pt-28 sm:pt-24 md:pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Animated Glow Orbs - More vibrant */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-cyan/25 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-neon-orange/15 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content - Centered with flex-grow */}
      <div className="relative z-10 flex-grow flex items-center justify-center mb-16 sm:mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* HUD Decoration - Arcade Style */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-8 md:w-24 bg-gradient-to-l from-neon-cyan via-neon-purple to-transparent"></div>
            <div className="px-4 py-2 border-2 border-neon-cyan bg-neon-cyan/10 backdrop-blur-sm tech-border-sm neon-glow-cyan animate-flicker">
              <span className="text-neon-cyan text-xs md:text-sm tracking-[0.3em] font-mono font-bold">▶ PLAYER_1_READY</span>
            </div>
            <div className="h-[2px] w-8 md:w-24 bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent"></div>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl uppercase relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">Bending</span>
            <br />
            <span className="relative z-10 gradient-text glitch-text" data-text="Worlds">Rules</span>
          </h1>
          
          <p className="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light font-mono leading-relaxed border-l-2 border-neon-purple/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            <span className="text-neon-purple">&gt;</span> {HERO_SUBTITLE}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a 
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="w-full sm:w-auto group relative px-8 py-4 bg-neon-purple text-white font-bold tracking-wider tech-border arcade-btn neon-glow-pink hover:bg-neon-purple/90 transition-all duration-300"
            >
               <div className="absolute top-0 right-0 p-1">
                   <div className="w-2 h-2 bg-neon-cyan animate-pulse"></div>
               </div>
               <div className="absolute bottom-0 left-0 p-1">
                   <div className="w-2 h-2 bg-neon-yellow animate-pulse" style={{ animationDelay: '0.5s' }}></div>
               </div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                  <Code size={20} /> VIEW PROJECTS
              </span>
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="w-full sm:w-auto group px-8 py-4 border-2 border-neon-cyan/50 bg-dark-800/80 backdrop-blur-md text-white font-bold tracking-wider tech-border arcade-btn hover:border-neon-cyan hover:bg-neon-cyan/20 hover:neon-glow-cyan transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                  <Mail size={20} className="text-neon-cyan group-hover:text-neon-yellow transition-colors" /> CONTACT ME
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Part of content flow, always at bottom with min spacing */}
      <div className="flex relative z-20 justify-center pointer-events-none flex-shrink-0">
          <div className="flex flex-col items-center gap-2 sm:gap-3 animate-bounce">
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-neon-yellow animate-flicker">SCROLL</span>
            <ArrowDown className="text-neon-cyan w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ filter: 'drop-shadow(0 0 8px #00fff5)' }} />
          </div>
      </div>
    </section>
  );
};

export default Hero;