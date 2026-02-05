'use client';

import React from 'react';
import Link from 'next/link';

export function LpoPost({ variant = 'BASE' }: { variant?: string }) {
    // Simplified for now, can be expanded with full LPO logic
    const content = {
        title: "벼랑영어, 내 인생 마지막 영어 학원",
        body: "처음엔 학원 다닐 생각도 없었는데, 우연찮게 카페에 들어왔는데 문구가 너무 강렬해서 가입까지 하게 되었어요. 가입하고 수강을 결심하기까지 크게 2가지 부분이 마음에 들었습니다. 첫번째는 시스템적인 측면이었습니다. 벼랑영어는 재수강이 없고, 원어민 강사를 써서 괜히 수강료를 뻥튀기하지도 않으며, 스터디랍시고 수강생끼리 토론시켜서 시간을 때우지도 않습니다...",
        link: "/review/view?id=854"
    };

    return (
        <div className="space-y-4 text-brand-black">
            <span className="block text-xl font-black tracking-tight border-b-2 border-brand-yellow pb-2">
                "{content.title}"
            </span>
            <p className="text-base leading-relaxed text-justify opacity-90">
                {content.body}
            </p>
            <Link
                href={content.link}
                className="inline-block bg-brand-yellow px-4 py-2 text-sm font-bold hover:bg-brand-black hover:text-white transition-all transform hover:-translate-y-1"
            >
                이 수강소감 더 읽어보기 →
            </Link>
        </div>
    );
}
