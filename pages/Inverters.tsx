import React from 'react';
import { Section, PageHeader, Button, Tabs } from '../components/UIComponents';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Download, CheckCircle, FileText, Zap, Activity, Shield, ActivitySquare } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Residential & Light Commercial</span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-none">AES-Nitrox <br /><span className="text-gray-400">Hybrid Series</span></h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                The ultimate defense against load shedding. Intelligent energy management, seamless backup, and robust net-metering export in one unit.
              </p>

              <div className="flex gap-8 py-6">
                <div>
                  <p className="text-4xl font-heading font-bold text-white">97.6%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Max Efficiency</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">2-3<span className="text-xl"></span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">MPPT Channels</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">3-10<span className="text-xl">kW</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Power Range</p>
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
              <img src="/images/hybrid_inverter.png" className="max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" alt="Inverter Product" />
            </motion.div>
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
                { title: '0ms Transfer Time', desc: 'True UPS level backup means your PCs and appliances will never restart during load shedding.', icon: ActivitySquare },
                { title: 'Heavy Duty Backup', desc: 'Powerful enough to start 2-ton air conditioners directly on battery/solar power without tripping.', icon: Zap },
                { title: 'Dual Output Ports', desc: 'Smart load management port allowing prioritization of critical appliances over heavy loads.', icon: Shield },
                { title: 'Lithium Ready', desc: 'Full BMS communication with leading lithium-ion batteries. Also supports lead-acid/tubular.', icon: Activity }
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
                    id: 'input',
                    label: 'DC Input',
                    content: (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-primary text-white">
                            <tr>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">Model</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 3K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 8K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-Nitrox 10K</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Max Input Power (Solar)</td>
                              <td className="p-4">4,500 W</td>
                              <td className="p-4">6,500 W</td>
                              <td className="p-4">10,400 W</td>
                              <td className="p-4 font-bold text-primary">13,000 W</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">MPPT Voltage Range</td>
                              <td className="p-4">120 V ~ 425 V</td>
                              <td className="p-4">120 V ~ 425 V</td>
                              <td className="p-4">150 V ~ 425 V</td>
                              <td className="p-4 font-bold text-primary">200 V ~ 650 V</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Number of MPPTs</td>
                              <td className="p-4">2</td>
                              <td className="p-4">2</td>
                              <td className="p-4">2</td>
                              <td className="p-4 font-bold text-primary">3</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                  },
                  {
                    id: 'output',
                    label: 'AC & Battery',
                    content: (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-primary text-white">
                            <tr>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">Model</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 3K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-Nitrox 8K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-Nitrox 10K</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Rated AC Output</td>
                              <td className="p-4">3,000 W</td>
                              <td className="p-4">5,000 W</td>
                              <td className="p-4">8,000 W</td>
                              <td className="p-4 font-bold text-primary">10,000 W</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Battery Voltage</td>
                              <td className="p-4">48V</td>
                              <td className="p-4">48V</td>
                              <td className="p-4">48V</td>
                              <td className="p-4 font-bold text-primary">48V</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Max Charging / Discharging</td>
                              <td className="p-4">70 / 70 A</td>
                              <td className="p-4">120 / 120 A</td>
                              <td className="p-4">190 / 190 A</td>
                              <td className="p-4 font-bold text-primary">210 / 210 A</td>
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
              <Button variant="outline" icon>Download Full Specs <FileText className="ml-2 h-4 w-4" /></Button>
            </div>
          </motion.div>
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