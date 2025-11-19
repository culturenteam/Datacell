import React from 'react';
import { Square, Maximize, GitMerge, Workflow, Cpu, Network } from 'lucide-react';

const features = [
  {
    title: "Recursive Architecture",
    desc: "Systems that build themselves. Define the seed state and watch your infrastructure grow.",
    icon: GitMerge
  },
  {
    title: "Pixel-Perfect Scaling",
    desc: "Grid-based allocation ensures 100% resource utilization with zero fragmentation.",
    icon: Maximize
  },
  {
    title: "Swarm Logic",
    desc: "Decentralized agent coordination prevents bottlenecks and eliminates single points of failure.",
    icon: Network
  },
  {
    title: "Binary Optimization",
    desc: "Low-level bytecode compilation for speed that rivals bare metal execution.",
    icon: Square
  },
  {
    title: "Silicon Synapse",
    desc: "Neuromorphic routing paths that learn traffic patterns and adapt in microseconds.",
    icon: Cpu
  },
  {
    title: "Automated Genesis",
    desc: "One-click deployment of entire digital ecosystems from a single configuration cell.",
    icon: Workflow
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="mb-16 text-center max-w-3xl mx-auto">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-mono tracking-tight mb-4">SYSTEM CAPABILITIES</h2>
         <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((feature, idx) => (
          <div key={idx} className="group hover:bg-slate-50 p-6 border border-transparent hover:border-slate-200 transition-colors rounded-sm">
            <div className="mb-6 relative">
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <feature.icon size={24} strokeWidth={1.5} />
                </div>
                {/* Decorative pixel dots */}
                <div className="absolute -right-2 -top-2 flex gap-0.5">
                    <div className="w-1 h-1 bg-slate-300"></div>
                    <div className="w-1 h-1 bg-slate-300"></div>
                </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 font-mono mb-3 uppercase tracking-tight">
              {feature.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;