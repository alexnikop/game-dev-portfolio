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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* HUD Decoration */}
        <div className="flex items-center gap-2 mb-6 opacity-80">
          <div className="h-[1px] w-8 md:w-24 bg-gradient-to-l from-neon-cyan to-transparent"></div>
          <div className="px-4 py-1 border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm tech-border-sm">
            <span className="text-neon-cyan text-xs md:text-sm tracking-[0.3em] font-mono">SYSTEM_READY</span>
          </div>
          <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-neon-cyan to-transparent"></div>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl uppercase relative">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">Building</span>
          <br />
          <span className="relative z-10 gradient-text">Worlds</span>
        </h1>
        
        <p className="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light font-mono leading-relaxed border-l-2 border-neon-purple/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          <span className="text-neon-purple">&gt;</span> {HERO_SUBTITLE}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a 
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="w-full sm:w-auto group relative px-8 py-4 bg-neon-purple text-white font-bold tracking-wider tech-border hover:bg-neon-purple/80 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1"
          >
             <div className="absolute top-0 right-0 p-1">
                 <div className="w-1 h-1 bg-white"></div>
             </div>
            <span className="relative z-10 flex items-center justify-center gap-2">
                <Code size={20} /> VIEW PROJECTS
            </span>
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="w-full sm:w-auto group px-8 py-4 border border-white/20 bg-dark-800/80 backdrop-blur-md text-white font-bold tracking-wider tech-border hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
                <Mail size={20} className="text-neon-cyan group-hover:text-white transition-colors" /> CONTACT ME
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-0 w-full flex justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-3 animate-bounce opacity-60">
            <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-gray-400">Scroll to Start</span>
            <ArrowDown className="text-neon-cyan w-6 h-6 md:w-8 md:h-8" />
          </div>
      </div>
    </section>
  );
};

export default Hero;