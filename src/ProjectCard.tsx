import { useRef, useState } from 'react';

// Define what a "Project" looks like for TypeScript
interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      setActiveIndex(Math.round(scrollLeft / offsetWidth));
    }
  };

  // If Image exists, then it is a full card
  const hasImage = !!project.image;

  return (
      <div  className={`
          bg-[#121212]/90 border border-zinc-800/50 rounded-2xl p-8 
          flex flex-col backdrop-blur-md
          shadow-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          
          transition-all duration-500 ease-out
          hover:shadow-[0_0_30px_rgba(255,103,0,0.2)]
          hover:border-sae-orange/40
          hover:-translate-y-1
          ${hasImage ? 'lg:col-span-2' : 'lg:col-span-1'}
        `}>
            {hasImage ? (
                /* Large, 2 column project card */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col justify-start">
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 tracking-tighter">{t}</span>
                    ))}
                    </div>
                </div>
                <div className="aspect-video bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden shadow-inner relative group/carousel">
                    {/* Scroll Container */}
                    <div 
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full">
                    {project.image?.map((img, i) => (
                        <div key={i} className="flex-none w-full h-full snap-center">
                        <img 
                            src={img} 
                            alt={`${project.title} screenshot ${i}`} 
                            className="w-full h-full object-cover" 
                        />
                        </div>
                    ))}
                    </div>

                    {/* Visual Indicator (Dots) */}
                    {project.image && project.image.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                            {project.image?.map((_, i) => (
                                <div 
                                key={i} 
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeIndex === i 
                                    ? 'bg-sae-orange w-4' // Active: Orange and Wide
                                    : 'bg-white/30 w-1.5' // Inactive: Small and Dim
                                }`} 
                            />
                            ))}
                        </div>
                    )}  
                    </div>
                </div>
            ) : (
                /* Smaller, 1 column project card */
                <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 tracking-tighter">{t}</span>
                    ))}
                </div>
          </div>
            )}

            {/* Github Button (if exists) */}
            {project.github && (
                <a 
                href={project.github} 
                target="_blank" 
                className="mt-8 w-full bg-sae-orange/10 border border-sae-orange/20 text-sae-orange py-3 rounded-xl text-center text-sm font-bold hover:bg-sae-orange hover:text-black transition-all shadow-[0_0_20px_rgba(255,103,0,0.09)]"
                >
                View Project
                </a>
            )}
      </div>
  );
}