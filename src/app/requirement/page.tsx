"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";

export default function RequirementPage() {
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
                                수강대상
                            </h2>
                            <p className="text-lg md:text-xl font-medium text-gray-500">
                                벼랑영어가 지향하는 수강생과 필수 요건
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Section 1: Target Audience (Section__01.js) */}
                <section className="py-20 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6 max-w-7xl space-y-20">
                        {/* Age Group */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    적정 수강 연령대
                                </h3>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    중,고등학생만 아니면 누구나 수강 가능합니다.
                                </p>
                                <p className="text-sm bg-gray-50 p-3 rounded text-gray-600">
                                    ※보습학원이 아니므로 중,고교 재학중인 경우 수강 불가 (수능시험을 마친 고3은 수강 가능)
                                </p>
                                <p>
                                    벼랑영어는 점수를 위한 영어가 아닌 &apos;소통의 언어로서 영어 잘하기&apos;가 목적이기 때문에
                                    수강자는 매우 고르게 분포되어 있습니다.
                                </p>

                                <div className="mt-6 text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="text-sm text-gray-500 mb-2">[벼랑영어 수강자 연령별 분포 평균]</div>
                                    <div className="relative w-full max-w-xl mx-auto aspect-[1.65]">
                                        <Image
                                            src="/image/chart01.jpg"
                                            alt="수강자 연령별 분포"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Purpose & Job */}
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    수료 목적과 수료자 직업
                                </h3>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    소통수단으로서 &lsquo;영어 잘하기&rsquo;가 목적이라면 적정 수강 대상입니다.
                                </p>
                                <p>
                                    점수가 필요한 경우, 또는 영어의 특정 영역(듣기, 말하기, 쓰기 등)의 향상만 목표로 하는 경우에는 해당 전문 학원이 효율적일 것입니다.
                                </p>
                                <p>
                                    직장인이 가장 많습니다. 당장의 필요성이나 절박함이 강합니다.<br />
                                    그 다음으로는 대학생, 취업준비, 재취업, 유학과 이민 준비중인 수강자가 많습니다.
                                </p>
                                <p>
                                    그리고 벼랑영어만의 특징이라 할 수 있는데, 유명 연예인이나 방송 관련 종사자가 꾸준히 수강하는 편입니다.<br />
                                    더불어 영어문리를 깨우치는 수업 특성에 기인하여 석,박사 과정, 교사, 학원강사의 수강도 독특한 점의 하나입니다.<br />
                                    각 분야별로 다양하지만 수료 후 지인에게 전파되어 꼬리를 물고 수강하는 경향은 공통적입니다.
                                </p>

                                <div className="mt-6 text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="text-sm text-gray-500 mb-2">[벼랑영어 수강자 직업군 분포]</div>
                                    <div className="relative w-full max-w-xl mx-auto aspect-[1.65]">
                                        <Image
                                            src="/image/chart02.jpg"
                                            alt="수강자 직업군 분포"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Level */}
                        <div className="flex flex-col md:flex-row gap-8" id="level">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    수강 전 실력
                                </h3>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    &lsquo;고등학교를 막 졸업한 학생들의 평균 영어실력&rsquo;이상이면 벼랑영어 커리큘럼 모든 영역에서 안정적으로 따라갈 수 있습니다.
                                </p>
                                <p>
                                    현재 실력은 부족하지만 오히려 굳건히 3개월을 해나가 상당한 성과를 보이는 분도 있는 반면,<br />
                                    외국생활 경험까지 있어 이미 어느 수준을 넘어선 분인데도 따라가기가 쉽지 않다고 하시는 경우도 있습니다.
                                </p>
                                <p>
                                    &lsquo;영어 마스터&rsquo; 라는 비합리적 목표가 아닌 &lsquo;영어 습관 만들기&rsquo;라는 목표가 동일하다는 점 때문에 현재의 실력이 덜 중요하고, 또한 과정의 난이도 범위가 아주 넓은 편이어서 수강 대상 수용폭은 상대적으로 꽤 넓습니다.
                                </p>
                                <p>
                                    아래 그래프에서 주황색 영역으로 표시된 부분은 수강 등록자의 수강 전 실력별 분포이고, 회색선은 실력별 평균 과제 소요시간입니다.
                                </p>

                                <div className="mt-6 text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="text-sm text-gray-500 mb-2">[수강 전 실력에 따른 과제 평일소요시간 개념도]</div>
                                    <div className="relative w-full max-w-xl mx-auto aspect-[1.65]">
                                        <Image
                                            src="/image/chart03.jpg"
                                            alt="수강 전 실력 분포"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="mt-4 text-left p-4 bg-white border border-gray-200 rounded text-sm text-blue-900">
                                        <strong className="block mb-2">[단계 예시]</strong>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>Lvl.1</strong> : 짧은 문장의 해석도 어렵고 작문은 거의 못하며, 온전히 들리고 말할 수 있는 문장이 30개 이하</li>
                                            <li><strong>Lvl.10</strong> : 원어민 수준의 최상급은 아니지만 난이도가 아주 높은 것이 아니라면 일반적 Reading, Writing은 거침없이 가능하고 뉴스, 미드 시청에 어려움 없음. 토론 수준 고급 주제만 아니라면 회화는 문제 없는 수준</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 1 */}
                        <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 space-y-4">
                            <div className="inline-block bg-brand-yellow text-black text-xs font-bold px-2 py-1 rounded">자주 묻는 질문</div>
                            <h4 className="font-bold text-lg">&quot;초심자도 따라 갈 수 있나요?&quot;</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                강의 중에는 선행학습(지식) 여부와 관계없이 필요한 내용은 모두 설명드립니다. 하지만 강의를 이해하고 본인의 것으로 소화하는 시간, 즉 과제하는 시간에서 초심자와 숙련자의 차이가 발생합니다. 매일 영어를 반복하는 측면에서 이상적인 학습량(시간)은 수업과 동일한 2~3시간 정도일 것입니다. 초심자일수록 이보다 오랜 시간이 소요됩니다. 따라서 &lsquo;부족한 만큼 더 적극적으로 영어에 올인하겠다&rsquo;라는 마음가짐과 물리적인 시간 확보가 더욱 요구됩니다. (전체 수료자 중 초심자의 비율은 약 30%)
                            </p>
                            <Link href="/review?pageNo=1&search=초심자" className="text-brand-blue text-sm font-bold hover:underline inline-block mt-2">
                                &#8594; 초심자와 숙련자 수료 후 소감 참고
                            </Link>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 space-y-4">
                            <div className="inline-block bg-brand-yellow text-black text-xs font-bold px-2 py-1 rounded">자주 묻는 질문</div>
                            <h4 className="font-bold text-lg">&quot;레벨테스트는 없나요?&quot;</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                벼랑영어에서는 레벨테스트를 하지 않습니다.<br />
                                많은 학원에서 레벨테스트를 마케팅의 수단으로 사용한다는 것은 잘 알려진 사실입니다.<br />
                                레벨테스트를 통해 실력보다 더 낮은 반에 배정해서 수강 후 실력이 늘어난 것처럼 느끼게 하는 것은 가장 보편적인 운영기법이며, 레벨별로 분류해서 계속 해당 반에 머물거나 다른 반으로 이동케 하는 것도 학원 매출을 극대화하는 방법 중 하나입니다.
                            </p>
                            <div className="space-y-4 mt-4">
                                <div>
                                    <strong className="block text-gray-900 mb-1">벼랑영어가 레벨테스트를 하지 않는 이유는 3가지가 있습니다.</strong>
                                </div>
                                <div>
                                    <strong className="text-gray-900">전문 테스트가 아니라면 자체 테스트는 어차피 정확치 않은 대충일 수 밖에 없습니다.</strong>
                                    <p className="mt-1">굳이 하지 않아도 본인이 ‘개략적’으로는 다 알고 있습니다. 그 판단이 충분히 유효하기 때문에 벼랑영어 수강 여부에 그대로 대입하면 됩니다.</p>
                                </div>
                                <div>
                                    <strong className="text-gray-900">벼랑영어 과정은 점수로 측정하기 어려운 종합적 ‘영어 잘하기’ 입니다.</strong>
                                    <p className="mt-1">토익 800~900점도 쩔쩔매는 경우도 있고, 문리 체계가 하나도 없는 하위 레벨임에도 평범한 수준의 듣고 말하기는 곧잘 하는 경우도 있습니다. 약간 부족한 사람이나 꽤 실력이 있는 사람이든 본인의 레벨에서 영어가 막혀 있고 스트레스가 있는 것은 똑 같아서 영어습관 만들기는 동일한 목표일 수 밖에 없습니다.</p>
                                </div>
                                <div>
                                    <strong className="text-gray-900">다루는 양이 매우 많고 레벨이 전 범위에 걸쳐 있기 때문입니다.</strong>
                                    <p className="mt-1">노출되는 어휘와 문장의 수준이 초보적인 것부터 최상위에 해당하는 것까지 포함되어 있습니다. 매우 짧은 문장부터 아주 긴 문장까지, 익히 들어봤음직 한 낮은 수준의 회화문장부터 미국의 토론장에서 등장할만한 수준의 회화문장까지 광범위하게 포함되어 있습니다. 다루는 양은 과할 만큼 충분하기 때문에 각자 본인의 레벨에 맞는 영역, 내용을 중심으로 자연스럽게 학습하게 됩니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Requirements (Section__02.js) */}
                <section className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto px-6 max-w-7xl space-y-20">

                        <div className="text-center mb-16">
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">벼랑영어만의 독특한 수강 요건</h3>
                            <h2 className="text-4xl font-black text-brand-black">신변 상황과 정신적 요건</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    수강 목적
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 pl-4">영어는 단지 소통의 수단, 영어 홀로서기</p>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    점수를 얻기 위한 영어, 타이틀을 위한 영어 등이 아닌 단순히 소통하는데 필요한 수단으로서 영어를 목표로 해야 합니다.
                                </p>
                                <p>
                                    또한 3개월만에 원어민 수준이 된다거나, 영어를 마스터하겠다는 과한 욕심, 매직(Magic)을 기대하면 안 됩니다.
                                </p>
                                <p>
                                    강하게 몰입하는 만큼 어느 학원보다 실력은 자동으로 상승합니다만,<br />
                                    다시 학원 기웃거리지 않고 혼자서 재미를 느끼며 영어와 함께 하는 습관 만들기를 근본 목표로 해야 합니다.
                                </p>
                                <p className="text-sm text-red-500 font-bold">
                                    ※ 단기간에 원어민 수준을 기대하거나 높은 점수 획득를 원하는 경우 수강 불허합니다. 해당 전문학원을 찾아가시기 바랍니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    심리적 요건
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 pl-4">단단한 각오와 긍정적 태도</p>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    학습분량이 많은 강력한 집중 과정으로서 두 가지의 정신적 요건이 필수적입니다.
                                </p>
                                <p>
                                    <strong>첫째, 단단한 각오가 있어야 합니다.</strong><br />
                                    호락호락한 과정이 아닙니다. 튜터들이 최선을 다해 지도하지만 결국 본인이 상당한 시간을 투입하면서 막대한 노력을 해야 합니다. 물론 딱 3개월입니다.
                                </p>
                                <p>
                                    <strong>둘째, 공부한다는 생각보다는 3개월 동안 한번 미쳐본다는 태도가 절대 요구됩니다.</strong><br />
                                    과정에 대한 신뢰, 그리고 작은 발전에도 기뻐하는 긍정적 태도가 필요합니다.<br />
                                    스스로 스트레스를 주면서 부정적 마음, 급하고 욕심이 지배하는 경우 다른 요건이 좋아도 수강을 권할 수 없습니다.
                                </p>
                                <p>
                                    미리 그러한 마음가짐을 준비하고 마인트컨트롤을 하여야 한다는 의미이며, 그처럼 심적으로 강하게 준비된 상태라면 제대로 완주할 수 있고 효과는 극명합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    안정적 환경
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 pl-4">충분한 시간과 건강</p>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    3개월 동안 이유 불문 영어우선이어야 합니다.
                                </p>
                                <p>
                                    수업을 빠뜨리지 않고 따라 올 수 있는 개인 일정, 과제를 충실히 할 수 있는 시간과 환경이 요구됩니다.
                                </p>
                                <p>
                                    또한 3개월 동안 올인할 수 있는 건강도 필요합니다. 체력이 뒷바침되어야 ‘제대로’ 완주할 수 있습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    판단과 결정
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 pl-4">반드시 본인이 직접</p>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    벼랑영어는 입소문으로 알려진 곳이라서 유독 수료자의 소개로 수강하는 경우가 많습니다.
                                </p>
                                <p>
                                    수료한 친구, 가족으로부터 권유받은 경우 벼랑영어 전반에 대해 사실적인 이해가 더 빠른 것은 사실이지만 수강에 대한 판단과 결정은 본인의 의지로 직접 해야 합니다.
                                </p>
                                <p>
                                    홈페이지에 있는 모든 안내글을 읽어야 하고 수료자의 소감문도 많이 읽어보시기 바랍니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <h3 className="text-2xl font-black border-l-8 border-brand-blue pl-6 uppercase text-brand-blue">
                                    수료자 평가
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 pl-4">불만, 비평도 참고</p>
                            </div>
                            <div className="md:w-3/4 text-base space-y-6 leading-relaxed">
                                <p>
                                    예를 들어 수업 영상 속에 나오는 내용 일부가 본인의 성향 또는 스타일과 달라서 불편하다고 하는 경우, 영상 속 회화 문장에 비속어가 등장하여 힘들다고 하는 경우도 있습니다.
                                </p>
                                <p>
                                    벼랑영어에서 주장하는 내용도 아니고 단지 영어를 익히기 위한 것뿐인데도 어려워하는 사례도 있습니다.<br />
                                    벼랑영어는 곱게 정제된 교양서적에나 나오는 영어문장으로 학습하지 않습니다.
                                </p>
                                <p>
                                    또한 벼랑영어에서 리드하는 학습 분량의 1/10도 채 따라오지 않은 상태에서 실력향상이 없다며 불만을 갖는 경우도 있습니다.
                                </p>
                                <p>
                                    이를테면 인터넷상에는 다음과 같은 내용의 평가들도 있습니다.
                                </p>

                                <div className="bg-gray-100 p-6 rounded my-4 border border-gray-200">
                                    <strong className="block mb-2 text-gray-900">[인터넷상의 비평 예시]</strong>
                                    <p className="font-serif italic text-gray-600">
                                        (앞 부분 생략)... 벼랑영어에서 보여주는 SP란 영상인데 1년 수개월 동안 등록을 미룬 이유가 바로 이 만화 때문이다. 뭔 내용인지 유투브로 1화를 보다가 10초만에 꺼버리고 싶은 충동을 간신히 억누르고 몇 분 더 봤다. 결국 끝까지 못보고 접었다. 아니나다를까 이 영상이 힘들었다는 후기도 보인다. 그러나 일반적으로 재밌다는 평이 압도적이다. 다만 나와는 코드가 안맞아도 넘넘 안맞는다는게 함정...(이하 생략)
                                    </p>
                                </div>

                                <p>
                                    잘못된 점, 부족한 점도 있을 것이고, 벼랑영어 스타일이 유독 잘 맞지 않는 분도 있을 것입니다.<br />
                                    또한 수강 후 본인의 목표치와 차이가 컸을 수도 있고, 상당한 시간과 노력을 투자하지 않은 탓이라 하더라도 그냥 벼랑영어가 불만족스러울 수 있습니다.
                                </p>
                                <p>
                                    지인이 추천하였든 본인이 찾아본 것이든 벼랑영어의 좋아 보이는 부분, 칭찬의 평만 보지 마시고, 비평의 내용을 포함하여 오로지 영어목표의 정곡을 스스로 판단하시기 바랍니다.
                                </p>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </ApolloWrapper>
    );
}
