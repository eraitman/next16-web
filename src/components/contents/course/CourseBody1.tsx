'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SUMMARY_DATA = [
    { label: "운영과정", value: "영어홀로서기 (단일 과정만 운영)" },
    { label: "과정기간", value: "총 3개월" },
    { label: "수강형태", value: "출석대면 수업 / 온라인 영상시청" },
    { label: "수업정원", value: "정원 48명" },
    { label: "수업분량", value: "기본수업 3시간/회 (과제, 피드백 등 별도)" },
    { label: "개강주기", value: "출석반: 3개월 / 영상반: 매월 개강" },
];

export function CourseBody1() {
    return (
        <div className="py-20 space-y-32">
            {/* 과정 요약 */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/4">
                        <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                            Summary
                            <span className="block text-lg font-bold text-gray-400 not-italic mt-2">과정 요약</span>
                        </h3>
                    </div>
                    <div className="md:w-3/4">
                        <div className="bg-brand-gray/50 p-8 md:p-12 border border-gray-200">
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {SUMMARY_DATA.map((item, idx) => (
                                    <div key={idx} className="flex flex-col space-y-1">
                                        <dt className="text-sm font-black text-brand-blue uppercase tracking-wider">{item.label}</dt>
                                        <dd className="text-lg font-bold text-brand-black">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-12 p-4 bg-white border-l-4 border-brand-yellow text-brand-black shadow-sm">
                                <p className="font-bold flex items-center gap-2 text-sm italic">
                                    <span className="bg-brand-yellow px-2 py-0.5 rounded text-[10px] not-italic">NOTICE</span>
                                    가장 빠른 개강 일정 : &apos;26년 3월 개강 (영상반)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 핵심 원리 */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/4">
                        <h3 className="text-4xl font-black tracking-tighter italic border-l-8 border-brand-yellow pl-6 uppercase">
                            Principles
                            <span className="block text-lg font-bold text-gray-400 not-italic mt-2">핵심 원리</span>
                        </h3>
                    </div>
                    <div className="md:w-3/4 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-2xl font-black tracking-tight text-brand-black bg-brand-yellow px-4 py-2 inline-block">
                                영어 홀로서기를 위한 두 가지 접근 방식
                            </h4>
                            <p className="text-lg font-bold text-gray-600 leading-relaxed">
                                서로 다른 특징을 가진 두 가지 영어습득 방식을 동시에 진행합니다.
                            </p>

                            <div className="my-10 bg-white p-8 border-2 border-brand-gray shadow-xl rounded-sm">
                                <img
                                    src="/course_7.png"
                                    alt="EBD Diagram"
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 mx-auto max-w-2xl"
                                />
                                <p className="text-center text-xs text-gray-400 mt-4 italic">[English Body Diagram Principle]</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4 border-t-4 border-brand-blue pt-6">
                                    <h5 className="text-xl font-black text-brand-blue">[방식 1] 컨텐츠 즐기기</h5>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        영어 컨텐츠를 직접 보고 듣고 이해하며, 함께 즐겨보는 강의와 과제로 구성됩니다.
                                        수료 후 스스로 내 영어를 향상시키는 방법을 체득합니다.
                                    </p>
                                    <ul className="text-sm font-bold text-gray-400 space-y-1">
                                        <li>• 관련 수업: 어휘 익히기, 영상 해설 수업</li>
                                        <li>• 관련 과제: 스피킹 훈련, 영상 초벌 보기, 어휘 복습</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 border-t-4 border-brand-blue pt-6">
                                    <h5 className="text-xl font-black text-brand-blue">[방식 2] 기초체력 쌓기</h5>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        문장 원리를 이해하는 훈련으로 짧은 기간 집중하여 기초체력을 쌓습니다.
                                        EBD 도해 훈련을 통해 영어 문리(文理)를 몸에 붙입니다.
                                    </p>
                                    <ul className="text-sm font-bold text-gray-400 space-y-1">
                                        <li>• 관련 수업: EBD 문장구조 훈련, 원서 해설</li>
                                        <li>• 관련 과제: EBD 도해 과제, 원서 읽기</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
