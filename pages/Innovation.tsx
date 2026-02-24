import React from 'react';
import { Section, PageHeader } from '../components/UIComponents';
import { Microscope, Database, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Innovation: React.FC = () => {
  return (
    <>
      <PageHeader title="Research & Development" subtitle="Pushing the theoretical limits of photovoltaic conversion." image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop" />

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Innovation DNA</h2>
          <p className="text-muted text-lg">
            Our R&D team consists of 50+ PhDs and engineers dedicated to enhancing cell efficiency, module durability, and system intelligence. We reinvest 5% of annual revenue into R&D.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line for Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Material Science',
                desc: 'Advanced glass coatings and encapsulation materials for extreme weather resistance.',
                icon: Microscope,
                delay: 0.1
              },
              {
                title: 'Tandem Cells',
                desc: 'Developing Perovskite/Silicon tandem cells to breach the 30% efficiency barrier.',
                icon: Layers,
                delay: 0.3
              },
              {
                title: 'AI BMS',
                desc: 'Machine learning algorithms for battery state-of-health prediction and optimization.',
                icon: Database,
                delay: 0.5
              }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.delay, duration: 0.5 }}
                  className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center group-hover:border-secondary transition-colors duration-300 shadow-sm hidden md:flex">
                    <span className="text-primary font-bold text-lg">{idx + 1}</span>
                  </div>
                  <Icon className="h-12 w-12 text-secondary mb-6 mt-4 md:mt-6" />
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Innovation;