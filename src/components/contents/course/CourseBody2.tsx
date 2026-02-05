'use client';

import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
    {
        category: "어휘 익히기",
        quotes: [
            { text: "그림으로 연상하며 미국인들이 실생활에서 쓰는 단어들을 접할 수 있어서 좋았어요. 재미있게 암기하고 기억에도 오래 남습니다.", author: "ashysh님" },
            { text: "상황과 감정으로 진짜 내 것이 되는 기분입니다. 단어를 일대일 대응으로 외우는 것의 위험성을 노련하게 탈피합니다.", author: "오전b반님" }
        ]
    },
    {
        category: "영상 보고 듣기",
        quotes: [
            { text: "영상을 문장 단위로 끊어서 시청하며 뉘앙스를 익힙니다. 3시간 동안 롤러코스터를 타는 기분입니다.", author: "Rockeynes님" },
            { text: "매일매일 시간날때마다 너무너무 재밌게 하고 있습니다. 이제는 영상들이 귀에 쏙쏙 들어와요.", author: "kongjui7님" }
        ]
    },
    {
        category: "스피킹 과제",
        quotes: [
            { text: "벼랑영어의 꽃, 할 말이 많은 애증의 과제입니다. 하지만 '말로 승화됨'을 실감하게 하는 결정적인 순간이죠.", author: "velvet_underground님" },
            { text: "피드백을 통해 제 목소리가 자연스러워지는 것을 느낍니다. 매주 성장하는 느낌이 좋습니다.", author: "eirene님" }
        ]
    },
    {
        category: "문장구조 훈련(EBD)",
        quotes: [
            { text: "영어 실력이 있다고 생각했는데도 배워가는게 많았습니다. 문장을 분해하고 도해하며 공식이 아닌 본질을 깨닫습니다.", author: "Knowingandlovin님" },
            { text: "문법 바보인 제가 문장을 분석하게 되었습니다. 초보분들에겐 가장 실용적으로 도움이 될 기법입니다.", author: "jiinjiin님" }
        ]
    }
];

export function CourseBody2() {
    return (
        <section className="bg-brand-black py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h3 className="text-brand-yellow text-xl font-black tracking-widest uppercase mb-4">Real Voice</h3>
                    <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter italic">
                        수료자가 말하는 <br className="md:hidden" />
                        <span className="text-brand-yellow underline decoration-white/20 underline-offset-8">부위별 재미</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {REVIEWS.map((section, sidx) => (
                        <div key={sidx} className="space-y-8">
                            <h4 className="text-brand-yellow font-black border-b border-white/20 pb-2 italic uppercase tracking-tighter">
                                {section.category}
                            </h4>
                            {section.quotes.map((quote, qidx) => (
                                <motion.div
                                    key={qidx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: qidx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 border-l-2 border-brand-yellow/50 backdrop-blur-sm group hover:bg-white/10 transition-colors"
                                >
                                    <p className="text-gray-300 font-medium leading-relaxed italic mb-4">
                                        &quot;{quote.text}&quot;
                                    </p>
                                    <span className="text-brand-yellow text-xs font-bold font-serif">— {quote.author}</span>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
