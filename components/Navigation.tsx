import React from 'react';
import { Grid3x3, Terminal } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <header className="bg-white w-full font-mono">
      <div className="px-6 md:px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-none border border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Grid3x3 size={20} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter text-slate-900 leading-none">DATACELL</span>
                <span className="text-[10px] uppercase text-slate-500 tracking-widest">Automata_v2.1</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-12 text-sm text-slate-600 uppercase tracking-wide">
            <a href="#" className="hover:text-slate-900 hover:underline decoration-2 underline-offset-4 transition-all">Protocol</a>
            <a href="#" className="hover:text-slate-900 hover:underline decoration-2 underline-offset-4 transition-all">Nodes</a>
            <a href="#" className="hover:text-slate-900 hover:underline decoration-2 underline-offset-4 transition-all">Documentation</a>
          </nav>

          <div>
            <button className="bg-white border-2 border-slate-900 text-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;