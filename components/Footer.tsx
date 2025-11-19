import React from 'react';
import { Grid3x3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="max-w-xs">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center border border-slate-900">
                    <Grid3x3 size={16} />
                </div>
                <span className="font-mono font-bold text-xl tracking-tighter text-slate-900">DATACELL</span>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
                Simulating the future of digital infrastructure, one cell at a time.
            </p>
        </div>

        <div className="flex gap-16">
            <div>
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase mb-4 tracking-wider">System</h4>
                <ul className="space-y-2 text-sm font-mono text-slate-500">
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Kernel</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Shell</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Logs</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase mb-4 tracking-wider">Legal</h4>
                <ul className="space-y-2 text-sm font-mono text-slate-500">
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a></li>
                </ul>
            </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
        <div>
            © 2024 DATACELL INC.
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;