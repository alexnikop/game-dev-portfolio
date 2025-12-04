import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants';

const UnityIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.764 1.127L4.316 6.32l1.65 6.438 5.798 2.652 5.798-2.652 1.65-6.438-7.448-5.193zM12 13.91l-4.796-2.193-1.092-4.26L12 3.88l5.888 3.576-1.092 4.26L12 13.91z"/>
    <path d="M19.742 8.303l-1.353 5.278 4.295 2.147v-4.59l-2.942-2.835z"/>
    <path d="M4.258 8.303L1.316 11.138v4.59l4.295-2.147-1.353-5.278z"/>
    <path d="M12 16.502l-4.945-2.26L5.808 19.34 12 22.873l6.192-3.533-1.247-5.097L12 16.502z"/>
  </svg>
);

const BlenderIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v18" />
      <path d="M5 9l14 6" />
      <path d="M5 15l14-6" />
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    </svg>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-0 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-end mb-16">
             <div className="flex items-center gap-6">
                 <h2 className="font-display text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
                   <span className="text-neon-green">⚡</span> SKILL TREE <span className="text-neon-green">⚡</span>
                 </h2>
                 <div className="w-16 h-1 bg-gradient-to-r from-neon-green via-neon-yellow to-transparent"></div>
             </div>
             <div className="text-xs font-mono text-neon-green/60 mt-2 tracking-widest">LVL 99 • XP: 999,999</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => {
            let IconComponent;
            if (skill.icon === 'Unity') {
                IconComponent = UnityIcon;
            } else if (skill.icon === 'Blender') {
                IconComponent = BlenderIcon;
            } else {
                // @ts-ignore
                IconComponent = LucideIcons[skill.icon] || LucideIcons.Code;
            }

            return (
              <div 
                key={skill.name}
                className="group relative bg-dark-800/40 backdrop-blur-md p-1 tech-border border border-white/5 hover:border-neon-green/50 transition-all duration-300 hover:bg-dark-800/60"
              >
                <div className="h-full p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-neon-green/10 text-neon-green rounded tech-border-sm group-hover:bg-neon-green group-hover:text-dark-900 transition-colors duration-300 neon-glow-green">
                            {/* @ts-ignore */}
                            <IconComponent size={24} className={skill.icon === 'Unity' ? "fill-current" : ""} />
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-2xl font-bold text-neon-yellow group-hover:text-white transition-colors">
                              {skill.level}<span className="text-xs align-top text-neon-orange">%</span>
                          </span>
                          <div className="text-[10px] font-mono text-gray-500">MASTERY</div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide mb-2">{skill.name}</h3>
                    
                    {/* Progress Bar styled as XP bar */}
                    <div className="w-full h-3 bg-black/70 mt-auto relative overflow-hidden skew-x-[-20deg] border border-neon-green/30">
                        <div 
                            className="h-full xp-bar group-hover:shadow-[0_0_15px_rgba(57,255,20,0.7)] transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                        {/* Grid lines on bar */}
                        <div className="absolute inset-0 flex justify-between px-1">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-[1px] h-full bg-black/50"></div>
                            ))}
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2"></div>
                    </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;