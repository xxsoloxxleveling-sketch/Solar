import React from 'react';
import { Section, PageHeader, Card } from '../components/UIComponents';
import { TimelineEvent } from '../types';

const timeline: TimelineEvent[] = [
  { year: '2015', title: 'Foundation', description: 'Established with a vision to revolutionize solar manufacturing in the region.' },
  { year: '2017', title: 'First Gigafactory', description: 'Commissioned 500MW production line for automated module assembly.' },
  { year: '2019', title: 'Global Export', description: 'Started exporting to European and North American markets. Achieved IEC certification.' },
  { year: '2021', title: 'Technology Shift', description: 'Upgraded to N-Type TOPCon technology and launched energy storage division.' },
  { year: '2023', title: 'Expansion', description: 'Reached 2.5GW annual capacity and opened dedicated R&D center.' },
];

const About: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Legacy" subtitle="Driving the renewable transition through manufacturing excellence." image="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=3131&auto=format&fit=crop" />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Mission & Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            "To empower the world with sustainable energy by manufacturing the most efficient, reliable, and accessible solar technologies. We strive to be the backbone of the global energy transition."
          </p>
          <div className="mt-8">
            <span className="font-heading font-bold text-lg">Dr. Arian K.</span>
            <p className="text-sm text-muted uppercase tracking-wider">Founder & CEO</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop" 
            alt="Corporate Meeting" 
            className="w-full h-96 object-cover rounded-sm shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Who We Are</h3>
            <p className="text-muted mb-4">
              Aryian's Energy Solution is a Tier-1 solar manufacturer dedicated to producing high-quality photovoltaic modules, inverters, and storage solutions.
            </p>
            <p className="text-muted">
              Unlike assemblers, we control the entire value chain from cell technology to final module assembly, ensuring rigorous quality control and superior product longevity. Our products power utility-scale plants across 3 continents.
            </p>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <h2 className="text-3xl font-heading font-bold text-center mb-16 text-primary">Milestones</h2>
        <div className="relative border-l-2 border-secondary/30 ml-4 md:mx-auto md:max-w-3xl space-y-12 pl-8 md:pl-0">
          {timeline.map((item, index) => (
            <div key={index} className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute -left-[39px] md:left-1/2 md:-translate-x-[9px] w-5 h-5 bg-secondary rounded-full border-4 border-white shadow-sm" />
              
              <div className={`md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
                <span className="text-4xl font-heading font-bold text-gray-200 block mb-2">{item.year}</span>
                <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                <p className="text-muted mt-2 text-sm">{item.description}</p>
              </div>
              <div className="md:w-[45%]" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;