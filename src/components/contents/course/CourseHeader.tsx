'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CourseHeader() {
    return (
        <section className="bg-brand-gray py-12 md:py-20 border-b border-brand-yellow/30">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-brand-black leading-tight">
                        만만한 과정이 아닙니다
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-brand-blue tracking-tight">
                        제대로 따라오면 다시 학원을 기웃거릴 일은 없습니다
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
