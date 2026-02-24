import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Home, Factory } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Utility-Scale (N-Type TOPCon)',
        desc: 'Maximum energy yield for massive solar farms. Bifacial double-glass modules exceeding 700W output.',
        icon: Sun,
        link: '/products/panels/aes-700',
        image: '/images/solar_panel_utility_1771581094254.png'
    },
    {
        title: 'Commercial & Industrial (C&I)',
        desc: 'Optimized size and weight for commercial rooftops with high reliability and PID resistance.',
        icon: Factory,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/product_prompt_2.jpg'
    },
    {
        title: 'Residential Aesthetic',
        desc: 'All-black appearance for premium residential installations. High efficiency in a compact form factor.',
        icon: Home,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/product_prompt_3.jpg'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'aes-700',
        name: 'AES-Vertex 700W+',
        marketEquivalent: 'Trina Vertex Bifacial / Jinko Tiger Neo',
        specs: [
            { label: 'Max Output', value: '710W' },
            { label: 'Efficiency', value: '22.8%' },
            { label: 'Cell Technology', value: 'N-Type TOPCon' },
            { label: 'Degradation (30yr)', value: '0.4% / yr' },
        ],
        description: 'Massive energy yield for utility-scale deployments. Engineered for harsh environments with double-glass framing.',
        image: '/images/solar_panel_utility_1771581094254.png',
        link: '/products/panels'
    },
    {
        id: 'aes-600',
        name: 'AES-Tiger 600W C&I',
        marketEquivalent: 'Jinko Tiger N-Type / Canadian Solar HiKu7',
        specs: [
            { label: 'Max Output', value: '600W' },
            { label: 'Efficiency', value: '22.3%' },
            { label: 'Weight', value: '28kg' },
            { label: 'PID Resistance', value: 'Double Tested' },
        ],
        description: 'Optimized size and weight for commercial rooftops, maximizing roof space without compromising roof load limits.',
        image: '/images/product_prompt_2.jpg',
        link: '/contact'
    },
    {
        id: 'aes-430',
        name: 'AES-HiMO 430W Black',
        marketEquivalent: 'Longi Hi-MO 6 Explorer / REC Alpha',
        specs: [
            { label: 'Max Output', value: '430W' },
            { label: 'Efficiency', value: '22.0%' },
            { label: 'Aesthetics', value: 'All-Black' },
            { label: 'Warranty', value: '25 Years' },
        ],
        description: 'Premium ultra-black appearance for residential applications. High density cell layout for maximum power in tight spaces.',
        image: '/images/product_prompt_3.jpg',
        link: '/contact'
    }
];

const SolarPanelsHub: React.FC = () => {
    return (
        <>
            <PageHeader title="Photovoltaic Modules" subtitle="Precision-engineered solar panels for every scale." image="/images/solar_panel_utility_1771581094254.png" />

            <Section>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Module Categories</h2>
                    <p className="text-muted text-lg">
                        From vast desert installations to premium residential rooftops, our fully automated manufacturing lines produce the exact module specification required for your project's success.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="bg-white group cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={cat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={cat.title} />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-white p-3 shadow-md rounded-full">
                                        <Icon className="h-6 w-6 text-secondary" />
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-primary transition-colors">{cat.title}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{cat.desc}</p>
                                    <Link to={cat.link} className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">
                                        Explore Series <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Product Pager Section */}
            <Section background="grey">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Flagship Modules</h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">Engineered to compete with and exceed industry-standard tiers.</p>
                    </div>

                    <ProductPager categoryTitle="Photovoltaic Portfolio" products={pagerProducts} />
                </div>
            </Section>
        </>
    );
};

export default SolarPanelsHub;
