import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, ImageOff } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(true);
  };

  return (
    <div className="group relative bg-dark-800/50 tech-border border border-white/10 hover:border-neon-purple/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      {/* Hover Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg -z-10"></div>

      {/* Media Container */}
      <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-black">
        {isPlaying && project.videoUrl ? (
          <video 
            src={project.videoUrl} 
            className="w-full h-full object-cover"
            autoPlay 
            controls 
            loop
            muted={false}
          />
        ) : (
          <>
            {imageError ? (
               <div className="w-full h-full flex flex-col items-center justify-center bg-dark-900 text-gray-600">
                  <ImageOff size={48} className="mb-2 opacity-50" />
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50">Image Missing</span>
               </div>
            ) : (
                <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                onError={() => setImageError(true)}
                />
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-60 pointer-events-none"></div>
          </>
        )}
        
        {/* Overlay Actions (Only visible if not playing video) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
            {project.videoUrl && (
                <button 
                    onClick={handlePlayClick}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-neon-purple text-white font-bold tracking-wider tech-border-sm hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg shadow-neon-purple/20"
                >
                    <Play size={16} fill="currentColor" /> PLAY CLIP
                </button>
            )}
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-neon-cyan/30 tech-border-sm pointer-events-none">
            <span className="text-neon-cyan text-[10px] font-mono tracking-widest uppercase">
              {project.category}
            </span>
        </div>

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border tech-border-sm pointer-events-none ${project.status === 'prototype' ? 'border-yellow-500/50 text-yellow-500' : 'border-green-500/50 text-green-500'}`}>
            <span className="text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
               <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'prototype' ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
               {project.status === 'prototype' ? 'WIP / PROTOTYPE' : 'RELEASED'}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-display font-bold text-white group-hover:text-neon-purple transition-colors">
            {project.title}
          </h3>
          {/* Reset button if video is playing */}
          {isPlaying && (
              <button 
                onClick={() => setIsPlaying(false)}
                className="text-gray-500 hover:text-white transition-colors p-1"
                title="Stop Preview"
              >
                  <RotateCcw size={20} />
              </button>
          )}
        </div>

        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-neon-cyan/50 transition-colors flex-grow">
          {project.description}
        </p>

        <div className="flex flex-col gap-6 mt-auto">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
                <span 
                key={tech} 
                className="px-2 py-1 bg-white/5 rounded-sm text-[10px] uppercase tracking-wider text-gray-300 border border-white/5 group-hover:border-white/20 transition-colors"
                >
                {tech}
                </span>
            ))}
            </div>

            {/* Action Footer - Always render to maintain height consistency */}
            <div className="pt-4 border-t border-white/5 flex justify-end min-h-[3.5rem] items-center">
                {project.link && (
                     <a 
                        href={project.link} 
                        className="group/btn flex items-center gap-2 text-sm font-bold text-neon-cyan hover:text-white transition-colors tracking-widest uppercase"
                    >
                        VIEW PROJECT <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;