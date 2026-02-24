import React from 'react';
import { Section, PageHeader, Button, Tabs } from '../components/UIComponents';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Download, CheckCircle, FileText, Battery, Zap, Shield, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const cycleData = [
  { cycles: '2000', cap: 95 },
  { cycles: '4000', cap: 88 },
  { cycles: '6000', cap: 80 },
  { cycles: '8000', cap: 70 },
  { cycles: '10000', cap: 60 },
];

const Batteries: React.FC = () => {
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
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Residential Storage</span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-none">AES-PowerWall <br /><span className="text-gray-400">Series (5-10kWh)</span></h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Ultra-slim wall-mounted lithium batteries designed to banish load shedding. Safe, smart, and scalable for uninterrupted power.
              </p>

              <div className="flex gap-8 py-6">
                <div>
                  <p className="text-4xl font-heading font-bold text-white">6000<span className="text-xl">+</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Cycles @ 80% DoD</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">10.2<span className="text-xl">kWh</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Max Capacity/Unit</p>
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white">10<span className="text-xl">yr</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Warranty</p>
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
              <img src="/images/powerwall_battery.png" className="max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-lg" alt="Battery Wall" />
            </motion.div>
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Cycle Life Graph */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Long-Lasting Performance</h2>
            <p className="text-muted text-lg">
              Engineered for frequent cycling. Our LFP chemistry ensures stability and minimal degradation over thousands of cycles.
            </p>
            <div className="h-[350px] w-full bg-white border border-gray-100 p-4 rounded-sm shadow-lg">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cycleData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="cycles" tickLine={false} axisLine={false} label={{ value: 'Cycles', position: 'insideBottom', offset: -5 }} />
                  <YAxis domain={[0, 100]} hide />
                  <Tooltip labelStyle={{ color: '#000' }} cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Bar dataKey="cap" fill="#0033A0" radius={[4, 4, 0, 0]}>
                    {cycleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fillOpacity={1 - (index * 0.1)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center text-muted italic">Capacity Retention vs. Cycle Count (at 25°C, 0.5C/0.5C)</p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Safety & Intelligence</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Grade A+ LFP Cells', desc: 'The safest lithium chemistry available. No fire risk, no maintenance, zero emissions.', icon: Shield },
                { title: 'Zero Maintenance', desc: 'No more adding water or checking acid levels compared to traditional tubular batteries.', icon: Thermometer },
                { title: 'Plug & Play BMS', desc: 'Seamless communication with top inverter brands (Inverex, Knox, Growatt).', icon: Zap },
                { title: 'Ultra-Fast Charging', desc: 'Recharges 5x faster than lead-acid batteries, perfect for short gap periods between load shedding.', icon: Battery }
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
                    id: 'performance',
                    label: 'Performance Data',
                    content: (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-primary text-white">
                            <tr>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">Model</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-PowerWall 2.5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-PowerWall 5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-PowerWall 10K</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Energy Capacity</td>
                              <td className="p-4">2.56 kWh</td>
                              <td className="p-4">5.12 kWh</td>
                              <td className="p-4 font-bold text-primary">10.24 kWh</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Nominal Voltage</td>
                              <td className="p-4">25.6 V / 51.2 V</td>
                              <td className="p-4">51.2 V</td>
                              <td className="p-4">51.2 V</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Battery Chemistry</td>
                              <td className="p-4">LFP (LiFePO4)</td>
                              <td className="p-4">LFP (LiFePO4)</td>
                              <td className="p-4">LFP (LiFePO4)</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Max Discharge/Charge</td>
                              <td className="p-4">50A / 50A</td>
                              <td className="p-4">100A / 100A</td>
                              <td className="p-4">100A / 100A</td>
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
                          <thead className="bg-primary text-white">
                            <tr>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">Model</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-PowerWall 2.5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider">AES-PowerWall 5K</th>
                              <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-secondary">AES-PowerWall 10K</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Dimensions (WxHxD)</td>
                              <td className="p-4">400 x 450 x 135 mm</td>
                              <td className="p-4">480 x 600 x 150 mm</td>
                              <td className="p-4 font-bold text-primary">480 x 850 x 200 mm</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Weight</td>
                              <td className="p-4">~28 kg</td>
                              <td className="p-4">~50 kg</td>
                              <td className="p-4">~95 kg</td>
                            </tr>
                            <tr>
                              <td className="p-4 font-bold bg-gray-50">Installation</td>
                              <td className="p-4">Wall Mount</td>
                              <td className="p-4">Wall Mount / Floor Stand</td>
                              <td className="p-4">Wall Mount / Floor Stand</td>
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
          <h4 className="font-bold text-gray-400 uppercase tracking-widest mb-8">Safety & Transport Certifications</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">UL 9540A</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">IEC 62619</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">UN 38.3</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">CE</div>
            <div className="border-2 border-gray-300 p-4 rounded font-bold text-gray-600 text-xl">NFPA 855</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Batteries;