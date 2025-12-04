import React, { useState, useEffect } from 'react';
import { Command } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-dark-900/90 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Polished Logo Icon - Arcade Style */}
            <div className="relative">
                <div className="absolute inset-0 bg-neon-purple blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative p-2 bg-dark-900 border-2 border-neon-purple/50 tech-border-sm group-hover:border-neon-cyan group-hover:neon-glow-cyan transition-all z-10">
                    <Command className="w-6 h-6 text-neon-purple group-hover:text-neon-cyan transition-colors" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-neon-cyan/30 tech-border-sm -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            </div>

            <div className="flex flex-col -space-y-0.5">
              <span className="font-display font-bold text-xl tracking-widest text-white group-hover:text-neon-cyan transition-colors">
                ALEHOOLEO
              </span>
              <span className="text-[10px] text-neon-purple tracking-[0.3em] font-mono group-hover:text-neon-yellow transition-colors flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-neon-green animate-pulse"></span>
                GAME_DEV::ONLINE
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;