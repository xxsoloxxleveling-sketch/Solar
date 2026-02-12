import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pt-20"
        >
            <SEO
                title="Request a Solar Energy Consultation"
                description="Contact ARYIAN'S Energy Solution to request a private consultation. Expert energy audits and solar system design for your home or business."
                keywords="solar consultation, request solar quote, energy audit consultation"
            />
            <Contact />
        </motion.div>
    );
};

export default ContactPage;
