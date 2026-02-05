'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FLOW_STEPS = [
    {
        title: "Step 01: SP영상 해설",
        subtitle: "첫번째 시간 - 뉘앙스와 즐거움",
        content: "미드 or 애니메이션(SouthPark)을 보면서 뉘앙스를 익힙니다. 거리에서 들리는 현실적인 문장들로 가득 차 있으며, 재미있지 않으면 훈련할 수 없다는 철학을 구현합니다.",
        tip: "80문장을 스피킹하여 녹음 과제로 제출합니다."
    },
    {
        title: "Step 02: SP Vocabulary",
        subtitle: "두번째 시간 - 상황별 각인",
        content: "단순 암기가 아닌 상황과 이미지 연상을 통해 다음 회차 영상을 위한 토대를 마련합니다. 미리 익힌 어휘들은 다음 영상 시청 시 또렷하게 들리는 마법을 발휘합니다.",
        tip: "감각에 기억시켜두는 방식으로 복습합니다."
    },
    {
        title: "Step 03: EBD & 작문",
        subtitle: "세번째 시간 - 문리 체득",
        content: "쉬운 문장부터 복잡한 구조까지 750개 이상의 문장을 도해(Diagram)합니다. 영어식 사고와 어순을 몸에 붙여 듣고 말하는 모든 영역의 근간을 세웁니다.",
        tip: "순전히 영어 관점으로 문장을 배열해 봅니다."
    },
    {
        title: "Step 04: 문화 속 영어",
        subtitle: "네번째 시간 - 간접 체험",
        content: "영어권 나라의 일상, 상황, 뉘앙스, 그리고 사고의 차이를 간접 체험합니다. 가장 인기 있는 시간 중 하나로, 영어습관 만들기에 강한 자극을 줍니다.",
        tip: "언어는 곧 문화라는 점을 상기합니다."
    }
];

export function CourseBody3() {
    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12 mb-20">
                    <div className="md:w-1/4">
                        <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                            Class Flow
                            <span className="block text-lg font-bold text-gray-400 not-italic mt-2">가상수업 따라가보기</span>
                        </h3>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-xl font-bold text-brand-black leading-relaxed">
                            매 수업은 4개 섹션으로 구성됩니다. 3시간 동안 강렬하게 이어지는 벼랑영어의 수업 리듬을 확인해 보세요.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {FLOW_STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row bg-brand-gray/30 group-hover:bg-brand-gray/60 transition-colors border border-gray-100 shadow-sm overflow-hidden">
                                <div className="md:w-1/3 bg-brand-gray p-8 flex flex-col justify-center">
                                    <h4 className="text-brand-blue font-black text-2xl tracking-tighter">{step.title}</h4>
                                    <p className="text-gray-400 font-bold mt-1 tracking-tight">{step.subtitle}</p>
                                </div>
                                <div className="md:w-2/3 p-8 md:p-12 space-y-6 relative">
                                    {/* Decorative Number */}
                                    <span className="absolute top-2 right-4 text-7xl font-black text-brand-yellow/5 select-none">{idx + 1}</span>

                                    <p className="text-brand-black/80 font-medium leading-relaxed md:text-lg">
                                        {step.content}
                                    </p>

                                    <div className="flex items-center gap-2 text-brand-blue bg-white px-4 py-2 rounded shadow-sm w-fit group-hover:bg-brand-yellow transition-colors group-hover:text-brand-black">
                                        <span className="font-black text-xs">TIP</span>
                                        <span className="font-bold text-sm tracking-tight">{step.tip}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-brand-yellow/10 border-2 border-brand-yellow border-dashed text-center">
                    <h4 className="text-2xl font-black tracking-tighter mb-4">
                        "이 모든 것을 3개월 동안 제대로만 반복하면, <br />
                        무조건 영어습관이 붙습니다."
                    </h4>
                    <p className="text-gray-500 font-bold">
                        어느새 재미가 살짝 붙기 시작하면, 유창함까지 가속도가 붙습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
