"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Loader2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const VALIDATE_INICIS = gql`
  mutation validateInicis(
    $oid: String!
    $mid: String!
    $type: String!
    $authToken: String
    $authUrl: String
    $tid: String
    $reqUrl: String
  ) {
    validateInicis(
      oid: $oid
      mid: $mid
      type: $type
      authToken: $authToken
      authUrl: $authUrl
      tid: $tid
      reqUrl: $reqUrl
    ) {
      result
      message
    }
  }
`;

function PaymentCompleteContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [isValidating, setIsValidating] = useState(false);
    const [validationMessage, setValidationMessage] = useState<string | null>(null);
    const [isFailed, setIsFailed] = useState(false);

    const [validateInicis] = useMutation(VALIDATE_INICIS);

    // Params from query
    const buyerName = searchParams.get("name") || "수강생";
    const amount = searchParams.get("amount") || "420000";
    const oid = searchParams.get("oid") || "";
    const type = searchParams.get("type"); // PC or MOBILE
    const formattedAmount = Number(amount).toLocaleString();

    useEffect(() => {
        const triggerValidation = async () => {
            if (!type || !oid) return;

            setIsValidating(true);
            try {
                const { data } = await validateInicis({
                    variables: {
                        oid,
                        mid: searchParams.get("mid"),
                        type,
                        authToken: searchParams.get("authToken"),
                        authUrl: searchParams.get("authUrl"),
                        tid: searchParams.get("tid"),
                        reqUrl: searchParams.get("reqUrl"),
                    }
                }) as { data: { validateInicis: { result: boolean; message: string } } };

                if (data?.validateInicis?.result) {
                    setValidationMessage("결제가 성공적으로 완료되었습니다.");
                } else {
                    setIsFailed(true);
                    setValidationMessage(data?.validateInicis?.message || "결제 승인 중 오류가 발생했습니다.");
                }
            } catch (error) {
                console.error("Inicis Approval Error:", error);
                setIsFailed(true);
                setValidationMessage("서버 통신 중 오류가 발생했습니다.");
            } finally {
                setIsValidating(false);
            }
        };

        triggerValidation();
    }, [type, oid, searchParams, validateInicis]);

    return (
        <div className="bg-gray-50 min-h-screen py-10 md:py-20 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                    <div className={`${isFailed ? 'bg-red-500' : 'bg-brand-blue'} p-8 text-center text-white`}>
                        <div className="flex justify-center mb-4">
                            {isValidating ? (
                                <Loader2 size={64} className="text-white animate-spin opacity-90" />
                            ) : isFailed ? (
                                <XCircle size={64} className="text-white opacity-90" />
                            ) : (
                                <CheckCircle size={64} className="text-white opacity-90" />
                            )}
                        </div>
                        <h1 className="text-2xl font-black tracking-tight mb-1">
                            {isValidating ? "결제 승인 중..." : isFailed ? "결제 실패" : type ? "결제가 완료되었습니다!" : "신청이 접수되었습니다!"}
                        </h1>
                        <p className="text-blue-100 text-sm">
                            {isValidating ? "잠시만 기다려주세요." : isFailed ? "문제가 발생했습니다." : (type ? "감사합니다." : "아직 등록이 완료된 것은 아닙니다.")}
                        </p>
                    </div>

                    <div className="p-8 space-y-8">
                        <div className="text-center space-y-2">
                            <p className="text-gray-600">
                                {isFailed ? (
                                    <span className="text-red-600 font-bold">{validationMessage}</span>
                                ) : (
                                    <>안녕하세요, <span className="font-bold text-black text-lg">{buyerName}</span>님.</>
                                )}
                            </p>
                            {!type && !isFailed && (
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    아래 계좌로 수강료를 입금해주시면<br />
                                    확인 후 최종 등록이 확정됩니다.
                                </p>
                            )}
                            {type && !isFailed && !isValidating && (
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    수강 등록이 정상적으로 완료되었습니다.<br />
                                    곧 안내 문자를 보내드리겠습니다.
                                </p>
                            )}
                        </div>

                        {!type && (
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
                                {oid && (
                                    <>
                                        <hr className="border-brand-yellow/30" />
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Order ID</span>
                                            <div className="text-lg font-bold text-gray-700">
                                                {oid}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {type && !isFailed && (
                            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-6 text-center space-y-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">결제 내역</span>
                                <div className="text-xl font-bold text-gray-800">
                                    {formattedAmount}원 (결제 완료)
                                </div>
                                {oid && (
                                    <div className="text-sm text-gray-500">
                                        주문번호: {oid}
                                    </div>
                                )}
                            </div>
                        )}

                        {!type && !isFailed && (
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
                        )}

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

