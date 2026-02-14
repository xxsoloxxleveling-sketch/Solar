import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <PageHeader title="Get in Touch" subtitle="Our team is ready to support your energy goals." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Request Information</h2>
            <p className="text-muted mb-8">Fill out the form below and our sales engineering team will contact you within 24 hours.</p>
            
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                   <input type="text" className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                   <input type="text" className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none" />
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                   <input type="text" className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                   <select className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none">
                     <option>Solar Panels</option>
                     <option>Inverters</option>
                     <option>Energy Storage</option>
                     <option>Other</option>
                   </select>
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea rows={4} className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
               </div>

               <Button variant="primary">Submit Inquiry</Button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
             <div className="bg-gray-50 p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary h-6 w-6 mt-1" />
                    <div>
                      <p className="font-bold">Aryian's Energy Solution HQ</p>
                      <p className="text-gray-600">123 Solar Valley Blvd, Tech District<br/>California, 94000, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-secondary h-6 w-6" />
                    <p className="text-gray-600">+1 (800) 555-0199</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-secondary h-6 w-6" />
                    <p className="text-gray-600">sales@aryiansenergy.com</p>
                  </div>
                </div>
             </div>

             {/* Simple Map Placeholder */}
             <div className="bg-gray-200 h-64 w-full flex items-center justify-center text-gray-500 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                  alt="Map Location"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;