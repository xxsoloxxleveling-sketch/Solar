import React from 'react';
import { Section, PageHeader } from '../components/UIComponents';
import { Settings, Cpu, ShieldCheck, Package, Zap } from 'lucide-react';

const processes = [
  { num: '01', title: 'Cell Integration', desc: 'High-speed automated tabbers connect solar cells with precision alignment.', icon: <Cpu className="h-10 w-10 text-primary group-hover:text-white transition-colors" /> },
  { num: '02', title: 'Module Assembly', desc: 'Robotic arms stack glass, EVA, cell matrix, and backsheet layers.', icon: <Settings className="h-10 w-10 text-primary group-hover:text-white transition-colors" /> },
  { num: '03', title: 'Quality Testing', desc: 'Triple EL testing and AI-driven defect detection ensure 100% yield.', icon: <ShieldCheck className="h-10 w-10 text-primary group-hover:text-white transition-colors" /> },
  { num: '04', title: 'Packaging & Export', desc: 'Automated framing, sealing, and secure packaging for global logistics.', icon: <Package className="h-10 w-10 text-primary group-hover:text-white transition-colors" /> },
];

const Manufacturing: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Smart Manufacturing"
        subtitle="Industry 4.0 production lines driven by automation and AI."
        image="https://images.unsplash.com/photo-1620288627223-537a242c9116?q=80&w=2609&auto=format&fit=crop"
      />

      {/* Big Statistic Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Our Facility</span>
            <h2 className="text-5xl font-heading font-bold text-primary mb-8 leading-tight">2.5 GW Capacity <br /> Automated Plant</h2>
            <p className="text-muted leading-relaxed text-lg mb-8">
              Located in a strategic industrial zone, our 50,000 sqm facility represents the pinnacle of modern solar manufacturing.
              We utilize equipment from top-tier suppliers like Meyer Burger and ATW, ensuring that every module leaving our line meets strict global standards.
            </p>

            {/* Big Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading font-bold text-4xl text-blue-600 mb-1">500k</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Units Per Month</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-4xl text-blue-600 mb-1">100%</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Quality Testing</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-4xl text-blue-600 mb-1">0%</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Defect Tolerance</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-4xl text-blue-600 mb-1">24/7</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Automated Ops</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop" className="rounded-sm w-full h-[500px] object-cover shadow-xl" alt="Robot Arm" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg border-l-4 border-secondary hidden md:block">
              <p className="font-heading font-bold text-primary text-lg">Industry 4.0 Standard</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Wide Industrial Image */}
      <div className="w-full h-[400px] lg:h-[500px] relative">
        <img src="https://images.unsplash.com/photo-1563287739-db658c1605f1?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Solar Cells Production Line" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white font-heading font-bold text-4xl md:text-5xl tracking-wide">Precision Engineering</h2>
        </div>
      </div>

      {/* 4-Step Process Diagram */}
      <Section background="grey">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">The Production Process</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">From raw silicon to finished module, every step is monitored.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((p, i) => (
            <div key={i} className="bg-white p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl rounded-sm border border-gray-100">
              <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                {p.icon}
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Step {p.num}</span>
                <h3 className="text-xl font-bold text-primary mb-4">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Manufacturing;