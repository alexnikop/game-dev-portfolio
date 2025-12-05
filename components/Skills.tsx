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
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-neon-green/10 text-neon-green rounded tech-border-sm group-hover:bg-neon-green group-hover:text-dark-900 transition-colors duration-300 neon-glow-green flex-shrink-0">
                            {/* @ts-ignore */}
                            <IconComponent size={24} className={skill.icon === 'Unity' ? "fill-current" : ""} />
                        </div>
                        <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide group-hover:text-neon-green transition-colors">{skill.name}</h3>
                    </div>
                    
                    {/* Sub-skills list */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {skill.subSkills.map((subSkill) => (
                            <span 
                                key={subSkill}
                                className="px-2 py-1 bg-neon-green/5 border border-neon-green/20 rounded-sm text-[11px] text-gray-400 font-mono group-hover:border-neon-green/40 group-hover:text-gray-300 transition-colors"
                            >
                                {subSkill}
                            </span>
                        ))}
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