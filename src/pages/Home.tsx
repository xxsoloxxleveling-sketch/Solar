import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import RoofVisualizer from '../components/RoofVisualizer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <SEO
                title="Premium Solar Energy Solutions"
                description="ARYIAN'S Energy Solution provides high-end solar energy solutions for modern homes and businesses. Expert installation of smart solar systems designed for performance and aesthetics."
                keywords="premium solar energy solutions, high-end solar company, solar power solutions provider"
            />
            <Hero />
            <About />
            <Services />
            <RoofVisualizer />
        </motion.div>
    );
};

export default Home;
