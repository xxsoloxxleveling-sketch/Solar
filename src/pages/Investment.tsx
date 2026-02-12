import React from 'react';
import ROICalculator from '../components/ROICalculator';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Investment: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pt-20"
        >
            <SEO
                title="Solar ROI Calculator"
                description="Calculate your potential return on investment with our Solar ROI Calculator. Estimate 10-year savings and payback period."
                keywords="solar ROI calculator, solar investment return, solar savings calculator"
            />
            <ROICalculator />
        </motion.div>
    );
};

export default Investment;
