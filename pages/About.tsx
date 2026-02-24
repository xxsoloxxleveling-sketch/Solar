import React from 'react';
import { Section, PageHeader, Card } from '../components/UIComponents';
import { TimelineEvent } from '../types';
import { motion } from 'framer-motion';

const timeline: TimelineEvent[] = [
  { year: '2024', title: 'The Blueprint', description: 'Assembled a global team of industry veterans to design the ultimate next-generation solar manufacturing facility, completely unburdened by legacy equipment.' },
  { year: '2025', title: 'Groundbreaking', description: 'Began construction on our fully automated, AI-driven Gigafactory, integrating the latest robotic precision and clean-room environments.' },
  { year: '2026', title: 'Facility Commissioned', description: 'Officially launched our state-of-the-art manufacturing unit with an initial annual production capacity of 2.5 GW for N-Type TOPCon modules and high-density ESS.' },
  { year: '2026 Q3', title: 'Global Rollout', description: 'Commenced mass production and export of our AES-700N panels and Liquid-Cooled Storage systems to utility-scale developers worldwide.' },
];

const About: React.FC = () => {
  return (
    <>
      <PageHeader title="The Next Generation" subtitle="Built from the ground up to disrupt global energy manufacturing." image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" />

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Mission & Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            "To solve global supply chain bottlenecks and accelerate the energy transition. We aren't burdened by legacy machinery—we built the smartest, most automated factory on earth to manufacture the future of energy, starting today."
          </p>
          <div className="mt-8">
            <span className="font-heading font-bold text-lg">Dr. Arian K.</span>
            <p className="text-sm text-muted uppercase tracking-wider">Founder & CEO</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/images/about_us_desktop_1771581021471.png"
            alt="State of the art automated factory"
            className="w-full h-96 object-cover rounded-sm shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">The Next-Gen Disruptor</h3>
            <p className="text-muted mb-4 text-lg">
              Aryian's Energy Solution is a brand-new, Tier-1 capable manufacturing powerhouse. We identified a critical need for precision and scale in the renewable sector and answered it by building a state-of-the-art facility from scratch.
            </p>
            <p className="text-muted text-lg">
              Our advantage is our technology. Equipped with 2026-generation robotics, AI-driven quality assurance, and a team of top-tier industry veterans, we offer unmatched product consistency, longevity, and high-volume output.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="grey">
        <h2 className="text-3xl font-heading font-bold text-center mb-16 text-primary">The Journey to Launch</h2>
        <div className="relative border-l-2 border-secondary/30 ml-4 md:mx-auto md:max-w-3xl space-y-12 pl-8 md:pl-0">
          {timeline.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={index}
              className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute -left-[39px] md:left-1/2 md:-translate-x-[9px] w-5 h-5 bg-secondary rounded-full border-4 border-white shadow-sm" />

              <div className={`md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
                <span className="text-4xl font-heading font-bold text-gray-400 block mb-2">{item.year}</span>
                <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                <p className="text-muted mt-2 text-sm">{item.description}</p>
              </div>
              <div className="md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;