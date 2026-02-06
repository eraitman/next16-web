"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

export default function IntroductionPage() {
    // Legacy Images from public folder
    const cliffImages = [
        "/cliff01.jpg", "/cliff02.jpg", "/cliff03.jpg", "/cliff04.jpg",
        "/cliff05.jpg", "/cliff06.jpg", "/cliff07.jpg", "/cliff08.jpg",
        "/cliff09.jpg", "/cliff10.jpg", "/cliff11.jpg"
    ];

    return (
        <ApolloWrapper>
            <div className="flex flex-col w-full font-sans text-gray-800">
                {/* Header Section (from index.js) */}
                <section className="bg-brand-gray py-12 md:py-20 border-b border-brand-yellow/30">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="text-gray-900 text-sm md:text-xs mb-2">
                                2008설립 | 매년 4개 학기만 개설 | 한정 정예 수료자 약 450명(年)
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-black leading-tight">
                                영어, 제대로 한번 <br className="md:hidden" />
                                <span className="text-brand-blue">해볼 수 있는 곳입니다</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-gray-500 tracking-tight">
                                커리큘럼은 독특하면서 정직합니다
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Body 1 (from body__01.js) */}
                <div className="bg-white">
                    {/* Section: Spirit */}
                    <div className="container mx-auto px-6 max-w-7xl py-20 space-y-24">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    벼랑영어 스피릿
                                    <span className="block text-sm font-bold text-gray-400 mt-2">Our Spirit</span>
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-12">
                                <div>
                                    <h4 className="text-xl font-bold text-brand-black mb-4">결코, 학원들은 영어를 책임지지 않는다</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        계속 학원에 의지해서는 영어 어렵습니다. 결국 스스로 꾸준히 해나가 힘을 만들어야 하는데, 벼랑영어는 빠른 영어 홀로서기라는 선명한 목표를 가진, 수강자의 마지막 영어학원이 될 것입니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-black mb-4">영어, 슬슬 재미만 붙기 시작하면 게임 끝이다</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        저마다 영어비법을 휘황찬란하게 광고하지만 널린 것이 영어컨텐츠입니다.<br />
                                        자료나 도구가 없어서 영어 못하는 것이 아니라 힘든 공부로 느껴져 중단하기 때문입니다.<br />
                                        벼랑영어는 슬슬 재미있어지는 시점까지 강하게 밀어붙입니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section: Operation Features */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase text-brand-black">
                                    운영 특징
                                </h3>
                            </div>
                            <div className="md:w-3/4 grid md:grid-cols-3 gap-6">
                                <OperationCard title="재수강 불가합니다">
                                    단 한 번의 수강으로 영어습관을 붙여 홀로서기 하는 과정입니다. 제대로 따라오면 재수강은 불필요하며 허용되지도 않습니다.
                                </OperationCard>
                                <OperationCard title="계약 강사로 운영치 않습니다">
                                    학원처럼 고용된 계약 강사가 아니며 벼랑영어를 설립한 강사들이 직접 강의, 지도합니다. 계약 강사를 투입하는 학원과는 사명감, 목표, 운영방식이 전혀 다릅니다.
                                </OperationCard>
                                <OperationCard title="과정은 단 1개만 운영합니다">
                                    여느 학원처럼 과정이 여러 개로 나누어져 있지 않고 [영어홀로서기 3개월 과정] 단 1개만 운영됩니다. 아직 학원에 의지해야 하는 정도라면 어느 정도이냐와 상관없이 영어습관을 만들어야 하는 것은 어차피 동일하기 때문입니다. 또한 [듣고-말하고-읽고-쓰기]를 동시에 연결하여 익히는 과정이기 때문에 회화반, 듣기 집중반과 같이 영역을 나누어 개설하지 않습니다.
                                </OperationCard>
                            </div>
                        </div>

                        {/* Section: Tutors */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    벼랑영어 튜터들
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-8">
                                <div className="text-gray-600 leading-relaxed">
                                    벼랑영어의 튜터는 한국외국어대학교 출신들을 중심으로 구성되어 있습니다.<br />
                                    영어교수방법, TESOL Master’s Course를 전공하여 비원어민에게 영어를 교수하는 부분에서 전문적 지식과 경력을 갖추고 있습니다.
                                    <ul className="list-disc pl-5 mt-4 space-y-2 bg-gray-50 p-6 rounded-xl">
                                        <li>영어 교수(강의) 5~15년 경력의 튜터들입니다. 대학교 강의, 영어학원 강의 경력을 바탕으로 커리큘럼도 최적으로 개발할 수 있는 영어학원계의 Singer-Songwriter입니다.</li>
                                        <li>
                                            4~5명의 튜터가 한 팀을 이루어 오로지 하나의 과정에 모두 투입됩니다.<br />
                                            하나의 과정에 한 명의 강사가 투입되는 보통의 학원과는 튜터링 방식부터 다릅니다.
                                        </li>
                                        <li>
                                            강단 강의는 영어권에서 학업을 마치거나 생활한 경력이 있는 한국인 튜터가 맡습니다.<br />
                                            ※ <strong>Tip!</strong> [영어권에서 생활 경력]+[강의 경력]이 있는 '한국인' 강사가 종합 효율에서는 최고입니다.<br />
                                            어느 학원이나 원어민 강사는 경우에 따라서만, 부분적으로만 효과적입니다.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-brand-black mb-2">튜터들(현재)</h4>
                                    <p className="text-gray-700 font-medium">
                                        Wallace(Korea), Sam(Korea), Michelle(Korea), Kevin(Korea), Gary(Korea), Mandy(Korea)
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Karin Elizabeth Simpson(U.S.A.), Shaun Justin Manning(Canada), Jay(Korea), Kym Mills(New Zealand)
                                    </p>
                                </div>

                                <div className="bg-brand-blue/5 p-8 rounded-xl border border-brand-blue/10 space-y-6">
                                    <h4 className="text-xl font-black text-brand-blue">벼랑튜터들의 유별남</h4>
                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            <strong className="text-brand-blue">첫째,</strong> 영어를 가르치고 배우는 것을 무엇보다도 좋아합니다.<br />
                                            국내에는 영어 강사를 위한 TESOL 과정이 아주 많습니다. 그러나 단기과정이 아니라 석사과정(Master's)으로 운영하는 학교는 한국외국어대학이 유일합니다. 벼랑영어 주 강사들이 Master’s 과정을 졸업한 외국어대 TESOL의 경쟁률은 10: 3 정도이고 학생 대부분이 영어 교육에 관련된 일을 하고 있습니다. 그야말로 영어를 가르치는 것을 정말 좋아하고 자질이 충만한 사람들만 모인다고 생각하면 됩니다. 영어를 가르치고 배우기를 좋아하는 강사와 그냥 직업적으로 강의하는 강사는 많은 차이를 가져옵니다.
                                        </p>
                                        <hr className="border-gray-200" />
                                        <div className="space-y-4">
                                            <p>
                                                <strong className="text-brand-blue">둘째,</strong> 한국인들이 영어를 배우는 고충을 정확히 알고 있습니다.<br />
                                                본인이 겪었기 때문입니다. 아무리 열심히 해도 영어가 늘지 않는 이유를 들여다보면
                                            </p>
                                            <ul className="list-disc pl-5 my-2 text-sm text-gray-600">
                                                <li>[한국어, 영어] 두 언어에 내재한 언어원리의 다름</li>
                                                <li>두 문화의 차이에 의한 접근, 소통, 지속의 어려움에 있다고 봐도 과언이 아닙니다.</li>
                                            </ul>
                                            <p>
                                                본인이 영어를 잘한다고 영어를 제대로 가르칠 수 있는 것은 아닙니다. 벼랑영어 강사는 철저히 ‘문리 중심, 언어습득’ 관점에서 강의합니다.
                                            </p>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <p>
                                            <strong className="text-brand-blue">셋째,</strong> 영어를 학원에서 완성해준다는 것은 거짓말임을 깨우쳐 알고 있습니다.<br />
                                            언어에 있어 일정 기간에 완성된다는 개념은 있을 수 없습니다. 강사는 일정 기간 올바른 방향을 알려주고 기본 영어 체력을 길러주어 앞으로 꾸준히 스스로 영어와 접하면서 비로소 소통의 수단인 언어가 되도록 만드는 역할만이 있을 뿐입니다.<br />
                                            벼랑영어 강사는 아주 정직한 원리로, 그러나 상당히 독특한 방법으로 강의해 나갑니다. 벼랑영어를 찾는 모든 영어학습자에게 단 한 번의 수강으로 벼랑영어가 마지막 학원이 되도록 합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section: Contact */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase text-brand-black">
                                    문의처
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-6">
                                <p className="text-gray-600">대표 문의처는 이메일입니다. 이메일 우선 이용을 권장합니다. 신속히 답변드릴 것입니다.</p>
                                <div className="grid md:grid-cols-1 gap-4">
                                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg items-start">
                                        <span className="bg-[#082742] text-white px-2 py-0.5 text-sm font-bold rounded shrink-0 mt-1">대표</span>
                                        <div>
                                            <p className="font-bold mb-1">일반문의, 등록, 환불 등 종합 창구</p>
                                            <p className="text-sm text-gray-600 mb-2">신속하고 정확하게, 무엇보다 정직하게 처리됩니다.</p>
                                            <a href="mailto:hi@cliffenglish.com" className="flex items-center gap-2 text-brand-blue font-bold hover:underline">
                                                <Mail size={16} /> hi@cliffenglish.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg items-start">
                                        <span className="bg-[#082742] text-white px-2 py-0.5 text-sm font-bold rounded shrink-0 mt-1">채팅</span>
                                        <div>
                                            <p className="font-bold mb-1">카카오톡 채널</p>
                                            <p className="text-sm text-gray-600">※ 카카오톡 로그인 필요 (채팅 가능 시간 : 평일 09:00~22:00 / 24시간 이내로 답변드립니다)</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 border border-gray-100 rounded-lg items-start">
                                        <span className="bg-[#082742] text-white px-2 py-0.5 text-sm font-bold rounded shrink-0 mt-1">긴급</span>
                                        <div>
                                            <p className="font-bold mb-1 flex items-center gap-2"><Phone size={16} /> 02-336-8992</p>
                                            <p className="text-sm text-gray-600">※ 세미나진행, 튜터미팅, 식사시간 등에는 전화응대가 불가할 수 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section: Location */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-black pl-6 uppercase text-brand-black">
                                    찾아오시는 길
                                </h3>
                            </div>
                            <div className="md:w-3/4 space-y-6 text-gray-700">
                                <p>
                                    위치 : 지하철 홍대입구역 1번 출구에서 90m, L7호텔 바로 뒤(지도참조)<br />
                                    주소 : 서울특별시 마포구 월드컵북로2길 11, 삼희빌딩 2층<br />
                                    <span className="text-sm text-red-500">※ 학원에 주차는 불가합니다. 자가 차량으로 오실 경우, 주변 주차시설을 미리 확인하시기 바랍니다.</span>
                                </p>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <a href="https://map.naver.com/v5/entry/place/21634216" target="_blank" rel="noopener noreferrer">
                                        <Image src="/map.png" alt="주소 지도" width={800} height={500} className="w-full h-auto object-cover" />
                                    </a>
                                </div>

                                {/* Image Carousel Replacement */}
                                <div className="mt-8">
                                    <h4 className="font-bold mb-4 text-sm text-gray-400">벼랑영어 풍경</h4>
                                    <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                                        {cliffImages.map((src, idx) => (
                                            <div key={idx} className="shrink-0 w-[300px] md:w-[400px] snap-center rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                                <Image src={src} alt={`Cliff English View ${idx + 1}`} width={400} height={300} className="w-full h-auto object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Body 2 (from body__02.js) - Bottom Section */}
                <div className="bg-gray-50 border-t border-brand-yellow/30">
                    {/* Bottom Header from index.js */}
                    <section className="bg-white py-16 text-center border-b border-gray-100">
                        <div className="container mx-auto px-6">
                            <div className="text-[#f50] font-bold text-2xl font-serif mb-2">벼랑영어 튜터들의 충언</div>
                            <p className="text-gray-500 mb-2">저마다 영어비법 자랑하는 학원들 천지...</p>
                            <h2 className="text-3xl md:text-4xl font-black text-brand-black">그 속에서 방황하는 나의 영어</h2>
                        </div>
                    </section>

                    <div className="container mx-auto px-6 max-w-7xl py-20 space-y-24">
                        {/* Section 1 */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-6">
                            <h3 className="text-2xl font-black text-brand-black border-b border-gray-100 pb-4">그동안 해왔던 영어는 대체...</h3>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    한국은 매일 새로운 영어학습법이 소개되는 영어학원의 천국입니다. 인터넷에는 영어를 마스터하기 위한 획기적인 방법이 있다고 저마다 손짓을 합니다. 그러나 이미 온갖 형태의 영어학습법을 익히 들어봤고 학원에도 다녀봤기에 방법론에 관해서는 모두들 논문을 쓸 수 있을 만큼 해박합니다. 특히나 요즘에는 아주 기본적인 기초영어를 화려한 문구로 홍보하면서, 수강하면 마법과 같이 금방 영어가 잘 될 것 같은 기법을 소개하는 어학원 천지입니다. 단언컨대 학원에서 영어를 만들어주지는 못합니다.
                                </p>
                                <p>
                                    한편, 토익 등 점수가 높은 사람이 반드시 소통의 언어로서의 영어를 잘하는지 살펴보십시오. 이미 알려져 있다시피 시험 영어는 점수 영어일 뿐입니다. 점수는 높아도 영어를 못 하는 경우가 허다합니다. 결국 일정한 시간이 지나면 그 점수는 다시 내려갑니다.
                                </p>
                                <p>
                                    영어실력을 단기간에 획기적으로 늘려 주는 프로그램이 진짜 있을까요? 아주 오래전부터 그런 기법이 있다고 수많은 어학원과 강사들이 말하고 있지만, 정작 단기간에 영어로 소통할 수 있게 된 사람들을 찾아볼 수 있었는지요? 타고난 언어적 자질 차이로 인한 속도는 많이 나는 것이 사실이지만 언어를 ‘단기간에 완성’하는 특수한 기법은 있을 수 없습니다. 기법보다는 정직한 방법을 택해야 가장 빠르게 소통의 수단인 언어가 됩니다.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black text-brand-black pl-4 border-l-8 border-brand-yellow">그럼 어떻게 해야 하는가?</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <AdviceCard title="첫째, 학원이나 강사, 남의 프로그램에 계속 의지하면 안 됩니다.">
                                    그동안 영어가 잘 안됐다면, 혹은 지금부터 시간과 비용 낭비 없이 영어를 습득해 나가겠다면 '계속' 학원에 의지하면 안 됩니다. 학원은 올바른 학습방법으로 일정 기간 훈련을 시켜주는 곳을 선택하시기 바랍니다. 학원에 의지하는 시간을 최소화 해야 하는데, 학원을 너무 의지할 수록 영어습득 기회와 열정을 잃어버릴 확률이 높습니다.
                                </AdviceCard>
                                <AdviceCard title="둘째, 일일이 가르침을 받아서 익혀 나가겠다고 생각하면 안 됩니다.">
                                    영어를 학원에서 '마스터할 수 있다'는 말은 절대 진실이 아닙니다. 언어라는 것은 실로 방대해서 많은 양을 헤아릴 수 없이 반복해야만 합니다. 모국어를 습득할 때도 마찬가지였습니다. 가장 빠르고 실패 없이, 그것도 스트레스 없이 영어를 언어화하는 방법은 배우는 '학습'에 의함이 아니라 스스로 '습득'하는 것입니다. 영어가 유창한 사람들을 살펴보면 하나 같이 스스로 꾸준히 익혔던 것입니다. ‘스스로’가 핵심이며 그 습관을 만들어주는 것이 학원의 역할입니다.
                                </AdviceCard>
                                <AdviceCard title="셋째, 가급적 점수영어는 지양하십시오.">
                                    시험점수를 위해 상당한 시간과 비용을 투입하게 되는데, 그 대신에 진정한 언어로서의 영어에 투자하십시오. 소통의 언어로서의 영어학습을 하다 보면 점수는 당연히 오르게 되며, 시간이 지나도 점수가 다시 내려가는 일은 없습니다. 결국 장기적으로는 점수를 위해서도 더 빠른 길입니다.
                                </AdviceCard>
                                <AdviceCard title="넷째, 원어민 학습이나 어학연수, 준비되지 않은 유학 등은 유의하십시오.">
                                    원어민 1:1 회화, 어학연수 등으로 어느 정도 영어를 익힐 수 있겠습니다만 투자하는 시간, 노력, 비용대비 실력은 크게 향상되지 않습니다. 영어에 노출될 수밖에 없는 환경에 있으면 자연스럽게 언어를 익힐 수 있을 것 같지만 이것은 크나큰 착각입니다. 이런 방법들은 아이러니하게도 이미 영어의 내공이 많이 쌓인 상태에서야 비로소 효과를 볼 수 있습니다. 노출된 영어들을 자신의 것으로 흡수할 실력이 없는 상태에서 환경만 바꾼다 한들, 마개가 열리지 않은 병에 물을 들이붓는 것과 같이 모든 측면에서 낭비이자 넌센스입니다. 어학연수의 실패율이 대단히 높은 이유입니다.
                                </AdviceCard>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-brand-black text-white p-8 md:p-12 rounded-2xl">
                            <h3 className="text-2xl font-black mb-6">변화를 위한 마음가짐</h3>
                            <div className="text-center bg-white/10 p-6 rounded-xl mb-6">
                                <p className="text-xl font-bold font-serif text-brand-yellow">'영어는 나 스스로 습득해 나가야 한다'</p>
                            </div>
                            <p className="leading-relaxed text-gray-300">
                                타인에게 배워서, 계속 학원 다녀서, 처음부터 어학연수로, 그런 방법으로 영어가 언어로 자리 잡기는 몹시 어렵습니다. 결국, 꾸준히 스스로 습득해 나가야 하는데, 그것이 쉬운 일은 아닙니다. 어쩌면 유일하다시피 한 방법은 따로 공부한다는 형태가 되어서는 안 되고 일상의 습관이 되도록 만드는 것입니다. 이른바 습관의 힘을 이용하는 것인데, 영어도 일정 기간 강하게 트레이닝을 하고 나면 습관이 붙습니다. 이후에는 혼자서 좋아하는 방법으로 꾸준히 해나가게 되는데, 그 단계가 되면 영어 스트레스는 급격하게 사라지고 힘도 들지 않게 됩니다. 정말 그렇게 되느냐고 묻는다면, Yes. 그렇게 하는 방법이 있고 누적된 사례가 아주 많습니다.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-brand-black">학원의 역할은?</h3>
                            <p className="text-gray-700">
                                학원은 기본을 잡아주는 등 도움은 줄 수 있으나 영어를 유창하게 하고 소통의 언어가 되기까지 만들어줄 수는 없습니다.<br />
                                학원의 진정한 역할은,
                            </p>
                            <div className="bg-gray-100 p-6 rounded-xl font-bold text-gray-800">
                                ■ 영어 뼈대가 없는 사람에게 굳건한 영어 문리를 세워주고<br />
                                ■ 혼자서는 도저히 영어습관을 만들기 어려운 사람에게 올바른 영어습관을 붙여주는 것.
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                그래서 영어에 대한 스트레스 없이 자연스럽게 지속해서 공부함은 물론 평생 사용할 수 있게 만들어 주는 것, 그 이상일 수 없고 그 이하여서도 안 될 것입니다.
                                <br /><br />
                                이렇게 영어 문리를 세워 주고, 습관을 만들어주는 기간이 아주 오래 걸리지는 않기 때문에 강도나 방법에 따라 3개월 ~ 9개월 정도로 보면 됩니다. 벼랑영어는 최대한 기간을 줄여 3개월 과정을 견지합니다. 다양한 기간으로도 티칭을 해 봤지만 수강자 각자의 효율과 결과가 확연하게 좋은 것은 기간은 줄이고 집중도(강도)는 최대로 높이는 방법이었습니다. 긴 기간으로 설계된 장기 과정, 단계별 과정은 비용과 시간 측면에서 유의하여 숙고해볼 필요가 있습니다.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="text-center py-12 border-t border-gray-200">
                            <h3 className="text-3xl font-black text-brand-blue mb-6 leading-tight">
                                나도 영어를 <br />잘하게 될 운명일까?
                            </h3>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                그동안 영어가 안됐다면, 벼랑영어 스타일이 본인에게 잘 맞는 것이라면 지금 운명적 기회를 맞은 것일 수 있습니다. 벼랑영어는 3개월에 한 번만 개강하므로 항상 정원 마감되어 원하는 모든 분이 수강할 수 있지는 않습니다. 또한 모든 분이 벼랑영어의 취지나 스타일에 잘 맞는 것은 아닙니다. 홈페이지의 여러 안내글, 다른 분의 수강 소감을 읽어보고 신중히 결정하시기 바랍니다.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </ApolloWrapper>
    );
}

function OperationCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg text-brand-black mb-3">{title}</h4>
            <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
        </div>
    )
}

function AdviceCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-brand-yellow transition-colors">
            <h4 className="font-bold text-base text-brand-black mb-3">{title}</h4>
            <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
        </div>
    )
}
