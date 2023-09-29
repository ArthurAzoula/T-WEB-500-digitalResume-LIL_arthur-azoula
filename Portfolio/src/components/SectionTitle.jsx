import React from 'react';
import { motion } from 'framer-motion';

function SectionTitle({ title }) {
    return (
        <motion.h1
            className="text-4xl font-extrabold text-center mb-6 underline underline-offset-4 text-champagne"
            style={{ borderBottom: '2px solid #8c705f', paddingBottom: '4px' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {title}
        </motion.h1>
    );
}

export default SectionTitle;
