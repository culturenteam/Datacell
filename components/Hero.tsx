import React from 'react';
import { ArrowRight, Terminal, Cpu, Network, BoxSelect } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
         <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-sm mb-8">
                <div className="w-2 h-2 bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">System Operational</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter mb-8 font-mono leading-none">
              SELF<br/>ORGANIZING<br/>INTELLIGENCE
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
              We architect the substrate for autonomous digital organisms. Datacell is the venture lab for self-replicating infrastructure and algorithmic evolution.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-slate-900 text-white border-2 border-slate-900 px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                Deploy Nodes
              </button>
              <button className="bg-transparent border-2 border-slate-200 text-slate-700 px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:border-slate-900 hover:text-slate-900 transition-colors flex items-center gap-2">
                View Source
                <ArrowRight size={16} />
              </button>
            </div>
        </div>

        {/* Pixel/Schematic Visual */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] bg-slate-900 border-2 border-slate-900 p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            {/* Inner Frame */}
            <div className="w-full h-full bg-slate-800 relative overflow-hidden flex flex-col">
                {/* Terminal Header */}
                <div className="h-8 bg-slate-900 flex items-center px-4 justify-between border-b border-slate-700">
                    <span className="text-xs font-mono text-slate-400">./simulation_viewer.exe</span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                    </div>
                </div>
                
                {/* Main Viewport */}
                <div className="flex-1 relative p-4">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    {/* Pixel Objects */}
                    <div className="absolute top-12 left-12">
                        <div className="flex gap-1 mb-1">
                            <div className="w-5 h-5 bg-emerald-500"></div>
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-emerald-500"></div>
                        </div>
                        <div className="flex gap-1 mb-1">
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-emerald-500"></div>
                            <div className="w-5 h-5 bg-emerald-500"></div>
                        </div>
                        <div className="flex gap-1 mb-1">
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-emerald-500"></div>
                            <div className="w-5 h-5 bg-transparent"></div>
                            <div className="w-5 h-5 bg-emerald-500"></div>
                        </div>
                        
                        {/* Connecting Lines */}
                        <div className="absolute -right-20 top-10 w-20 h-0.5 bg-emerald-500/50"></div>
                        <div className="absolute -right-24 top-8 px-2 py-1 bg-slate-900 border border-emerald-500 text-[10px] font-mono text-emerald-500">
                            Cluster_A
                        </div>
                    </div>

                     <div className="absolute bottom-20 right-12">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-transparent border border-amber-500/50"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                            <div className="w-5 h-5 bg-amber-500"></div>
                        </div>
                         <div className="absolute -left-24 top-8 px-2 py-1 bg-slate-900 border border-amber-500 text-[10px] font-mono text-amber-500">
                            Memory_Block
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Cpu className="text-slate-700 w-32 h-32 opacity-20" strokeWidth={1} />
                    </div>
                </div>
                
                {/* Footer Stats */}
                <div className="h-12 bg-slate-900 border-t border-slate-700 flex items-center justify-between px-4 text-xs font-mono text-slate-400">
                    <div className="flex gap-4">
                        <span>CPU: 12%</span>
                        <span>MEM: 84GB</span>
                        <span>NET: 1.2TB/s</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>LIVE</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;