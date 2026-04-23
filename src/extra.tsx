<div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-[#121212] border border-zinc-800/50 rounded-2xl p-8 flex flex-col hover:border-sae-orange/50 transition-all group">
                  {/* INNER GRID */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-8">
                    
                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-sae-orange transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 uppercase tracking-tighter">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* IMAGE CONTAINER */}
                    {project.image && (
                      <div className="aspect-video bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden shadow-inner flex justify-center">
                          <img 
                            src={project.image || "/images/placeholder.png"} 
                            alt={`${project.title} Preview`} 
                            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" 
                          />
                      </div>
                    )}

                  </div> {/* End Inner Grid */}

                  {/* FULL-WIDTH BUTTON */}
                  {project.github && (
                    <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full bg-sae-orange/10 border border-sae-orange/20 text-sae-orange py-3 rounded-xl text-center text-sm font-bold hover:bg-sae-orange hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    View Project <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  )}
                </div>
              ))}
            </div>