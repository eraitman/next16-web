'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HomeSection2() {
    return (
        <section className="bg-brand-black py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-tight italic">
                        벼랑영어는 <span className="text-brand-yellow">재수강</span>을 받지 않습니다.
                    </h2>

                    <div className="border-l-4 border-brand-yellow pl-8 space-y-4">
                        <ul className="text-white/90 text-lg md:text-2xl font-bold tracking-tight space-y-6 list-none">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
                                학원 내 단 하나의 과정만 개설, 전 튜터 집중
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
                                [듣기-말하기-읽기-쓰기] 를 동시 트레이닝
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
                                수료자 입소문으로 알려진 독특한 커리큘럼
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
