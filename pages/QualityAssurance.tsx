import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Activity, Settings2 } from 'lucide-react';

const QualityAssurance: React.FC = () => {
    const qcSteps = [
        {
            title: '1. Material Intake Inspection',
            desc: 'All Silicon wafers and encapsulation materials undergo 100% automated optical inspection before entering the clean-room.',
            icon: Settings2
        },
        {
            title: '2. Inline Electroluminescence (EL)',
            desc: 'Triple EL testing (Pre-lamination, Post-lamination, Final) ensures zero micro-cracks or hidden defects.',
            icon: Activity
        },
        {
            title: '3. Extreme Environmental Stress',
            desc: 'Random batch sampling undergoes thermal cycling (-40°C to 85°C), high humidity freeze, and damp heat stress tests.',
            icon: ShieldCheck
        },
        {
            title: '4. Flash Test & Binning',
            desc: 'AAA+ solar simulators capture exact electrical properties, ensuring tight power tolerance (+0~5W) binning.',
            icon: CheckCircle2
        }
    ];

    return (
        <>
            <PageHeader title="Quality Assurance Center" subtitle="Zero-defect tolerance. Engineered for 30-year lifecycle." image="/images/qa_testing_desktop_1771581058238.png" />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Aryian's Standard</span>
                        <h2 className="text-4xl font-heading font-bold text-primary mb-6">Beyond IEC Certification</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Traditional manufacturing relies on human inspection. Our new 2026 fully automated lines remove the human error element entirely, substituting it with AI-driven optical systems that operate at pixel-perfect precision.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Every AES module and inverter is backed by a robust data trail. You can scan the serial number to view its exact flash test data and EL images from the factory floor.
                        </p>
                        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">Download Quality Manual</Button>
                    </motion.div>
                    <div className="space-y-6">
                        {qcSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    key={idx}
                                    className="bg-white p-6 border border-gray-100 shadow-sm flex gap-6 hover:border-secondary transition-colors duration-300"
                                >
                                    <div className="bg-gray-50 p-4 shrink-0 rounded-full h-fit">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{step.desc}</p>
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

export default QualityAssurance;
