'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function IntroductionHeader() {
    return (
        <section className="bg-brand-gray py-12 md:py-20 border-b border-brand-yellow/30">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <p className="text-xs md:text-sm font-bold text-brand-black/60 uppercase tracking-widest">
                        2008 설립 | 매년 4개 학기만 개설 | 한정 정예 수료자 약 450명(年)
                    </p>
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-brand-black leading-tight">
                        영어, 제대로 한번 <br className="md:hidden" />
                        해볼 수 있는 곳입니다
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-brand-blue tracking-tight">
                        커리큘럼은 독특하면서 정직합니다
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
