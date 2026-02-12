import React from 'react';
import About from '../components/About';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pt-20"
        >
            <SEO
                title="Trusted Solar Energy Company"
                description="We are a trusted solar energy company focused on design, engineering excellence, and a long-term commitment to sustainability."
                keywords="solar energy company, renewable energy experts, clean energy provider"
            />
            <About />
        </motion.div>
    );
};

export default AboutPage;
