import React from 'react';
import { Section, PageHeader } from '../components/UIComponents';
import { Award, Globe } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <>
       <PageHeader title="Quality & Global Reach" subtitle="Certified excellence delivered worldwide." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" />
       
       <Section>
         <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-primary mb-6">Certifications</h2>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 border p-4 rounded-sm">
                     <Award className="h-8 w-8 text-secondary" />
                     <div>
                        <h4 className="font-bold">IEC 61215 / 61730</h4>
                        <p className="text-xs text-muted">Design qualification and type approval.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 border p-4 rounded-sm">
                     <Award className="h-8 w-8 text-secondary" />
                     <div>
                        <h4 className="font-bold">UL 1703</h4>
                        <p className="text-xs text-muted">Standard for Flat-Plate Photovoltaic Modules.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 border p-4 rounded-sm">
                     <Award className="h-8 w-8 text-secondary" />
                     <div>
                        <h4 className="font-bold">ISO 9001:2015</h4>
                        <p className="text-xs text-muted">Quality Management Systems.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-primary mb-6">Global Supply Chain</h2>
               <p className="text-muted mb-6">
                 We operate a robust logistics network capable of delivering DDP to project sites globally. With warehouses in Rotterdam, California, and Dubai, we ensure just-in-time delivery for EPC partners.
               </p>
               <div className="bg-blue-50 p-6 rounded-sm">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h4 className="font-bold text-lg">Export Markets</h4>
                  <p className="text-sm mt-2">Europe, North America, Middle East, Southeast Asia.</p>
               </div>
            </div>
         </div>
       </Section>
    </>
  );
};

export default Quality;