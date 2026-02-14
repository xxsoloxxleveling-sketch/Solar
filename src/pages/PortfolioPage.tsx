import React from 'react';
import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pt-20"
        >
            <SEO
                title="Our Solar Project Portfolio"
                description="Explore our portfolio of completed residential, commercial, and industrial solar installations. Case studies of high-performance energy systems."
                keywords="solar project portfolio, completed solar installations, residential solar projects"
            />
            <Portfolio />
        </motion.div>
    );
};

export default PortfolioPage;
