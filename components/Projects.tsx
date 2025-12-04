import React from 'react';
import ProjectCard from './ProjectCard';
import { SOLO_PROJECTS, COLLAB_PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* --- SOLO PROJECTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="flex items-center gap-6 mb-16">
             <div className="w-16 h-1 bg-gradient-to-r from-neon-purple via-neon-orange to-transparent"></div>
             <h2 className="font-display text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
               <span className="text-neon-purple">★</span> MAIN QUESTS <span className="text-neon-purple">★</span>
             </h2>
         </div>
        
        {/* Grid Layout - Headers removed as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {SOLO_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* --- OTHER PROJECTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-12">
             <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan via-neon-green to-transparent"></div>
             <h2 className="font-display text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
               <span className="text-neon-cyan">◆</span> SIDE QUESTS <span className="text-neon-cyan">◆</span>
             </h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COLLAB_PROJECTS.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative bg-dark-800/30 border border-white/5 p-8 hover:bg-dark-800/80 transition-all duration-300 tech-border-sm hover:border-neon-cyan/30 flex flex-col-reverse sm:flex-row gap-8 items-start"
                >
                    {/* Content (Left) */}
                    <div className="flex-grow w-full">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                {/* Index removed as requested */}
                                <h3 className="font-display text-2xl font-bold text-gray-200 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-neon-cyan/80 uppercase tracking-wider font-mono">
                                {project.category}
                            </span>
                        </div>

                        {/* Description - Whitespace Pre-Line handles \n */}
                        <p className="text-sm text-gray-400 font-mono mb-8 leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-2 py-1 bg-white/5 rounded-sm text-[10px] uppercase tracking-wider text-gray-400 border border-white/5 group-hover:border-white/20 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Icon Container (Right) - Only render if icon exists */}
                    {project.icon && (
                      <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 bg-black/50 border border-white/5 flex items-center justify-center p-4 rounded-sm tech-border-sm self-start sm:self-center">
                         <img 
                            src={project.icon} 
                            alt={`${project.title} icon`} 
                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            onError={(e) => {
                                // If icon fails to load, hide the container
                                const target = e.target as HTMLImageElement;
                                target.parentElement!.style.display = 'none';
                            }}
                         />
                      </div>
                    )}

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-neon-cyan transition-colors"></div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Projects;