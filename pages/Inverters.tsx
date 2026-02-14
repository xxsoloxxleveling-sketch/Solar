import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Download, CheckCircle, FileText } from 'lucide-react';

const effData = [
  { load: '10%', eff: 96.5 },
  { load: '20%', eff: 97.8 },
  { load: '30%', eff: 98.5 },
  { load: '40%', eff: 98.9 },
  { load: '50%', eff: 99.0 },
  { load: '60%', eff: 98.8 },
  { load: '70%', eff: 98.5 },
  { load: '80%', eff: 98.2 },
  { load: '90%', eff: 97.8 },
  { load: '100%', eff: 97.5 },
];

const Inverters: React.FC = () => {
  return (
    <>
      <div className="pt-2">
        {/* Product Hero */}
        <div className="bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
            <div className="space-y-6">
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Industrial Inverters</span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-none">AES-INV <br /><span className="text-gray-400">Smart Grid</span></h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Intelligent string and central inverters with AI-driven arc fault detection and 99% max efficiency.
              </p>

              <div className="flex gap-8 py-6">
                <div>
                  <p className="text-4xl font-heading font-bold text-white">99.0%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Max Efficiency</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">12<span className="text-xl"></span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">MPPT Channels</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">350<span className="text-xl">kW</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Max Power</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" icon className="hover:-translate-y-1 shadow-lg shadow-blue-900/50">Contact Sales</Button>
                <Button variant="outline" className="border-gray-500 text-gray-300 hover:text-white hover:border-white">Download Datasheet <Download className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1620288627223-537a242c9116?q=80&w=2609&auto=format&fit=crop" className="max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" alt="Inverter Product" />
            </div>
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Efficiency Graph */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Conversion Efficiency</h2>
            <p className="text-muted text-lg">
              Optimized for various load conditions, ensuring maximum energy harvest even during partial shading or low light.
            </p>
            <div className="h-[350px] w-full bg-white border border-gray-100 p-4 rounded-sm shadow-lg">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={effData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="load" tickLine={false} axisLine={false} label={{ value: 'Load %', position: 'insideBottom', offset: -5 }} />
                  <YAxis domain={[95, 100]} hide />
                  <Tooltip labelStyle={{ color: '#000' }} contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Line type="monotone" dataKey="eff" stroke="#0033A0" strokeWidth={4} dot={{ r: 4, fill: '#0033A0' }} activeDot={{ r: 8 }} />
                  <ReferenceLine y={99} label="Max 99%" stroke="red" strokeDasharray="3 3" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Advanced Features</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Smart I-V Curve Diagnosis', desc: 'Online I-V curve analysis with 100% scanning coverage.' },
                { title: 'Arc Fault Circuit Interrupter', desc: 'AI-powered AFCI proactively detects and breaks arcs in <0.5s.' },
                { title: 'IP66 Protection', desc: 'Completely sealed design for harsh desert and marine environments.' },
                { title: 'Grid Support', desc: 'Active and reactive power control for grid stability.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-sm hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Specs Table */}
      <Section background="grey">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Technical Specifications</h2>
          <div className="overflow-x-auto shadow-xl rounded-sm">
            <table className="w-full bg-white border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-5 text-left text-sm font-bold uppercase tracking-wider">Model</th>
                  <th className="p-5 text-left text-sm font-bold uppercase tracking-wider">AES-INV-100K</th>
                  <th className="p-5 text-left text-sm font-bold uppercase tracking-wider">AES-INV-250K</th>
                  <th className="p-5 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-INV-350K</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-5 font-bold bg-gray-50">Max Input Voltage</td>
                  <td className="p-5">1100 V</td>
                  <td className="p-5">1500 V</td>
                  <td className="p-5 font-bold text-primary">1500 V</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold bg-gray-50">Max Output Power</td>
                  <td className="p-5">110 kW</td>
                  <td className="p-5">275 kW</td>
                  <td className="p-5 font-bold text-primary">350 kW</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold bg-gray-50">MPPT Efficiency</td>
                  <td className="p-5">&gt;99.9%</td>
                  <td className="p-5">&gt;99.9%</td>
                  <td className="p-5">&gt;99.9%</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold bg-gray-50">Degree of Protection</td>
                  <td className="p-5">IP66</td>
                  <td className="p-5">IP66</td>
                  <td className="p-5">IP66</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold bg-gray-50">Dimensions (WxHxD)</td>
                  <td className="p-5">1035 x 700 x 365</td>
                  <td className="p-5">1085 x 750 x 385</td>
                  <td className="p-5">1100 x 800 x 400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" icon>Download Full Specs <FileText className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </Section>

      {/* Certifications - Logos */}
      <Section background="white">
        <div className="text-center">
          <h4 className="font-bold text-gray-400 uppercase tracking-widest mb-8">Grid Code & Safety Certifications</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEC 62109</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEC 61727</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">EN 50549</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">UL 1741</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEEE 1547</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Inverters;