import {  
  CpuChipIcon, 
  BriefcaseIcon,
  UserIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  RectangleStackIcon,
  AcademicCapIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { projects } from './projects';

// Custom Brand Icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-zinc-400 font-sans p-4 md:p-8 selection:bg-sae-orange/30">
      
      {/* Top Navigation Bar - 3 Column Layout */}
      <nav className="w-full max-w-[1440px] mx-auto grid grid-cols-3 items-start mb-8 px-12 pb-16">
        {/* Column 1: Left */}
        <div className="flex justify-start">
          {/* Future slot for personal logo or version tag */}
        </div>

        {/* Column 2: Center (Status Indicator) */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-800/50 rounded-full border border-zinc-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sae-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sae-orange"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-300 font-bold">
              Summmer 2026 DelResearch Intern
            </span>
          </div>
        </div>

        {/* Column 3: Right (Socials) */}
        <div className="flex justify-end gap-6">
          <a href="https://github.com/QuinnYates29" target="_blank" rel="noreferrer">
            <GithubIcon className="w-5 h-5 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/in/quinnyates" target="_blank" rel="noreferrer">
            <LinkedinIcon className="w-5 h-5 hover:text-white transition-colors" />
          </a>
        </div>
      </nav>

      {/* MAIN INNER CONTAINER (#222222) */}
      <main className="max-w-[1440px] mx-auto bg-[#222222] rounded-[2.5rem] shadow-2xl border border-zinc-800/50 mt-10">
  
        {/* Header / Identity Section */}
        <header className="relative pt-16 pb-8 text-center border-b border-zinc-800/50">
  
          {/* Photo Container */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
            <img 
              src="./quinnyates.jpg"
              alt="Quinn Yates" 
              className="w-32 h-32 rounded-full border-4 border-[#121212] object-cover shadow-2xl" 
            />
          </div>

          {/* Name & Title */}
          <div className="mt-4">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-1">
              Quinn Yates
            </h1>
            <p className="text-sae-orange font-bold tracking-[0.3em] uppercase text-xs md:text-sm mt-2">
              CS Major / CSEC Minor
            </p>
          </div>
          
          {/* Contact Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 text-xs md:text-sm text-zinc-500 px-4">
            <span className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-sae-orange" /> quinnyates3229@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <GlobeAltIcon className="w-4 h-4 text-sae-orange" /> Rochester, NY
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: ABOUT & EXPERIENCE (4 cols) */}
          <aside className="lg:col-span-4 p-8 md:p-12 border-r border-zinc-800/50">
            
            <section className="">
              <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-6">
                <UserIcon className="w-5 h-5 text-sae-orange" /> About Me
              </h2>
              <p className="leading-relaxed text-zinc-400">
                Hello! I am a CS student at RIT with strong skills across various technologies as well as embedded experience through RIT Racing. 
                I am seeking a summer 2026 Co-op in software or embedded systems.
              </p>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50 mt-6 mb-6"></div>

            {/* EXPERIENCE */}
            <section className="">
              <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-6">
                <BriefcaseIcon className="w-5 h-5 text-sae-orange" /> Experience
              </h2>

              <div className="space-y-4">
                {/*Electronics Member*/}
                <div className="">
                  <div className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute w-2 h-2 bg-sae-orange rounded-full -left-[4.5px] top-2" />
                    <p className="text-xs text-zinc-500 font-bold uppercase">2024 - Present</p>
                    <h3 className="text-white font-bold mt-1">Electronics Member</h3>
                    <p className="text-sm text-sae-orange font-medium">Formula SAE Team</p>
                  </div>
                </div>

                {/*Volunteer Developer*/}
                <div className="">
                  <div className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute w-2 h-2 bg-sae-orange rounded-full -left-[4.5px] top-2" />
                    <p className="text-xs text-zinc-500 font-bold uppercase">2023-2024</p>
                    <h3 className="text-white font-bold mt-1">Volunteer Developer</h3>
                    <p className="text-sm text-sae-orange font-medium">Global Fishing Watch</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50 mt-6 mb-6"></div>

            {/* TECHNICAL SKILLS SECTION */}
            <section className="">
              <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-6">
                <RectangleStackIcon className="w-5 h-5 text-sae-orange" /> Skills
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Category: Languages */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-tighter mb-3">Core Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'Embedded C', 'Python', 'Java', 'TypeScript', "C"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded text-xs text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category: Tools & OS */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-tighter mb-3">Tools & Environment</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Linux', 'Vim', 'Git', 'Agile', 'Spring Boot', "JacCoCo", "SonarQube", "Valgrind"].map(tool => (
                      <span key={tool} className="px-2 py-1 bg-sae-orange/5 border border-sae-orange/20 rounded text-xs text-sae-orange">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category: Relevant Coursework */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-tighter mb-3">Academic Foundation</h3>
                  <ul className="grid grid-cols-2 gap-y-1 text-[11px] text-zinc-400">
                    <li>• Algorithms</li>
                    <li>• Discrete Math</li>
                    <li>• Software Eng</li>
                    <li>• CS Theory</li>
                    <li>• Linear Algebra</li>
                    <li>• Mechanics of Programming</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50 mt-6 mb-6"></div>
            
            {/* LEADERSHIP EXPERIENCE */}
            <section className="">
              <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-6">
                <AcademicCapIcon className="w-5 h-5 text-sae-orange" /> Leadership
              </h2>
              <div className="space-y-4">
              {/* SYSTEMS ADMIN - LK */}
                <div className="">
                  <div className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute w-2 h-2 bg-sae-orange rounded-full -left-[4.5px] top-2" />
                      <p className="text-xs text-zinc-500 font-bold uppercase">2024 - 2025</p>
                      <h3 className="text-white font-bold mt-1">Systems Administrator</h3>
                      <p className="text-sm text-sae-orange font-medium">Sigma Chi LK Fraternity</p>
                  </div>
                </div>

                {/* Tribune - LK */}
                <div className="">
                  <div className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute w-2 h-2 bg-sae-orange rounded-full -left-[4.5px] top-2" />
                    <p className="text-xs text-zinc-500 font-bold uppercase">2024 - 2025</p>
                    <h3 className="text-white font-bold mt-1">Alumni Relations Chairman</h3>
                    <p className="text-sm text-sae-orange font-medium">Sigma Chi LK Fraternity</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50 mt-6 mb-6"></div>

            <section>
              <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-4">
                <RocketLaunchIcon className="w-5 h-5 text-sae-orange" /> Hobbies/Interests
              </h2>
              <div className = "space-y-4 ">
                <div>
                  <ul className="grid grid-cols-2 gap-y-1 text-[12px] text-zinc-400">
                    <li>• Hockey </li>
                    <li>• Skiing </li>
                    <li>• Automotive Repair </li>
                    <li>• Personal Fitness </li>
                    <li>• Mountain Biking </li>
                    <li>• Projects </li>
                    <li>• Cars </li>
                  </ul>
                </div>
              </div>
            </section>

          </aside>

          <section className="lg:col-span-8 p-8 md:p-12 bg-black/20">
            <h2 className="text-white font-bold uppercase tracking-widest text-md flex items-center gap-2 mb-8">
              <CpuChipIcon className="w-6 h-6 text-sae-orange" /> Featured Projects
            </h2>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                // If Image exists, then it is a full card
                const hasImage = !!project.image;

                return (
                  <div 
                    key={index} 
                    className={`
                      bg-[#121212]/90 border border-zinc-800/50 rounded-2xl p-8 
                      flex flex-col backdrop-blur-md
                      shadow-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                      
                      transition-all duration-500 ease-out
                      hover:shadow-[0_0_30px_rgba(255,103,0,0.2)]
                      hover:border-sae-orange/40
                      hover:-translate-y-1
                      ${hasImage ? 'lg:col-span-2' : 'lg:col-span-1'}
                    `}
                  >
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
                          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full">
                            {project.image.map((img, i) => (
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
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                            {project.image.map((_, i) => (
                              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30 border border-black/20" />
                            ))}
                          </div>
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
              })}
            </div>
            
          </section>
        </div>
      </main>

      <footer className="mt-12 text-center text-zinc-600 text-xs tracking-widest uppercase pb-8">
        © 2026 Quinn Yates — Built with React & Tailwind v4
      </footer>
    </div>
  );
}

export default App;