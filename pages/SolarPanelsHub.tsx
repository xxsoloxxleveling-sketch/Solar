import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Home, Factory } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Premium Residential (N-Type TOPCon)',
        desc: 'Maximum efficiency for homes. 430W to 600W+ bifacial modules designed to withstand high temperatures and maximize roof space.',
        icon: Home,
        link: '/products/panels/aes-580',
        image: '/images/solar_panel_pro.png'
    },
    {
        title: 'Commercial & Industrial (C&I)',
        desc: 'High-yield 600W+ panels optimized for commercial rooftops with exceptional PID resistance and durability.',
        icon: Factory,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/product_prompt_2.jpg'
    },
    {
        title: 'Utility-Scale Projects',
        desc: 'Rugged, high-capacity modules designed for massive solar farms and harsh environments.',
        icon: Sun,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/solar_panel_utility_1771581094254.png'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'aes-pro-series',
        name: 'AES-Vertex Pro Series (430W - 600W)',
        marketEquivalent: 'Jinko Tiger Neo / Longi Hi-MO 6',
        specs: [
            { label: 'Power Range', value: '430W, 540W, 580W, 600W' },
            { label: 'Efficiency', value: 'Up to 23.2%' },
            { label: 'Cell Technology', value: 'N-Type TOPCon' },
            { label: 'Degradation (30yr)', value: '0.4% / yr' },
        ],
        description: 'The ultimate choice for Pakistani homes and businesses. High-density cell technology delivers massive power from a compact footprint, perfect for net-metering.',
        image: '/images/solar_panel_pro.png',
        link: '/products/panels/aes-580'
    },
    {
        id: 'aes-620',
        name: 'AES-Titan 620W C&I',
        marketEquivalent: 'Canadian Solar HiKu7 / JA Solar DeepBlue',
        specs: [
            { label: 'Max Output', value: '620W' },
            { label: 'Efficiency', value: '22.4%' },
            { label: 'Durability', value: 'Anti-PID / Sand Resistant' },
            { label: 'Bifaciality', value: 'Up to 85%' },
        ],
        description: 'Engineered for extreme climates. This dual-glass bifacial panel provides maximum yield for commercial installations and small-scale industries.',
        image: '/images/product_prompt_2.jpg',
        link: '/contact'
    },
    {
        id: 'aes-450',
        name: 'AES-HiMO 450W All-Black',
        marketEquivalent: 'Trina Vertex S / REC Alpha',
        specs: [
            { label: 'Max Output', value: '450W' },
            { label: 'Efficiency', value: '21.8%' },
            { label: 'Aesthetics', value: 'Premium All-Black' },
            { label: 'Warranty', value: '25 Years' },
        ],
        description: 'Elegant architectural design meets high performance. Ideal for residential applications where aesthetics and space constraints are critical.',
        image: '/images/solar_panel_pro.png', // Reusing black panel concept image
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
