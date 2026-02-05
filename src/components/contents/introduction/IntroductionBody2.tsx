'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function IntroductionBody2() {
    return (
        <div className="bg-brand-black py-24 md:py-32">
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-24"
                        >
                            <h3 className="text-brand-yellow text-xl md:text-2xl font-black tracking-widest uppercase mb-4">
                                Advisor's Advice
                            </h3>
                            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-tight italic">
                                벼랑영어 튜터들의 <br className="hidden md:block" />
                                <span className="text-brand-yellow">충언</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3 space-y-20">
                        {/* Advice 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-white text-2xl font-black tracking-tight border-b border-white/20 pb-4">
                                학원이나 강사에 계속 의지하지 마십시오.
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                그동안 영어가 잘 안됐다면, 혹은 지금부터 시간과 비용 낭비 없이 영어를 습득해 나가겠다면 '계속' 학원에 의지하면 안 됩니다. 학원은 올바른 학습방법으로 일정 기간 훈련을 시켜주는 곳을 선택하시기 바랍니다.
                            </p>
                        </motion.div>

                        {/* Advice 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-white text-2xl font-black tracking-tight border-b border-white/20 pb-4">
                                학습이 아니라 '습습'이 핵심입니다.
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                영어를 학원에서 '마스터할 수 있다'는 말은 절대 진실이 아닙니다. 가장 빠르고 실패 없이 영어를 언어화하는 방법은 배우는 '학습'이 아니라 스스로 '습득'하는 것입니다. 그 습관을 만들어주는 것이 학원의 역할입니다.
                            </p>
                        </motion.div>

                        {/* Final Motto */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-brand-yellow p-10 md:p-16 text-center shadow-2xl"
                        >
                            <h3 className="text-brand-black text-2xl md:text-4xl font-black tracking-tighter italic mb-8">
                                "영어는 나 스스로 습득해 나가야 한다"
                            </h3>
                            <p className="text-brand-black/80 text-lg font-bold leading-relaxed max-w-2xl mx-auto">
                                벼랑영어는 굳건한 영어 문리를 세워주고, 혼자서는 도저히 만들기 어려운 영어 습관을 아주 강렬하게 붙여드리는 곳입니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
