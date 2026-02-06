"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function PaymentCompleteContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Params from query
    const buyerName = searchParams.get("name") || "수강생";
    const amount = searchParams.get("amount") || "420,000";
    const formattedAmount = Number(amount).toLocaleString();

    return (
        <div className="bg-gray-50 min-h-screen py-10 md:py-20 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                    <div className="bg-brand-blue p-8 text-center text-white">
                        <div className="flex justify-center mb-4">
                            <CheckCircle size={64} className="text-white opacity-90" />
                        </div>
                        <h1 className="text-2xl font-black tracking-tight mb-1">
                            신청이 접수되었습니다!
                        </h1>
                        <p className="text-blue-100 text-sm">
                            아직 등록이 완료된 것은 아닙니다.
                        </p>
                    </div>

                    <div className="p-8 space-y-8">
                        <div className="text-center space-y-2">
                            <p className="text-gray-600">
                                안녕하세요, <span className="font-bold text-black text-lg">{buyerName}</span>님.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                아래 계좌로 수강료를 입금해주시면<br />
                                확인 후 최종 등록이 확정됩니다.
                            </p>
                        </div>

                        <div className="bg-yellow-50 border border-brand-yellow rounded-xl p-6 text-center space-y-4">
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Bank Account</span>
                                <div className="text-xl font-bold text-gray-800">
                                    KEB하나은행 <br />
                                    <span className="text-2xl font-black text-brand-black tracking-tight">164-910059-42304</span>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">예금주: (주)티랑-벼랑영어</div>
                            </div>
                            <hr className="border-brand-yellow/30" />
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Amount</span>
                                <div className="text-2xl font-black text-brand-blue">
                                    {formattedAmount}원
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                            <p className="flex gap-2">
                                <span className="text-brand-blue font-bold">✓</span>
                                <span>입금자명은 반드시 <strong>'{buyerName}'</strong>으로 해주세요.</span>
                            </p>
                            <p className="flex gap-2">
                                <span className="text-brand-blue font-bold">✓</span>
                                <span>입금 확인은 평일 기준 1~2시간 내로 완료되며, 문자로 안내드립니다.</span>
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Link
                                href="/"
                                className="flex-1 py-4 text-center border border-gray-200 rounded-lg text-gray-600 font-bold hover:bg-gray-50 transition-colors"
                            >
                                홈으로
                            </Link>
                            <Link
                                href="/review"
                                className="flex-1 py-4 text-center bg-brand-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            >
                                후기 보러가기 <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function PaymentCompletePage() {
    return (
        <ApolloWrapper>
            <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
                <PaymentCompleteContent />
            </Suspense>
        </ApolloWrapper>
    );
}

