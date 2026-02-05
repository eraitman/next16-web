'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LpoPost } from './LpoPost';

export function HomeSection3() {
    return (
        <section
            className="relative min-h-[600px] flex items-center py-20 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: 'url("/bg.jpg")' }}
        >
            {/* Fallback gradient for mobile where bg-fixed might not work well */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/80 via-orange-500/80 to-brand-blue/80 md:hidden" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-black">
                            나도 영어를 하고야 말 <span className="underline decoration-brand-yellow decoration-8 underline-offset-4">운명</span>일까?
                        </h2>
                        <div className="text-lg md:text-xl font-bold leading-relaxed space-y-2 opacity-80">
                            <p>영어, 비법을 강조하는 학원들 천지입니다.</p>
                            <p>그러나 핵심을 말하자면,</p>
                            <p className="text-brand-blue bg-white/50 px-2 inline-block">
                                영어가 슬슬 재미있어지기 시작하면 게임 끝입니다.
                            </p>
                            <p>벼랑영어는 그 지점까지 강렬하게 이끌어주는 곳입니다.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white/95 p-8 md:p-12 shadow-2xl max-w-2xl border-t-8 border-brand-yellow"
                    >
                        {/* Design Element: Triangle from legacy */}
                        <div className="absolute -top-1 -left-1 w-0 h-0 border-t-[40px] border-t-brand-yellow border-r-[40px] border-r-transparent md:border-t-[60px] md:border-r-[60px]" />

                        <LpoPost />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
