import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border-x border-slate-900 relative z-10 ${className}`}>
      {/* Add a top/bottom border via props or context if needed, but standard is border-x for stack */}
      <div className="border-t border-b border-slate-900 -mt-px first:mt-0">
          {children}
      </div>
    </div>
  );
};

export default SectionContainer;