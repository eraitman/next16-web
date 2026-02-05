"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { ENROLLMENT_CONSTANTS } from "@/lib/constants/enrollment";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { clsx } from 'clsx'
import { Check, Info, AlertTriangle } from "lucide-react";

export default function EnrollmentPage() {
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
                                <span className="text-base md:text-lg block font-normal text-gray-500 mb-2">수강방식 비교</span>
                                출석반과 영상반
                            </h2>
                        </motion.div>
                    </div>
                </section>

                <div className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl space-y-32">

                        {/* Section 1: Class Type Comparison */}
                        <section className="space-y-12">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/4 sticky top-24">
                                    <h3 className="text-4xl font-black tracking-tighter border-l-8 border-brand-blue pl-6 uppercase">
                                        Type
                                        <span className="block text-lg font-bold text-gray-400 not-italic mt-2">수강 방식 선택</span>
                                    </h3>
                                    <p className="mt-4 text-gray-500 text-sm leading-relaxed pl-6">
                                        모든 반의 커리큘럼은 동일합니다.<br />
                                        본인의 상황에 맞는 방식을 선택하세요.
                                    </p>
                                </div>
                                <div className="md:w-3/4 w-full">
                                    <TabGroup defaultIndex={1}>
                                        <TabList className="flex gap-4 border-b border-gray-200 mb-8 overflow-x-auto">
                                            {['Comparison', '영상반 (Online)', '출석반 (Offline)'].map((name) => (
                                                <Tab
                                                    key={name}
                                                    className={({ selected }) =>
                                                        clsx(
                                                            'py-3 px-6 text-sm font-black uppercase tracking-widest outline-none transition-colors border-b-4 whitespace-nowrap',
                                                            selected ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-600'
                                                        )
                                                    }
                                                >
                                                    {name}
                                                </Tab>
                                            ))}
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <ComparisonTable />
                                            </TabPanel>
                                            <TabPanel>
                                                <ClassDetail type="online" />
                                            </TabPanel>
                                            <TabPanel>
                                                <ClassDetail type="offline" />
                                            </TabPanel>
                                        </TabPanels>
                                    </TabGroup>

                                    <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200 text-sm text-gray-600 space-y-2">
                                        <p className="flex items-start gap-2">
                                            <Info className="w-4 h-4 mt-0.5 text-brand-blue shrink-0" />
                                            <span>출석반은 오전수업(10:00~13:00)만 운영되며, 2026년 3월부터 모집이 시작됩니다.</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <Info className="w-4 h-4 mt-0.5 text-brand-blue shrink-0" />
                                            <span>강의 영상은 국내에서만 시청이 가능합니다. (<span className="text-red-500 font-bold">해외 시청 불가</span>)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Tuition */}
                        <section className="space-y-12">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/4 sticky top-24">
                                    <h3 className="text-4xl font-black tracking-tighter border-l-8 border-brand-yellow pl-6 uppercase">
                                        Tuition
                                        <span className="block text-lg font-bold text-gray-400 not-italic mt-2">수강료 안내</span>
                                    </h3>
                                </div>
                                <div className="md:w-3/4 w-full space-y-12">
                                    <div className="bg-brand-black text-white p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                                        <div>
                                            <h4 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-yellow mb-2">
                                                420,000 KRW
                                            </h4>
                                            <p className="text-gray-400 text-sm font-medium">/ 월 (영상반, 출석반 동일)</p>
                                        </div>
                                        <div className="text-right text-gray-300 text-sm space-y-1">
                                            <p>※ 학기 전체(3개월) 일시 수납하지 않음</p>
                                            <p>※ 첫 달 수강료만 납부하여 등록</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                                            <h5 className="font-bold text-lg mb-2">Simple & Fair</h5>
                                            <p className="text-sm text-gray-600">
                                                모두에게 동일한 단일 가격입니다. 마케팅을 위한 할인이나 조건부 가격 정책이 없습니다.
                                            </p>
                                        </div>
                                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                                            <h5 className="font-bold text-lg mb-2">No Hidden Cost</h5>
                                            <p className="text-sm text-gray-600">
                                                교재비, 입학금 등 추가 비용이 일절 없습니다. 표시된 금액이 최종 금액입니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Registration Status */}
                        <section className="space-y-12" id="register">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/4 sticky top-24">
                                    <h3 className="text-4xl font-black tracking-tighter border-l-8 border-red-500 pl-6 uppercase">
                                        Status
                                        <span className="block text-lg font-bold text-gray-400 not-italic mt-2">등록 현황</span>
                                    </h3>
                                </div>
                                <div className="md:w-3/4 w-full">
                                    <div className="mb-4 text-gray-600">
                                        현재 등록현황은 다음과 같습니다.
                                    </div>
                                    <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200 text-sm uppercase tracking-wider text-gray-600 font-bold">
                                                    <th className="p-6 bg-gray-100">편성 반 (등록시 선택)</th>
                                                    <th className="p-6 text-center bg-gray-100">개강 일</th>
                                                    <th className="p-6 text-center bg-gray-100">등록 가능 여부</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {/* Class A (Video - March) */}
                                                <tr className="hover:bg-gray-50/50 transition-colors bg-brand-yellow/5">
                                                    <td className="p-6">
                                                        <div className="font-bold text-brand-black text-lg">[A] 영상반 (3월 개강)</div>
                                                    </td>
                                                    <td className="p-6 font-mono text-center">{ENROLLMENT_CONSTANTS.OPEN_DATE.C}</td>
                                                    <td className="p-6 text-center">
                                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                                            등록 가능
                                                        </span>
                                                    </td>
                                                </tr>

                                                {/* Class B (Offline) */}
                                                <tr className="hover:bg-gray-50/50 transition-colors opacity-70">
                                                    <td className="p-6">
                                                        <div className="font-bold text-gray-500 text-lg">[B] 출석반</div>
                                                    </td>
                                                    <td className="p-6 font-mono text-center">{ENROLLMENT_CONSTANTS.OPEN_DATE.A}</td>
                                                    <td className="p-6 text-center">
                                                        <span className="inline-block px-3 py-1 bg-gray-100 text-red-500 text-xs font-bold rounded-full">
                                                            2026년 3월 차기 모집 예정
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-12 text-center">
                                        <Link
                                            href="/payment"
                                            className="inline-flex items-center gap-3 px-12 py-5 bg-brand-blue text-white text-xl font-black uppercase tracking-widest hover:bg-brand-black transition-colors rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            수강등록하기
                                            <span className="text-brand-yellow">→</span>
                                        </Link>
                                        <p className="mt-4 text-sm text-gray-500">
                                            간단한 입력 후 즉시 등록이 완료됩니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Refund Policy */}
                        <section className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/4">
                                    <h4 className="text-xl font-black text-gray-400 uppercase">Refund Policy</h4>
                                </div>
                                <div className="md:w-3/4 space-y-4 text-sm text-gray-600">
                                    <h5 className="font-bold text-brand-black text-lg">취소 및 환불 규정</h5>
                                    <p>
                                        벼랑영어는 평생교육법 시행령 제23조에 의거하여 투명하고 정직하게 환불 절차를 진행합니다.
                                        신용카드 결제 시 승인 취소, 계좌이체 시 즉시 환급 처리됩니다.
                                    </p>
                                    <div className="bg-white p-4 rounded border border-gray-200 text-xs space-y-2">
                                        <p className="flex items-start gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                                            <span className="font-bold text-red-500">유의사항</span>
                                        </p>
                                        <p>1. 취소 후 재신청 시, T/O가 없을 경우 대기자로 등록될 수 있습니다.</p>
                                        <p>2. 교재가 이미 발송된 경우, 왕복 택배비를 제외하거나 반납 확인 후 환불이 진행됩니다.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </ApolloWrapper>
    );
}

function ComparisonTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse min-w-[700px]">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-300">
                        <th className="p-4 border-r border-gray-200 text-center w-1/5">편성 반(명칭)</th>
                        <th className="p-4 border-r border-gray-200 text-center w-2/5">출석반</th>
                        <th className="p-4 text-center w-2/5">영상반</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">수강 형태</th>
                        <td className="p-4 border-r border-gray-200 text-center">대면 출석 수강</td>
                        <td className="p-4 text-center">비대면 영상 수강</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">수업 시간</th>
                        <td className="p-4 border-r border-gray-200 text-center">10:00 ~ 13:00</td>
                        <td className="p-4 text-center">매회 정해진 기간에 한해 반복 시청 가능</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">총 수업시간 / 횟수</th>
                        <td className="p-4 border-r border-gray-200 text-center">강의 90시간 / 30회 <br /> <span className="text-xs text-gray-500">※과제, 피드백 별도</span></td>
                        <td className="p-4 text-center text-brand-blue font-bold">출석수업 강의와 동일</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">매회 수업구성</th>
                        <td className="p-4 border-r border-gray-200 text-center">수업 3시간 + 과제부여, 피드백</td>
                        <td className="p-4 text-center">출석수업 강의와 동일</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">수업내용 / 분량</th>
                        <td className="p-4 border-r border-gray-200 text-center">
                            <Link href="/course" className="text-brand-blue underline">[과정안내]</Link>에 안내된 내용/분량
                        </td>
                        <td className="p-4 text-center">출석수업 강의와 동일</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">수업일정</th>
                        <td className="p-4 border-r border-gray-200 text-center">평일중 격일 수업 패턴</td>
                        <td className="p-4 text-center">3일 간격 수업 패턴</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">교재 지급</th>
                        <td className="p-4 border-r border-gray-200 text-center">현장 지급</td>
                        <td className="p-4 text-center">택배 발송</td>
                    </tr>
                    <tr>
                        <th className="p-4 bg-gray-50 font-bold text-gray-600 border-r border-gray-200 text-center">개강일자(가확정)</th>
                        <td className="p-4 border-r border-gray-200 text-center">{ENROLLMENT_CONSTANTS.OPEN_DATE.A}</td>
                        <td className="p-4 text-center font-bold">
                            {ENROLLMENT_CONSTANTS.OPEN_DATE.B}<br />
                            {ENROLLMENT_CONSTANTS.OPEN_DATE.C}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function ClassDetail({ type }: { type: 'online' | 'offline' }) {
    const isOnline = type === 'online';
    return (
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6">
            <h4 className="text-xl font-black text-brand-black flex items-center gap-2">
                {isOnline ? "🎬 영상반 특징" : "🏫 출석반 특징"}
            </h4>
            {isOnline ? (
                <table className="w-full text-sm text-left border-collapse mobile-table">
                    <tbody>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold w-1/4">수강 형태</td>
                            <td className="p-3 border-b border-gray-200">비대면 영상수강</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 시간</td>
                            <td className="p-3 border-b border-gray-200">매회 정해진 기간에 한해 반복 시청 가능</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">총 시간/횟수</td>
                            <td className="p-3 border-b border-gray-200">출석수업 강의와 동일</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">매회 수업구성</td>
                            <td className="p-3 border-b border-gray-200">출석수업 강의와 동일</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 내용 / 분량</td>
                            <td className="p-3 border-b border-gray-200">출석수업 강의와 동일</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 일정</td>
                            <td className="p-3 border-b border-gray-200">
                                3일 간격 수업 패턴
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">교재 지급</td>
                            <td className="p-3 border-b border-gray-200">택배 발송</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-bold">개강 일자(예정)</td>
                            <td className="p-3">
                                {ENROLLMENT_CONSTANTS.OPEN_DATE.B}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <table className="w-full text-sm text-left border-collapse mobile-table">
                    <tbody>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold w-1/4">수강 형태</td>
                            <td className="p-3 border-b border-gray-200">대면 출석수강</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 시간</td>
                            <td className="p-3 border-b border-gray-200">10:00 ~ 13:00</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">총 시간/횟수</td>
                            <td className="p-3 border-b border-gray-200">강의 90시간 / 출석 30회<br />※과제, 피드백 별도</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">매회 수업구성</td>
                            <td className="p-3 border-b border-gray-200">수업 3시간 + 과제부여 및 피드백</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 내용 / 분량</td>
                            <td className="p-3 border-b border-gray-200"><Link href="/course" className="text-brand-blue">[과정안내]</Link>에 안내된 내용/분량</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">수업 일정</td>
                            <td className="p-3 border-b border-gray-200">
                                평일중 격일 수업 패턴
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-gray-200 font-bold">교재 지급</td>
                            <td className="p-3 border-b border-gray-200">현장 지급</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-bold">개강 일자(예정)</td>
                            <td className="p-3">
                                {ENROLLMENT_CONSTANTS.OPEN_DATE.A}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
            <div className="text-xs text-gray-500 mt-4 leading-relaxed bg-white p-4 rounded border border-gray-200">
                {isOnline ? (
                    <>
                        <p>· 수도권 외곽지역, 지방 학습자의 꾸준한 요청에 의해 개설된 반</p>
                        <p>· 학습 시간대 매회 개인 자율 선택 및 반복 학습 가능</p>
                        <p>· 학원 이동시간 소요가 없어 시간적으로 상당한 효율</p>
                    </>
                ) : (
                    <>
                        <p>· 매번 출석해야하므로 무언의 강제력의 도움을 받을 수 있음</p>
                        <p>· 학원이 가깝거나 교통연결이 편리할 경우 이동부담은 줄어듦</p>
                    </>
                )}
            </div>
        </div>
    )
}
