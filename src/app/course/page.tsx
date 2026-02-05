"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { Check, Quote, BookOpen, Video, PenTool, Globe } from "lucide-react";

export default function CoursePage() {
    return (
        <ApolloWrapper>
            <div className="flex flex-col w-full font-sans text-gray-800">
                {/* Header Section */}
                <section className="bg-brand-gray py-12 md:py-20 border-b border-brand-yellow/30">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-black leading-tight">
                                만만한 과정이 아닙니다
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-gray-500 tracking-tight">
                                <span className="text-brand-blue">제대로 따라오면</span> 다시 학원을 기웃거릴 일은 없습니다
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Part 1: Course Summary (body__01__r2.js) */}
                <section className="py-20 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6 max-w-7xl space-y-24">

                        {/* Summary Table */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase">
                                    Summary
                                    <span className="block text-sm font-bold text-gray-400 mt-2">과정 요약</span>
                                </h3>
                            </div>
                            <div className="md:w-3/4">
                                <div className="bg-gray-50 border-t-2 border-brand-black p-8 text-sm md:text-base leading-loose space-y-2 rounded-b-xl">
                                    <p><strong className="font-bold mr-2 text-lg">운영과정</strong> 영어홀로서기 (단일 과정만 운영)</p>
                                    <p><strong className="font-bold mr-2 text-lg">과정기간</strong> 총 3개월</p>
                                    <p><strong className="font-bold mr-2 text-lg">수강형태</strong> 출석대면 수업 / 온라인 영상시청</p>
                                    <p><strong className="font-bold mr-2 text-lg">수업정원</strong> 정원 48명</p>
                                    <p><strong className="font-bold mr-2 text-lg">수업분량</strong> 기본수업 3시간/회 <br className="md:hidden" /> <span className="text-gray-500">(기본수업 외 과제, 스피킹 피드백 등 별도)</span></p>
                                    <p><strong className="font-bold mr-2 text-lg">개강주기</strong> 출석반:3개월 / 영상반:매월 개강</p>

                                    <div className="mt-4 bg-white border border-gray-200 p-4 rounded text-center md:inline-block">
                                        ※ <strong>가장 빠른 개강 일정</strong> : '26년 3월 개강 (영상반)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Core Principles */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase">
                                    Principals
                                    <span className="block text-sm font-bold text-gray-400 mt-2">핵심 원리</span>
                                </h3>
                                <p className="mt-4 text-sm text-gray-500 pl-6">영어 홀로서기를 위한 두 가지 접근 방식</p>
                            </div>
                            <div className="md:w-3/4 space-y-12">
                                <p className="text-lg font-medium text-gray-700">
                                    서로 다른 특징을 가진 두 가지 영어습득 방식을 동시에 진행합니다.
                                </p>

                                <div className="relative w-full max-w-2xl aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                        src="/image/course_7.png"
                                        alt="Core Principles Diagram"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-brand-blue/5 p-8 rounded-xl border border-brand-blue/10">
                                        <h4 className="text-xl font-black text-brand-blue mb-4">[방식 1] 컨텐츠 즐기기</h4>
                                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                            영어 컨텐츠를 직접 보고 듣고 이해하며, 함께 즐겨보는 강의와 과제로 구성됩니다.<br />
                                            이를 통해 수료 후, 수많은 영어 컨텐츠를 이용하여 스스로 내 영어를 향상시키는 방법을 체득해 나갑니다.
                                        </p>
                                        <ul className="text-sm space-y-2 text-gray-600 bg-white p-4 rounded-lg">
                                            <li className="flex gap-2"><span className="text-brand-blue font-bold">•</span> 관련 수업 : 어휘 익히기, 영상 해설 수업</li>
                                            <li className="flex gap-2"><span className="text-brand-blue font-bold">•</span> 관련 과제 : 스피킹 훈련, 영상 초벌 보기/듣기, 어휘 복습 등</li>
                                        </ul>
                                    </div>
                                    <div className="bg-brand-yellow/10 p-8 rounded-xl border border-brand-yellow/20">
                                        <h4 className="text-xl font-black text-amber-600 mb-4">[방식 2] 기초체력 쌓기</h4>
                                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                            영어 컨텐츠를 즐기기 위해선 일정 수준이상의 실력이 필요한 것도 사실입니다.<br />
                                            이런 딜레마를 해소하기 위해, 문장 원리를 이해하는 훈련으로 짧은 기간 집중하여 영어 기초체력을 쌓아갑니다.
                                        </p>
                                        <ul className="text-sm space-y-2 text-gray-600 bg-white p-4 rounded-lg">
                                            <li className="flex gap-2"><span className="text-amber-600 font-bold">•</span> 관련 수업 : 문장구조 체득 훈련(EBD), 영어권 문화 이해, 원서 해설</li>
                                            <li className="flex gap-2"><span className="text-amber-600 font-bold">•</span> 관련 과제 : EBD 과제, 원서 읽기 등</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Class Method */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase">
                                    Method
                                    <span className="block text-sm font-bold text-gray-400 mt-2">수업 방식</span>
                                </h3>
                            </div>
                            <div className="md:w-3/4 text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    강의는 강사가 진도에 맞춰 직접 이끌어 나가며, 이후 세부적인 부분(과제 독려, 상담, 질의 응답 등)을 튜터들이 서포트하는 방식입니다.<br />
                                    수업시간에 한 명씩 돌아가면서 문장을 읽거나 말해본다든지, 짝을 이루어 주고 받고 해보는 방식은 사용치 않습니다.
                                </p>
                                <div className="bg-red-50 border border-red-100 p-6 rounded-lg text-red-800 text-sm font-bold">
                                    [중요!] 언어 습득은 많은 분량과 횟수의 반복 훈련일 수 밖에 없으므로, 강의 중에 잠깐 연습하는 것으로는 거의 무의미하다고 보기 때문입니다.<br />
                                    반복 숙달과 관련된 모든 부분은 충분한 시간을 투자할 수 있는 과제의 형태로 부여됩니다.
                                </div>
                            </div>
                        </div>

                        {/* Actual Class Composition */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase">
                                    Composition
                                    <span className="block text-sm font-bold text-gray-400 mt-2">실제 수업 구성</span>
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-12">
                                <div>
                                    <div className="inline-block bg-brand-black text-white px-3 py-1 text-sm font-bold rounded mb-4">수업</div>
                                    <span className="ml-2 font-medium text-gray-500">1회 3시간 / 총 30회 90시간</span>
                                    <p className="mb-4 text-gray-700">다음의 강의가 매 수업 시간내에 나뉘어 진행됩니다.</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "[핵심1] 어휘와 표현 익히기 강의",
                                            "[핵심2] 영상컨텐츠 시청 및 해설 강의",
                                            "[핵심3] 문장구조 체득 훈련 (EBD)",
                                            "(+α) 영어원서 읽기",
                                            "(+α) 영어권 문화 이해",
                                            "(+α) 다양한 원포인트 레슨"
                                        ].map((item, idx) => (
                                            <li key={idx} className="bg-gray-50 p-3 rounded border border-gray-100 text-sm font-bold text-gray-700">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-sm text-gray-500">※ 더 상세한 수업진행 흐름은 하단 <a href="#flow" className="text-brand-blue underline text-bold">[가상수업 따라가보기]</a> 를 참고하시기 바랍니다.</p>
                                </div>

                                <div>
                                    <div className="inline-block bg-brand-black text-white px-3 py-1 text-sm font-bold rounded mb-4">과제</div>
                                    <span className="ml-2 font-medium text-orange-500 font-bold">영어습관의 핵심</span>
                                    <div className="text-gray-700 space-y-3">
                                        <p>
                                            영어습관을 만들기 위한 <span className="text-brand-yellow bg-black px-1 rounded">정확하고, 올바른 훈련 방법</span>을 체득합니다.<br />
                                            과제에 더 많은 시간을 투자할수록, 더 많은 성과가 나타납니다.
                                        </p>
                                        <p className="font-bold underline">딱 3개월 만큼은 올인해야만 합니다.</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm bg-gray-50 p-4 rounded-lg">
                                            <li>문장구조 체득 훈련(EBD) 과제 21회 (약 750개 문장)</li>
                                            <li>스피킹을 위한 작문 훈련 21회 (작문 약 210문장)</li>
                                            <li>스피킹 녹음제출 과제 10회</li>
                                            <li>전 영역에 걸친 다양한 예습, 복습 과제</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block bg-brand-black text-white px-3 py-1 text-sm font-bold rounded mb-4">교재</div>
                                    <span className="ml-2 text-xs text-gray-400">※ 교재비는 별도 납부하지 않습니다</span>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li>① 벼랑영어 자체제작 교재 : 3개월 총 6권, 전체 약 1,000p 분량</li>
                                        <li>② 미국 애니메이션 Southpark 을 중심으로 한 비디오, 오디오, 스크립트.</li>
                                        <li>③ 영어권 문화 속 살아있는 영어 (각종 미디어)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Part 2: Reviews (body__02.js) */}
                <section className="py-20 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h3 className="text-lg font-bold text-brand-orange mb-2 font-serif opacity-80">
                                영어, 슬슬 재미있어지면 게임 끝이라는데...
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-black text-brand-black">
                                수료자별 다르게 느끼는 재미
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <ReviewCard title="SP 어휘 익히기" icon={<BookOpen size={20} />}>
                                <ReviewItem author="ashysh님" link="/review?id=822">
                                    그 어디에서도 배울 수 없었던 미국인들이 실생활에서 쓰는 단어들을(방귀, 소변, 대변 등등..) 많이 접할 수 있어서 좋았어요. 재미있게 암기하고 기억에도 오래 남아서 유익했습니다.
                                </ReviewItem>
                                <ReviewItem author="오전b반님" link="/review?id=836">
                                    글자가 아닌 그 상황과 감정으로 진짜 내것이 되는 기분
                                </ReviewItem>
                            </ReviewCard>

                            <ReviewCard title="SP영상 보고 듣기" icon={<Video size={20} />}>
                                <ReviewItem author="Rockeynes님" link="/review?id=854">
                                    문장을 듣고 선생님이 바로 해석해 주시는 방식입니다.
                                </ReviewItem>
                                <ReviewItem author="kongjui7님" link="/review?id=835">
                                    매일매일 시간날때마다 너무너무 재밌게 하고 있습니다.
                                </ReviewItem>
                                <ReviewItem author="벼랑벼랑벼랑끝님" link="/review?id=829">
                                    생각과 감정이 오르락 내리락하는 기분을 느끼게 해줍니다.
                                </ReviewItem>
                            </ReviewCard>

                            <ReviewCard title="스피킹 과제와 피드백" icon={<Quote size={20} />}>
                                <ReviewItem author="velvet_underground님" link="/review?id=839">
                                    정말 할 말이 많은 애증의 과제...
                                </ReviewItem>
                                <ReviewItem author="eirene님" link="/review?id=853">
                                    스피킹과제를 하며 ‘연기한 문장이 말로 승화됨’을 실감했습니다.
                                </ReviewItem>
                            </ReviewCard>

                            <ReviewCard title="문장구조 체득 훈련(EBD)" icon={<PenTool size={20} />}>
                                <ReviewItem author="Rockeynes님" link="/review?id=854">
                                    절대 공식처럼 암기하지 않습니다. 문장을 분해하고 도해함으로써 자연스럽게 문법을 익히게 됩니다.
                                </ReviewItem>
                                <ReviewItem author="jiinjiin님" link="/review?id=837">
                                    벼랑영어 커리큘럼 중 초보 분들에겐 가장 실용적으로 도움이 될 기법이라고 생각됩니다.
                                </ReviewItem>
                            </ReviewCard>

                            <ReviewCard title="문화속 영어" icon={<Globe size={20} />}>
                                <ReviewItem author="벼랑보리랑님" link="/review?id=834">
                                    ‘언어=문화’ 인 점을 다시 한번 상기시켜 주었습니다.
                                </ReviewItem>
                                <ReviewItem author="아름드리1님" link="/review?id=832">
                                    오늘은 무슨 말씀을 하시려나 은근 기대한답니다.
                                </ReviewItem>
                            </ReviewCard>

                            <ReviewCard title="Book-Reading (3개월 차)" icon={<BookOpen size={20} />}>
                                <ReviewItem author="bbangH님" link="/review?id=789">
                                    읽으면서 '어? 이거 배웠던거다' 하면서 좋아하고 그랬네요.
                                </ReviewItem>
                                <ReviewItem author="영어회화님" link="/review?id=852">
                                    원서 한 권을 완독했다니 신기하기도 하고 계속 읽을 수 있는 용기도 생겼습니다.
                                </ReviewItem>
                            </ReviewCard>

                        </div>
                    </div>
                </section>

                {/* Part 3: Class Flow (body__03.js) */}
                <section className="py-20 bg-white" id="flow">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h3 className="text-lg font-bold text-brand-orange mb-2 font-serif opacity-80">
                                아직도 감이 잡히지 않는다면...
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-black text-brand-black">
                                가상수업 따라가보기
                            </h2>
                            <p className="mt-4 text-gray-500">매 수업은 3~4개 섹션으로 구분, 진행됩니다.</p>
                        </div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <FlowStep number="01" title="수업 첫 시간" subtitle="SP영상 해설">
                                <p>첫 번째 시간은 미드 or 애니메이션을 보면서 듣고 말하는 훈련 영역입니다. 근래에는 미국 애니 SouthPark을 선택하고 있습니다.(이하 ‘SP영상’이라 표현).</p>
                                <p>가장 중요한 것은 재미있다는 것입니다. 아무리 좋아도 재미가 없으면 계속 훈련할 교재로는 부적격입니다.</p>
                                <p>수업 첫 시간은 이렇게 SP영상을 같이 보면서 튜터의 상세한 해설을 듣습니다.</p>
                                <div className="bg-blue-50 p-4 rounded mt-4 text-sm text-blue-900">
                                    <strong>☞ 첫째 시간 수업 후 자동 부여되는 과제</strong><br />
                                    SP영상 스크립트를 여러 번 읽는 것, 80문장은 입에서 말로서 자연스럽게 스피킹될 때까지 훈련한 후 녹음하여 파일로 제출.
                                </div>
                            </FlowStep>

                            {/* Step 2 */}
                            <FlowStep number="02" title="수업 둘째 시간" subtitle="SP Vocabulary">
                                <p>두 번째 시간은 다음 회차 수업 시간에 볼 SP영상 에피소드에 대한 Vocabulary를 학습합니다.</p>
                                <p>이 시간은 단순히 '단어, 숙어 익히기'가 아닙니다. 외우는 것이 아니라 활용하는 목표로 익히는 훈련을 하는 것입니다.</p>
                                <p>이렇게 미리 익혀 둔 어휘들은 다음 회차 수업의 SP영상 보고 듣기, 말하기 훈련하는데 막강한 힘을 발휘합니다.</p>
                                <div className="bg-blue-50 p-4 rounded mt-4 text-sm text-blue-900">
                                    <strong>☞ 둘째 시간 수업 후 자동 부여되는 과제</strong><br />
                                    Voca는 반드시 복습해야 합니다. 단어의 의미를 문장 속에서 이해하고, 이미지를 통해 각인하며, 수차례 스피킹을 해서 '감각에 기억시켜두는' 방식으로 익힙니다.
                                </div>
                            </FlowStep>

                            {/* Step 3 */}
                            <FlowStep number="03" title="수업 셋째 시간" subtitle="문장 구조파악훈련(EBD)과 작문 수업">
                                <p>세 번째 시간은 아주 쉬운 문장부터 매우 길고 복잡한 문장까지 영어 문리 체득에 도움이 되는 문장을 선별하여, 매 수업 20~30문장을 EBD(English Body Diagram)를 통해 이해하고, 다시 작문해보는 훈련을 합니다.</p>
                                <p>언어의 체계가 곧 문리(文理)인데 이것을 몸에 붙이는 것이 EBD 수업의 목표입니다.</p>
                                <p>EBD 수업 후, 곧바로 작문 수업이 진행됩니다. 배운 문장구조를 토대로 새로운 문장을 만들어 보면서, 스피킹을 위한 기초를 쌓아갑니다.</p>
                                <div className="bg-blue-50 p-4 rounded mt-4 text-sm text-blue-900">
                                    <strong>☞ 셋째 시간 수업 후 자동 부여되는 과제</strong><br />
                                    25개 내외의 문장을 도해하는 과제가 부여됩니다. 그런 다음 해당 문장이 쓰일만한 상황을 연상하면서 스피킹 훈련을 합니다.
                                </div>
                            </FlowStep>

                            {/* Step 4 */}
                            <FlowStep number="04" title="수업 넷째 시간" subtitle="문화 속 영어">
                                <p>‘문화 속 영어’ 라는 타이틀을 가진 시간입니다.</p>
                                <p>영어권 나라의 일상에서 흔히 볼 수 있는 상황, 표현, 뉘앙스는 물론, 영어식 사고, 문화의 차이 등을 간접 체험하는 시간입니다.</p>
                                <p>이 수업은 모든 수강자가 대단히 좋아하는 시간인데, 재미도 있고 신선하지만 무엇보다도 영어습관 만들기에 있어 강한 자극이 되기 때문입니다.</p>
                            </FlowStep>

                            <div className="bg-gray-100 p-8 rounded-xl text-center space-y-4 border border-gray-200">
                                <p className="font-bold text-lg">이상이 표준적인 한 세트(한 회차)의 수업과 학습내용입니다.</p>
                                <p className="text-gray-600">
                                    여러 가지 Tool이 사용되고 자료를 다양하게 활용하지만 간단히 요약하면<br />
                                    <span className="text-brand-blue font-black text-xl block mt-2">‘3개월 동안 대단히 많은 분량의 영어문장을 읽고, 배열해 보고, 듣고 말해보는 것’</span>
                                    이라 정의할 수 있습니다.
                                </p>
                                <div className="pt-6">
                                    <Link href="/review/list" className="text-gray-500 underline hover:text-brand-blue transition-colors">
                                        [수강효과] 메뉴에서 수료자들의 소감 더보기
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </ApolloWrapper>
    );
}

function ReviewCard({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="flex items-center gap-2 font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
                <span className="text-brand-blue">{icon}</span>
                {title}
            </h4>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    )
}

function ReviewItem({ author, children, link }: { author: string, children: React.ReactNode, link: string }) {
    return (
        <div className="text-sm text-gray-600 leading-relaxed">
            <p className="italic mb-1">"{children}"</p>
            <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-gray-400">- {author}</span>
                <Link href={link} className="text-blue-300 hover:text-blue-500 hover:underline">
                    원문보기
                </Link>
            </div>
        </div>
    )
}

function FlowStep({ number, title, subtitle, children }: { number: string, title: string, subtitle: string, children: React.ReactNode }) {
    return (
        <div className="flex gap-6 md:gap-8">
            <div className="shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-black text-brand-yellow flex items-center justify-center font-black text-xl md:text-2xl shadow-lg z-10">
                    {number}
                </div>
                <div className="w-0.5 h-full bg-gray-200 mt-[-10px] mb-[-40px]"></div>
            </div>
            <div className="pb-12 w-full">
                <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-sm hover:border-brand-blue/30 transition-colors">
                    <h4 className="text-brand-blue text-sm font-bold uppercase tracking-widest mb-1">{title}</h4>
                    <h3 className="text-xl md:text-2xl font-black text-brand-black mb-4">{subtitle}</h3>
                    <div className="text-gray-600 space-y-3 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
