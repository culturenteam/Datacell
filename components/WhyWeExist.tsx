import React from 'react';
import { ArrowDown } from 'lucide-react';

const WhyWeExist: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Content */}
        <div>
          <div className="inline-block px-2 py-1 bg-slate-900 text-white text-[10px] font-mono uppercase mb-6">
            Mission Statement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-8 font-mono">
              AUTOMATING<br/>THE CELLULAR<br/>FABRIC
          </h2>

          <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
            <p>
              The traditional enterprise stack is dead. In its place, a new organic architecture is emerging—one where data packets are not just stored, but alive.
            </p>
            <p>
              We build the enzymes and proteins of the digital world. Our systems don't just process information; they consume entropy to create order, evolving in real-time to meet computational demands.
            </p>
          </div>

          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-500">
            <p className="mb-2">// core_manifest.json</p>
            <p>
              <span className="text-blue-600">"objective"</span>: <span className="text-emerald-600">"autonomous_scaling"</span>,<br/>
              <span className="text-blue-600">"method"</span>: <span className="text-emerald-600">"cellular_reproduction"</span>,<br/>
              <span className="text-blue-600">"status"</span>: <span className="text-emerald-600">"replicating"</span>
            </p>
          </div>
        </div>

        {/* Right Diagram - Schematic Flow */}
        <div className="relative pt-8">
            <div className="space-y-4 relative">
                {/* Vertical connector line */}
                <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-slate-200 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 pl-0">
                    <div className="flex items-start gap-6">
                         {/* Icon Box */}
                        <div className="w-14 h-14 bg-white border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                             <div className="grid grid-cols-2 gap-1">
                                <div className="w-2 h-2 bg-slate-900"></div>
                                <div className="w-2 h-2 bg-slate-300"></div>
                                <div className="w-2 h-2 bg-slate-300"></div>
                                <div className="w-2 h-2 bg-slate-900"></div>
                             </div>
                        </div>
                        <div className="pt-1">
                            <h3 className="font-mono font-bold text-slate-900 text-lg uppercase">Ingestion</h3>
                            <p className="text-slate-500 mt-1 max-w-xs text-sm">Raw entropy is collected from unstructured data lakes and discretized into cellular units.</p>
                        </div>
                    </div>
                </div>

                {/* Connector Arrow */}
                <div className="pl-[22px] py-2">
                    <ArrowDown size={16} className="text-slate-400" />
                </div>

                {/* Step 2 */}
                <div className="relative z-10 pl-0">
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-slate-900 border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.3)]">
                             <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                        </div>
                        <div className="pt-1">
                            <h3 className="font-mono font-bold text-slate-900 text-lg uppercase">Pattern Match</h3>
                            <p className="text-slate-500 mt-1 max-w-xs text-sm">Algorithms identify repeating automata structures and optimize them for efficient storage.</p>
                        </div>
                    </div>
                </div>

                {/* Connector Arrow */}
                <div className="pl-[22px] py-2">
                    <ArrowDown size={16} className="text-slate-400" />
                </div>

                {/* Step 3 */}
                <div className="relative z-10 pl-0">
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-white border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                             <div className="flex gap-1 items-end">
                                <div className="w-1 h-2 bg-slate-900"></div>
                                <div className="w-1 h-4 bg-slate-900"></div>
                                <div className="w-1 h-3 bg-slate-900"></div>
                                <div className="w-1 h-6 bg-slate-900"></div>
                             </div>
                        </div>
                        <div className="pt-1">
                            <h3 className="font-mono font-bold text-slate-900 text-lg uppercase">Evolution</h3>
                            <p className="text-slate-500 mt-1 max-w-xs text-sm">Self-improving loops generate new models that deploy back into the ecosystem.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyWeExist;