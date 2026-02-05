'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SPIRIT_ITEMS = [
    {
        title: "결코, 학원들은 영어를 책임지지 않는다",
        content: "계속 학원에 의지해서는 영어 어렵습니다. 결국 스스로 꾸준히 해나가는 힘을 만들어야 하는데, 벼랑영어는 빠른 영어 홀로서기라는 선명한 목표를 가진, 수강자의 마지막 영어학원이 될 것입니다."
    },
    {
        title: "영어, 슬슬 재미만 붙기 시작하면 게임 끝이다",
        content: "저마다 영어비법을 휘황찬란하게 광고하지만 널린 것이 영어컨텐츠입니다. 자료나 도구가 없어서 영어 못하는 것이 아니라 힘든 공부로 느껴져 중단하기 때문입니다. 벼랑영어는 슬슬 재미있어지는 시점까지 강하게 밀어붙입니다."
    }
];

const FEATURES = [
    {
        title: "재수강 불가합니다",
        content: "단 한 번의 수강으로 영어습관을 붙여 홀로서기 하는 과정입니다. 제대로 따라오면 재수강은 불필요하며 허용되지도 않습니다."
    },
    {
        title: "계약 강사로 운영치 않습니다",
        content: "학원처럼 고용된 계약 강사가 아니며 벼랑영어를 설립한 강사들이 직접 강의, 지도합니다. 계약 강사를 투입하는 학원과는 사명감, 목표, 운영방식이 전혀 다릅니다."
    },
    {
        title: "과정은 단 1개만 운영합니다",
        content: "여느 학원처럼 과정이 여러 개로 나누어져 있지 않고 [영어홀로서기 3개월 과정] 단 1개만 운영됩니다. 아직 학원에 의지해야 하는 정도라면 어느 정도이냐와 상관없이 영어습관을 만들어야 하는 것은 어차피 동일하기 때문입니다."
    }
];

export function IntroductionBody1() {
    return (
        <div className="py-20 space-y-32">
            {/* 벼랑영어 스피릿 */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/4">
                        <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6">
                            SPIRIT
                            <span className="block text-lg font-bold text-gray-400 not-italic mt-2">벼랑영어 스피릿</span>
                        </h3>
                    </div>
                    <div className="md:w-3/4 grid md:grid-cols-2 gap-12">
                        {SPIRIT_ITEMS.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h4 className="text-xl font-black tracking-tight text-brand-blue">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 운영 특징 */}
            <section className="bg-brand-gray py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/4">
                            <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                                Features
                                <span className="block text-lg font-bold text-gray-400 not-italic mt-2">운정 특징</span>
                            </h3>
                        </div>
                        <div className="md:w-3/4 space-y-12">
                            {FEATURES.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 border-r-4 border-brand-yellow shadow-sm"
                                >
                                    <h4 className="text-xl font-black tracking-tight mb-4">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 찾아오시는 길 (Simplified for now) */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/4">
                        <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                            Location
                            <span className="block text-lg font-bold text-gray-400 not-italic mt-2">찾아오시는 길</span>
                        </h3>
                    </div>
                    <div className="md:w-3/4 space-y-6">
                        <div className="bg-brand-gray p-8 rounded-sm space-y-2 font-bold text-brand-black">
                            <p>위치 : 지하철 홍대입구역 1번 출구에서 90m, L7호텔 바로 뒤</p>
                            <p>주소 : 서울특별시 마포구 월드컵북로2길 11, 삼희빌딩 2층</p>
                        </div>
                        <div className="relative aspect-video overflow-hidden border-2 border-brand-gray">
                            <a href="https://map.naver.com/v5/entry/place/21634216" target="_blank" rel="noopener noreferrer">
                                <img src="/map.png" alt="Map" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
