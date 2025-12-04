import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { SOCIALS } from '../constants';

const EMAIL = 'alehooleo@gmail.com';

const Footer: React.FC = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 border-t border-white/10 bg-dark-900/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase leading-none">
                    Mission<br/>Complete?
                </h2>
                <p className="text-gray-400 font-mono max-w-md text-lg">
                    Not yet. I'm currently scouting for new quests and co-op opportunities. 
                </p>
            </div>
            
            <div className="flex flex-col justify-center">
                 {/* Email Box with Improved Layering */}
                 <div className="relative group w-full max-w-md mx-auto md:mx-0">
                    {/* Outer Border Layer */}
                    <div className="absolute inset-0 bg-white/10 tech-border group-hover:bg-neon-cyan transition-colors duration-300"></div>
                    
                    {/* Inner Content Layer (Gap creates border effect) */}
                    <div className="absolute inset-[2px] bg-dark-900 tech-border z-10"></div>

                    {/* Actual Content */}
                    <div className="relative z-20 p-8 flex flex-col items-center justify-center">
                        <div className="absolute -top-2.5 left-8 bg-dark-900 px-2 text-neon-cyan text-xs font-mono tracking-widest z-30">
                            CONTACT_CHANNEL
                        </div>
                        <button 
                          onClick={handleCopyEmail}
                          className="block text-xl sm:text-2xl md:text-3xl font-display font-bold text-white hover:text-neon-cyan transition-colors text-center break-all cursor-pointer bg-transparent border-none"
                        >
                            {EMAIL}
                        </button>
                        <span className="text-xs text-gray-500 font-mono mt-2">Click to copy</span>
                        
                        {/* Copied Toast Popup */}
                        <div 
                          className={`absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-neon-green text-dark-900 font-mono text-sm font-bold tracking-wider tech-border-sm transition-all duration-300 flex items-center gap-2 ${
                            showCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}
                        >
                          <Icons.Check size={16} />
                          EMAIL COPIED!
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
            <div className="flex gap-4 mb-6 md:mb-0">
            {SOCIALS.map((social) => {
                // @ts-ignore
                const IconComponent = Icons[social.icon] || Icons.Link;
                return (
                <a
                    key={social.platform}
                    href={social.url}
                    className="group relative p-3 bg-dark-800 border border-white/10 tech-border-sm hover:bg-neon-purple hover:border-neon-purple transition-all duration-300"
                    aria-label={social.platform}
                >
                    <IconComponent size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                )
            })}
            </div>

            <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-4">
                <span>© {new Date().getFullYear()} Alex Vector</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>All Rights Reserved</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;