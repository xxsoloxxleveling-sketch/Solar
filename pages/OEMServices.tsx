import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Check, Handshake, PenTool, Globe2 } from 'lucide-react';

const OEMServices: React.FC = () => {
    const benefits = [
        { title: 'Global Scale', desc: 'Plug your brand into our 2.5GW capacity instantly. Zero capital expenditure on manufacturing lines.', icon: Globe2 },
        { title: 'Custom Engineering', desc: 'R&D collaboration to design bespoke cell structures and encapsulation for your specific market needs.', icon: PenTool },
        { title: 'Strict Confidentiality', desc: 'Your proprietary designs and branding are protected by rigorous NDAs and segregated production data.', icon: Handshake }
    ];

    return (
        <>
            <PageHeader title="OEM & White-Label Services" subtitle="Leverage our state-of-the-art facility for your global brand." image="/images/oem_warehouse_desktop_1771581111992.png" />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-heading font-bold text-primary mb-6">Scale Without Limits</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Because our facility is brand new and utilizes the most flexible robotic automation available in 2026, we are uniquely positioned to offer high-volume Original Equipment Manufacturing (OEM) services.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Whether you need customized bifacial modules for an upcoming utility project or want to establish your own line of residential storage batteries, Aryian's Energy Solution provides the backbone for your success.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Flexible MOQ (Minimum Order Quantity) structures.',
                                'End-to-end logistics and global shipping support.',
                                'Full access to our testing center for your own certification.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-green-100 rounded-full p-1"><Check className="h-4 w-4 text-green-700" /></div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" className="hover:-translate-y-1 hover:shadow-lg">Inquire About OEM Partnership</Button>
                    </motion.div>

                    <div className="space-y-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    key={idx}
                                    className="bg-gray-50 p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center"
                                >
                                    <div className="bg-white p-4 shrink-0 rounded-full h-fit border border-gray-100">
                                        <Icon className="h-8 w-8 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default OEMServices;
