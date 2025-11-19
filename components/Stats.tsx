import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-900 text-white relative overflow-hidden">
       {/* Matrix Background */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
                <div className="font-mono text-5xl font-bold mb-2 tracking-tighter">
                    8.4<span className="text-emerald-500">B</span>
                </div>
                <div className="h-px w-12 bg-slate-700 my-4"></div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Generations / Sec
                </p>
            </div>

             {/* Stat 2 */}
             <div className="flex flex-col items-center">
                <div className="font-mono text-5xl font-bold mb-2 tracking-tighter">
                    99<span className="text-emerald-500">%</span>
                </div>
                <div className="h-px w-12 bg-slate-700 my-4"></div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Entropy Reduction
                </p>
            </div>

             {/* Stat 3 */}
             <div className="flex flex-col items-center">
                <div className="font-mono text-5xl font-bold mb-2 tracking-tighter">
                    <span className="text-emerald-500">&lt;</span>1ms
                </div>
                <div className="h-px w-12 bg-slate-700 my-4"></div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Mutation Latency
                </p>
            </div>

             {/* Stat 4 */}
             <div className="flex flex-col items-center">
                <div className="font-mono text-5xl font-bold mb-2 tracking-tighter">
                    128<span className="text-emerald-500">x</span>
                </div>
                <div className="h-px w-12 bg-slate-700 my-4"></div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Grid Expansion
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;