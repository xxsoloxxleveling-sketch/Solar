import React from 'react';
import { Section, PageHeader } from '../components/UIComponents';
import { Microscope, Database, Layers } from 'lucide-react';

const Innovation: React.FC = () => {
  return (
    <>
      <PageHeader title="Research & Development" subtitle="Pushing the theoretical limits of photovoltaic conversion." image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop" />

      <Section>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Innovation DNA</h2>
          <p className="text-muted">
            Our R&D team consists of 50+ PhDs and engineers dedicated to enhancing cell efficiency, module durability, and system intelligence. We reinvest 5% of annual revenue into R&D.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all">
            <Layers className="h-10 w-10 text-secondary mb-6" />
            <h3 className="font-bold text-xl mb-3">Tandem Cells</h3>
            <p className="text-sm text-muted">Developing Perovskite/Silicon tandem cells to breach the 30% efficiency barrier.</p>
          </div>
          <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all">
            <Microscope className="h-10 w-10 text-secondary mb-6" />
            <h3 className="font-bold text-xl mb-3">Material Science</h3>
            <p className="text-sm text-muted">Advanced glass coatings and encapsulation materials for extreme weather resistance.</p>
          </div>
          <div className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all">
            <Database className="h-10 w-10 text-secondary mb-6" />
            <h3 className="font-bold text-xl mb-3">AI BMS</h3>
            <p className="text-sm text-muted">Machine learning algorithms for battery state-of-health prediction and optimization.</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Innovation;