import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import WhyWeExist from './components/WhyWeExist';
import FeatureGrid from './components/FeatureGrid';
import Stats from './components/Stats';
import Footer from './components/Footer';
import SectionContainer from './components/SectionContainer';
import CellularAutomataStrip from './components/CellularAutomataStrip';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#EAEAEA] selection:bg-slate-900 selection:text-white py-12 px-4 md:px-12 lg:px-[120px]">
      {/* The layout stack: Section -> Strip -> Section ... */}
      <div className="flex flex-col w-full max-w-[1600px] mx-auto shadow-2xl shadow-slate-900/10">
        
        <SectionContainer className="rounded-t-sm border-b-0">
          <Navigation />
        </SectionContainer>

        <CellularAutomataStrip />

        <SectionContainer className="border-y-0">
          <Hero />
        </SectionContainer>

        <CellularAutomataStrip />

        <SectionContainer className="border-y-0">
          <LogoCloud />
        </SectionContainer>

        <CellularAutomataStrip />

        <SectionContainer className="border-y-0">
          <WhyWeExist />
        </SectionContainer>
        
        <CellularAutomataStrip />

        <SectionContainer className="border-y-0">
          <FeatureGrid />
        </SectionContainer>

        <CellularAutomataStrip />

        <SectionContainer className="border-y-0">
          <Stats />
        </SectionContainer>

        <CellularAutomataStrip />

        <SectionContainer className="rounded-b-sm border-t-0">
          <Footer />
        </SectionContainer>
        
      </div>
    </div>
  );
};

export default App;