"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { ENROLLMENT_CONSTANTS } from "@/lib/constants/enrollment";
import { useRouter } from "next/navigation";
import { gql } from "@apollo/client";
import { useMutation, useLazyQuery } from "@apollo/client/react";
import { Check, Loader2, AlertCircle } from "lucide-react";
import InicisScript from "@/components/payment/InicisScript";

import Link from "next/link"; // Link import 추가

// Zod Schema Definition
const paymentSchema = z.object({
    buyer_name: z.string().min(1, "성명을 입력해주십시오."),
    buyer_tel: z.string().min(10, "휴대폰 번호를 입력해주십시오.").max(13, "10~11자리 이하로 입력해주십시오."),
    buyer_email: z.string().email("이메일을 입력해주십시오."),
    klass: z.string().refine((val) => Object.values(ENROLLMENT_CONSTANTS.KLASS).includes(val), {
        message: "수강방식을 선택해주십시오.",
    }),
    buyer_addr: z.string().optional(),
    pay_method: z.string().refine((val) => ["card", "bank"].includes(val), {
        message: "납부 방법을 선택해주세요. ",
    }),
    agreement: z.boolean().refine((val) => val === true, "개인정보이용 및 서비스 이용약관에 동의해야 합니다."),
}).refine((data) => {
    // 영상반(V로 끝나는 클래스)인 경우 주소 필수
    const isVideoClass = data.klass && data.klass.endsWith("V");
    if (isVideoClass && (!data.buyer_addr || data.buyer_addr.trim().length < 5)) {
        return false;
    }
    return true;
}, {
    message: "주소를 입력해주십시오.",
    path: ["buyer_addr"],
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

interface InicisConfig {
    mid: string;
    signature?: string;
    verification?: string;
    mKey?: string;
    timestamp?: string;
    P_CHKFAKE?: string;
    P_TIMESTAMP?: string;
}

interface EnrollmentResponse {
    success: boolean;
    message?: string;
    oid: string;
    inicisConfig?: InicisConfig;
}

const CREATE_ORDER = gql`
  mutation enroll(
    $buyer_name: String!
    $buyer_email: String!
    $buyer_tel: String!
    $buyer_addr: String
    $option1: String!
    $option2: String
    $option3: String
    $pay_method: String!
    $merchant_uid: String
    $status: String
    $ad: String
  ) {
    enroll(
      buyer_name: $buyer_name
      buyer_email: $buyer_email
      buyer_tel: $buyer_tel
      buyer_addr: $buyer_addr
      option1: $option1
      option2: $option2
      option3: $option3
      pay_method: $pay_method
      merchant_uid: $merchant_uid
      order_name: "수강등록"
      amount: 420000
      status: $status
      user_ip: "127.0.0.1"
      ad: $ad
    ) {
        success
        message
        oid
        inicisConfig {
            mid
            signature
            verification
            mKey
            timestamp
            P_CHKFAKE
            P_TIMESTAMP
        }
    }
  }
`;

function PaymentFormContent() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Enrollment mutation with Inicis config
    const [enrollMutation] = useMutation(CREATE_ORDER);

    const [pgData, setPgData] = useState<any>(null);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors },
    } = useForm<PaymentFormValues>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            buyer_name: "",
            buyer_tel: "",
            buyer_email: "",
            klass: "",
            buyer_addr: "",
            pay_method: "card",
            agreement: false,
        },
    });

    const watchKlass = watch("klass");
    const watchPayment = watch("pay_method");

    // Format phone number
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value.length > 11) value = value.slice(0, 11);

        let formatted = value;
        if (value.length > 3 && value.length <= 7) {
            formatted = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 7) {
            formatted = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
        }
        setValue("buyer_tel", formatted);
    };

    const onSubmit = async (data: PaymentFormValues) => {
        setIsSubmitting(true);
        const productName = `수강등록-첫1개월-${data.klass}1`;
        try {
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            // 1. Create Enrollment in DB first
            const { data: mutationResult } = await enrollMutation({
                variables: {
                    buyer_name: data.buyer_name,
                    buyer_email: data.buyer_email,
                    buyer_tel: data.buyer_tel,
                    buyer_addr: data.buyer_addr || "",
                    option1: data.klass,
                    option2: "",
                    option3: isMobile ? "MOBILE" : "PC",
                    pay_method: data.pay_method,
                    merchant_uid: "", // Let backend generate if empty, but pass it to satisfy any client-side schema checks
                    status: "apply",
                    ad: "",
                }
            }) as { data: { enroll: EnrollmentResponse } };

            if (!mutationResult?.enroll?.success) {
                alert(mutationResult?.enroll?.message || "신청 중 오류가 발생했습니다.");
                return;
            }

            const oid = mutationResult.enroll.oid;

            // 2. If Bank Transfer, redirect to complete page
            if (data.pay_method === "bank") {
                const params = new URLSearchParams({
                    name: data.buyer_name,
                    klass: data.klass,
                    amount: "420000",
                    oid: oid
                });
                router.push(`/payment/complete?${params.toString()}`);
                return;
            }

            // 3. If Card (PG), Fetch Signatures and Trigger PG
            if (data.pay_method === "card") {
                const config = mutationResult.enroll.inicisConfig;
                if (!config) {
                    alert("결제 설정 로딩 중 오류가 발생했습니다.");
                    setIsSubmitting(false);
                    return;
                }

                if (isMobile) {
                    setPgData({
                        P_TIMESTAMP: config.P_TIMESTAMP,
                        P_CHKFAKE: config.P_CHKFAKE,
                        oid: mutationResult.enroll.oid,
                        productName: productName,
                        buyername: data.buyer_name,
                        buyertel: data.buyer_tel,
                        buyeremail: data.buyer_email,
                    });

                    setTimeout(() => {
                        const form = document.getElementById("mobile_payment_form") as HTMLFormElement;
                        if (form) {
                            // Extra MID assignment for security
                            const midInput = form.querySelector('input[name="P_MID"]') as HTMLInputElement;
                            if (midInput) midInput.value = config.mid;
                            form.submit();
                        }
                    }, 100);
                } else {
                    setPgData({
                        timestamp: config.timestamp,
                        signature: config.signature,
                        verification: config.verification,
                        mKey: config.mKey,
                        oid: mutationResult.enroll.oid,
                        productName: productName,
                        buyername: data.buyer_name,
                        buyertel: data.buyer_tel,
                        buyeremail: data.buyer_email,
                    });

                    setTimeout(() => {
                        const form = document.getElementById("pc_payment_form") as HTMLFormElement;
                        if (form) {
                            const midInput = form.querySelector('input[name="mid"]') as HTMLInputElement;
                            if (midInput) midInput.value = config.mid;
                            // @ts-ignore
                            if (window.INIStdPay) {
                                // @ts-ignore
                                window.INIStdPay.pay("pc_payment_form");
                            }
                        }
                    }, 100);
                }
            }

        } catch (error: any) {
            console.error("Mutation Error:", error);
            alert("처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

                    {/* Header */}
                    <div className="bg-brand-black p-8 text-center">
                        <h1 className="text-3xl font-black text-white tracking-tight">수강등록 신청서</h1>
                        <p className="text-gray-400 text-sm mt-2">정확한 정보 입력을 부탁드립니다</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-10">

                        {/* Input Group: Name */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                수강자명 (반드시 수강자 본인의 본명) <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("buyer_name")}
                                type="text"
                                placeholder="예시) 홍길동"
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all placeholder-gray-300"
                            />
                            {errors.buyer_name && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.buyer_name.message}</p>}
                        </div>

                        {/* Input Group: Tel */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                휴대폰 번호 <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("buyer_tel")}
                                onChange={handlePhoneChange}
                                type="text"
                                placeholder="예시) 010-0000-0000"
                                maxLength={13}
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all placeholder-gray-300"
                            />
                            {errors.buyer_tel && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.buyer_tel.message}</p>}
                        </div>

                        {/* Input Group: Email */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                이메일 (상시확인 가능한 메일) <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("buyer_email")}
                                type="email"
                                placeholder="예시) hi@cliffenglish.com"
                                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all placeholder-gray-300"
                            />
                            {errors.buyer_email && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.buyer_email.message}</p>}
                        </div>

                        <hr className="border-gray-100" />

                        {/* Input Group: Class Selection */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                수강방식 선택 <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                <Controller
                                    control={control}
                                    name="klass"
                                    render={({ field }) => (
                                        <>
                                            {/* Class A (Video 3월) */}
                                            <label
                                                htmlFor="klass_b"
                                                className={`flex items-center p-4 border rounded cursor-pointer transition-all ${field.value === ENROLLMENT_CONSTANTS.KLASS.B ? "border-brand-blue bg-blue-50/50 ring-1 ring-brand-blue" : "border-gray-200 hover:border-gray-300"}`}
                                            >
                                                <input
                                                    {...field}
                                                    id="klass_b"
                                                    type="radio"
                                                    value={ENROLLMENT_CONSTANTS.KLASS.B}
                                                    checked={field.value === ENROLLMENT_CONSTANTS.KLASS.B}
                                                    onChange={() => field.onChange(ENROLLMENT_CONSTANTS.KLASS.B)}
                                                    className="w-4 h-4 text-brand-blue border-gray-300 focus:ring-brand-blue"
                                                />
                                                <span className="ml-3 text-sm font-medium text-gray-700 font-bold">[A] 영상반 (3월 개강)</span>
                                            </label>

                                            {/* Class B (Offline) - Disabled Style */}
                                            <label className="flex items-center p-4 border border-gray-100 rounded bg-gray-50 opacity-60 cursor-not-allowed">
                                                <input
                                                    type="radio"
                                                    disabled
                                                    className="w-4 h-4 text-gray-300 border-gray-200"
                                                />
                                                <span className="ml-3 text-sm text-gray-400">[B] 출석반 <sup className="text-red-400 font-bold">(*2026년 3월 모집예정)</sup></span>
                                            </label>
                                        </>
                                    )}
                                />
                            </div>
                            {errors.klass && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.klass.message}</p>}
                        </div>

                        {/* Input Group: Open Date Confirm */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                개강일 확인 <span className="text-red-500">*</span>
                            </label>
                            {!watchKlass ? (
                                <span className="text-gray-400 text-sm">수강 반을 먼저 선택해주세요.</span>
                            ) : (
                                <div className="p-4 bg-gray-50 rounded border border-gray-200 text-sm text-gray-700 font-bold flex items-center gap-2">
                                    <Check size={16} className="text-brand-blue" />
                                    {watchKlass === ENROLLMENT_CONSTANTS.KLASS.B ? ENROLLMENT_CONSTANTS.OPEN_DATE.B :
                                        watchKlass === ENROLLMENT_CONSTANTS.KLASS.C ? ENROLLMENT_CONSTANTS.OPEN_DATE.C :
                                            ENROLLMENT_CONSTANTS.OPEN_DATE.A} 개강 예정
                                </div>
                            )}
                        </div>

                        {/* Input Group: Address (Conditional) */}
                        {watchKlass && watchKlass.endsWith("V") && (
                            <div className="space-y-4 animate-fadeIn">
                                <label className="block text-sm font-bold text-gray-700">
                                    교재를 받을 정확한 주소 <span className="text-red-500">*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="buyer_addr"
                                    render={({ field }) => (
                                        <textarea
                                            {...field}
                                            placeholder="예시) 서울시 마포구 월드컵북로 2길 11 2층"
                                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all placeholder-gray-300 min-h-[100px] resize-none"
                                        />
                                    )}
                                />
                                {errors.buyer_addr && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.buyer_addr.message}</p>}
                            </div>
                        )}

                        <hr className="border-gray-100" />

                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-700">
                                납부 방법 <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="pay_method"
                                render={({ field }) => (
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="pay_card"
                                            className={`flex items-center p-4 border rounded cursor-pointer transition-all ${field.value === "card" ? "border-brand-blue bg-blue-50/50 ring-1 ring-brand-blue" : "border-gray-200 hover:border-gray-300"}`}
                                        >
                                            <input
                                                {...field}
                                                id="pay_card"
                                                type="radio"
                                                value="card"
                                                checked={field.value === "card"}
                                                onChange={() => field.onChange("card")}
                                                className="w-4 h-4 text-brand-blue border-gray-300 focus:ring-brand-blue"
                                            />
                                            <span className="ml-3 text-sm font-bold text-gray-700">온라인 카드 결제</span>
                                        </label>

                                        <label
                                            htmlFor="pay_bank"
                                            className={`flex items-center p-4 border rounded cursor-pointer transition-all ${field.value === "bank" ? "border-brand-yellow bg-yellow-50/50 ring-1 ring-brand-yellow" : "border-gray-200 hover:border-gray-300"}`}
                                        >
                                            <input
                                                {...field}
                                                id="pay_bank"
                                                type="radio"
                                                value="bank"
                                                checked={field.value === "bank"}
                                                onChange={() => field.onChange("bank")}
                                                className="w-4 h-4 text-brand-yellow border-gray-300 focus:ring-brand-yellow"
                                            />
                                            <span className="ml-3 text-sm font-bold text-gray-700">계좌 이체 (무통장 입금)</span>
                                        </label>
                                    </div>
                                )}
                            />
                            {errors.pay_method && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.pay_method.message}</p>}
                        </div>

                        {/* Agreement */}
                        <div className="space-y-4 bg-gray-50 p-6 rounded text-sm text-gray-600">
                            <label className="block font-bold mb-2">
                                개인정보이용 및 서비스 이용약관 동의 <span className="text-red-500">*</span>
                            </label>
                            <p className="leading-relaxed text-xs text-gray-500 mb-4">
                                <Link href="/privacy" className="underline hover:text-brand-blue" target="_blank">개인정보이용</Link> 및 <Link href="/terms" className="underline hover:text-brand-blue" target="_blank">서비스 이용약관</Link>에 동의 합니다.<br />
                                개인정보는 수강등록, 서비스제공을 위해 입력된 정보(이름, 전화번호, 이메일, 주소)를 수집합니다. 수집된 정보는 목적이외로는 절대 사용되지 않으며 개인정보 처리 방침에 따라 3년 동안 보관됩니다.
                            </p>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...register("agreement")}
                                    className="w-5 h-5 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                                />
                                <span className="font-bold text-brand-black">동의 함</span>
                            </label>
                            {errors.agreement && <p className="text-red-500 text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.agreement.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 bg-brand-blue text-white text-xl font-black rounded-lg shadow-lg hover:bg-black hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" /> 처리중...
                                </>
                            ) : (
                                "등록하기"
                            )}
                        </button>

                    </div>
                </form>

                {/* Hidden Forms for Inicis - Always render to avoid lookup issues */}
                <div style={{ display: 'none' }}>
                    {/* PC Form */}
                    <form id="pc_payment_form" method="POST">
                        <input type="hidden" name="version" value="1.0" />
                        <input type="hidden" name="gopaymethod" value="card" />
                        <input type="hidden" name="mid" value={process.env.NEXT_PUBLIC_INI_MID || "INIpayTest"} />
                        <input type="hidden" name="oid" value={pgData?.oid || ""} />
                        <input type="hidden" name="price" value="420000" />
                        <input type="hidden" name="timestamp" value={pgData?.timestamp || ""} />
                        <input type="hidden" name="use_chkfake" value="Y" />
                        <input type="hidden" name="signature" value={pgData?.signature || ""} />
                        <input type="hidden" name="verification" value={pgData?.verification || ""} />
                        <input type="hidden" name="mKey" value={pgData?.mKey || ""} />
                        <input type="hidden" name="currency" value="WON" />
                        <input type="hidden" name="goodname" value={pgData?.productName || "수강등록"} />
                        <input type="hidden" name="buyername" value={pgData?.buyername || ""} />
                        <input type="hidden" name="buyertel" value={pgData?.buyertel || ""} />
                        <input type="hidden" name="buyeremail" value={pgData?.buyeremail || ""} />
                        <input type="hidden" name="returnUrl" value={typeof window !== 'undefined' ? `${window.location.origin}/api/payment/pc/callback` : ""} />
                        <input type="hidden" name="closeUrl" value={typeof window !== 'undefined' ? `${window.location.origin}/api/payment/pc/close` : ""} />
                        <input type="hidden" name="acceptmethod" value="HPP(1):centerCd(Y)" />
                        <input type="hidden" name="merchantData" value={pgData ? `${pgData.oid}|${encodeURIComponent(pgData.buyername)}|${pgData.buyertel}|${pgData.buyeremail}|${watchKlass}|true` : ""} />
                    </form>

                    {/* Mobile Form */}
                    <form id="mobile_payment_form" method="POST" action="https://stgmobile.inicis.com/smart/payment/">
                        <input type="hidden" name="P_MID" value={process.env.NEXT_PUBLIC_INI_MID || "INIpayTest"} />
                        <input type="hidden" name="P_OID" value={pgData?.oid || ""} />
                        <input type="hidden" name="P_AMT" value="420000" />
                        <input type="hidden" name="P_GOODS" value={pgData?.productName || "수강등록"} />
                        <input type="hidden" name="P_UNAME" value={pgData?.buyername || ""} />
                        <input type="hidden" name="P_MOBILE" value={pgData?.buyertel || ""} />
                        <input type="hidden" name="P_EMAIL" value={pgData?.buyeremail || ""} />
                        <input type="hidden" name="P_NEXT_URL" value={typeof window !== 'undefined' ? `${window.location.origin}/api/payment/mobile/callback` : ""} />
                        <input type="hidden" name="P_NOTI_URL" value={typeof window !== 'undefined' ? `${window.location.origin}/api/payment/mobile/noti` : ""} />
                        <input type="hidden" name="P_TIMESTAMP" value={pgData?.P_TIMESTAMP || ""} />
                        <input type="hidden" name="P_CHKFAKE" value={pgData?.P_CHKFAKE || ""} />
                        <input type="hidden" name="P_RESERVED" value="centerCd=Y&amt_hash=Y" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function PaymentPage() {
    return (
        <ApolloWrapper>
            <InicisScript />
            <PaymentFormContent />
        </ApolloWrapper>
    );
}

