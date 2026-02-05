'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LINKS = [
    { label: '벼랑영어?', href: '/introduction' },
    { label: '과정안내', href: '/course' },
    { label: '수강효과', href: '/review/list' },
    { label: '수강요건', href: '/requirement' },
    { label: '수강등록', href: '/enrollment' },
];

export function HomeSection4() {
    return (
        <section className="bg-gradient-to-b from-brand-black to-[#000] py-32 md:py-48 flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="text-xl md:text-3xl text-gray-400 font-light tracking-widest uppercase">
                        그동안 영어가 안됐다면
                    </h2>
                    <h3 className="text-3xl md:text-6xl text-white font-black tracking-tighter">
                        <span className="text-brand-yellow">운명적 대전환</span>이 필요합니다.
                    </h3>
                </div>

                <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-x-8">
                    {LINKS.map((link, index) => (
                        <React.Fragment key={link.href}>
                            <Link
                                href={link.href}
                                className="text-brand-yellow text-lg md:text-xl font-bold hover:text-white transition-colors tracking-tight"
                            >
                                {link.label}
                            </Link>
                            {index < LINKS.length - 1 && (
                                <span className="text-gray-700 hidden sm:inline text-xl">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            </motion.div>
        </section>
    );
}
