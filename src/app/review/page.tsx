"use client";

import React from "react";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { BoardList } from "@/components/board/BoardList";
import { motion } from "framer-motion";

export default function ReviewListPage() {
    return (
        <ApolloWrapper>
            <div className="flex flex-col w-full">
                {/* Header Section */}
                <section className="bg-brand-gray py-12 md:py-20 border-b border-brand-yellow/30">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-brand-black leading-tight">
                                수강효과는 <br className="md:hidden" />
                                <span className="text-brand-blue">정직하게</span> 나타납니다
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-gray-500 tracking-tight">
                                이 정도 학습분량, 정직한 훈련방법이면 효과없는 것이 이상합니다
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row gap-12 mb-20">
                            <div className="md:w-1/4">
                                <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                                    Real Voice
                                    <span className="block text-lg font-bold text-gray-400 not-italic mt-2">수료 소감</span>
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-6">
                                <p className="text-lg font-bold text-brand-black leading-relaxed">
                                    수료자 개개인이 느끼는 수강 효과는 실로 다양하게 나타납니다.
                                    학원측 설명보다는 수료자 개개인의 다양한 경험과 느낌을 통해 &apos;벼랑영어&apos;의 학습 분위기를 확인해 보세요.
                                </p>
                                <div className="p-6 bg-brand-gray/50 border-l-4 border-brand-blue text-xs font-bold text-gray-500 leading-relaxed italic">
                                    ※ 벼랑영어는 대행업체에 의뢰하는 등 거짓 후기를 올려놓는 자존심 없는 곳이 아닙니다.
                                    각 개인의 학습 경험을 고스란히 털어놓은 자발적 후기의 정형을 보실 수 있을 것입니다.
                                </div>
                            </div>
                        </div>

                        <React.Suspense fallback={<div className="py-20 text-center font-bold text-gray-400">Loading reviews...</div>}>
                            <BoardList />
                        </React.Suspense>
                    </div>
                </section>
            </div>
        </ApolloWrapper>
    );
}
