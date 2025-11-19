import React from 'react';
import { Box, Square, Grid, Layers, Command, Terminal } from 'lucide-react';

const LogoCloud: React.FC = () => {
  const logos = [
    { name: 'BitStack', icon: Layers },
    { name: 'PixelForge', icon: Square },
    { name: 'GridLogic', icon: Grid },
    { name: 'NetBlock', icon: Box },
    { name: 'CmdLine', icon: Terminal },
    { name: 'CoreSys', icon: Command },
  ];

  return (
    <section className="py-16 bg-slate-50 px-6 md:px-12 border-b border-slate-900">
      <div className="w-full">
        <p className="text-center font-mono text-xs text-slate-400 uppercase tracking-widest mb-12">Powering the decentralized lattice</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 group cursor-pointer">
              <logo.icon size={24} className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth={2} />
              <span className="font-mono font-bold text-lg text-slate-400 group-hover:text-slate-900 transition-colors tracking-tighter">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;