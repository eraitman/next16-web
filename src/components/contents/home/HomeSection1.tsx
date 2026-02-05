'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HomeSection1() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Hero Content Area */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
            >
                {/* Mobile View */}
                <div className="block md:hidden">
                    <picture>
                        <source type="image/webp" srcSet="/768.webp" />
                        <img
                            src="/768_2x.jpg"
                            alt="Cliff English Training"
                            className="w-full h-auto object-cover"
                        />
                    </picture>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <picture>
                        <source type="image/webp" media="(max-width: 1365px)" srcSet="/1366.webp" />
                        <source type="image/webp" media="(min-width: 1366px)" srcSet="/1920.webp" />
                        <img
                            src="/1920.jpg"
                            alt="Cliff English Training"
                            className="w-full h-auto object-cover"
                        />
                    </picture>
                </div>

                {/* Overlay for Firmness (Optional shadow to help text readability if needed later) */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>
        </section>
    );
}
