import React from 'react';
import { Section, PageHeader, Button, Tabs, Accordion } from '../components/UIComponents';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, CheckCircle, FileText, Zap, Shield, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { year: 1, eff: 100 }, { year: 5, eff: 97 }, { year: 10, eff: 93 },
  { year: 15, eff: 90 }, { year: 20, eff: 87 }, { year: 25, eff: 85 }, { year: 30, eff: 83 }, // Adjusted to start from 100% relative output
];

const SolarPanels: React.FC = () => {
  return (
    <>
      <div className="pt-2"> {/* Offset for navbar if needed */}
        {/* Product Hero */}
        <div className="bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">PV Modules</span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-none">AES-700 <br /><span className="text-gray-400">N-Type TOPCon</span></h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Ultra-high efficiency bifacial modules designed for utility-scale solar farms. Engineered for maximum energy yield.
              </p>

              <div className="flex gap-8 py-6">
                <div>
                  <p className="text-4xl font-heading font-bold text-white">22.8%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Efficiency</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">30<span className="text-xl">yr</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Warranty</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">700<span className="text-xl">W</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Max Power</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" icon className="hover:-translate-y-1 shadow-lg shadow-blue-900/50">Contact Sales</Button>
                <Button variant="outline" className="border-gray-500 text-gray-300 hover:text-white hover:border-white">Download Datasheet <Download className="ml-2 h-4 w-4" /></Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
            >
              <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop" className="max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" alt="Solar Panel Product" />
            </motion.div>
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Performance Graph */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Performance Guarantee</h2>
            <p className="text-muted text-lg">
              Industry-leading degradation rates. We guarantee 87.4% power output after 30 years.
            </p>
            <div className="h-[350px] w-full bg-white border border-gray-100 p-4 rounded-sm shadow-lg">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0033A0" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0033A0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                  <YAxis domain={[80, 105]} hide />
                  <Tooltip labelStyle={{ color: '#000' }} contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Area type="monotone" dataKey="eff" stroke="#0033A0" strokeWidth={3} fillOpacity={1} fill="url(#colorEff)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-muted italic">Linear Power Warranty: <span className="font-bold text-primary">0.40% Annual Degradation</span></p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'N-Type TOPCon Technology', desc: 'Lower LID/LeTID and better weak illumination response.', icon: Zap },
                { title: 'Bifacial Energy Yield', desc: 'Up to 30% additional power generation from the rear side.', icon: Sun },
                { title: 'Enhanced Mechanical Load', desc: 'Certified to withstand 5400Pa snow load and 2400Pa wind load.', icon: Shield },
                { title: 'PID Resistant', desc: 'Excellent anti-PID performance guaranteed via optimized mass-production process.', icon: CheckCircle }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex gap-4 p-4 border border-gray-100 rounded-sm hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Specs Tabs */}
      <Section background="grey">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Technical Specifications</h2>
            <div className="bg-white shadow-xl rounded-sm p-6">
              <Tabs
                tabs={[
                  {
                    id: 'electrical',
                    label: 'Electrical Data',
                    content: (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-primary text-white">
                            <tr>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">Model Type</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-550M</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-670N</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-700N</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Max Power Output (Pmax)</td>
                              <td className="p-4">550 W</td>
                              <td className="p-4">670 W</td>
                              <td className="p-4 font-bold text-primary">700 W</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Module Efficiency</td>
                              <td className="p-4">21.5%</td>
                              <td className="p-4">22.3%</td>
                              <td className="p-4 font-bold text-primary">22.8%</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Operating Temp</td>
                              <td className="p-4">-40°C ~ +85°C</td>
                              <td className="p-4">-40°C ~ +85°C</td>
                              <td className="p-4 font-bold text-primary">-40°C ~ +85°C</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                  },
                  {
                    id: 'mechanical',
                    label: 'Mechanical Data',
                    content: (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50 w-1/3">Dimensions (mm)</td>
                              <td className="p-4">2384 x 1303 x 33</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Weight</td>
                              <td className="p-4">34.0 kg</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Cell Type</td>
                              <td className="p-4">N-Type TOPCon</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Front Glass</td>
                              <td className="p-4">2.0mm, Anti-Reflection Coating</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                  }
                ]}
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-4">Detailed electrical parameters are available in the datasheet.</p>
              <Button variant="outline" icon>Download Full Specs <FileText className="ml-2 h-4 w-4" /></Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Certifications - Logos */}
      <Section background="white">
        <div className="text-center">
          <h4 className="font-bold text-gray-400 uppercase tracking-widest mb-8">System & Product Certifications</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Using text representations/placeholders for now if no images, or standard icons */}
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">ISO 9001</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEC 61215</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEC 61730</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">UL 1703</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">TUV NORD</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SolarPanels;