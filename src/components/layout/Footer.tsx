'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-brand-black text-[#f9b234] py-12 md:py-16 font-sans border-t border-brand-yellow/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            {/* Simplified Logo for Footer */}
                            <div className="bg-brand-yellow px-2 py-1">
                                <span className="text-brand-black font-black text-xl tracking-tighter italic">CLIFF</span>
                            </div>
                            <span className="font-bold text-white text-lg tracking-tight">ENGLISH</span>
                        </div>

                        <div className="space-y-2 text-sm opacity-80 leading-relaxed max-w-lg">
                            <p className="font-bold text-brand-yellow">(주)티랑 T-LANG Inc.</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                <span>벼랑영어학원 (제 02201300092호)</span>
                                <span>벼랑영어원격학원 (제 02202400069호)</span>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                <span>대표이사 유종안</span>
                                <span>사업자등록: 186-81-00716</span>
                                <a
                                    href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1868100716&amp;apv_perm_no="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-white transition-colors"
                                >
                                    정보확인
                                </a>
                            </div>
                            <p>통신판매업신고번호: 제2018-서울마포-1615호</p>
                            <p>서울시 마포구 월드컵북로2길 11 (홍대입구역 1번 출구 90m)</p>
                            <p>문의: 02-336-8992 | hi@cliffenglish.com</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
                        <h4 className="text-white border-b border-brand-yellow/30 pb-2">Policies</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/privacy" className="hover:text-brand-yellow transition-colors">개인정보처리방침</Link>
                            <Link href="/terms" className="hover:text-brand-yellow transition-colors">이용약관</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-brand-yellow/10 text-[10px] md:text-xs opacity-50 flex justify-between items-center">
                    <p>© {new Date().getFullYear()} T-LANG Inc. All rights reserved.</p>
                    <p className="tracking-widest italic">단호, 정직, 솔직한 성과</p>
                </div>
            </div>
        </footer>
    );
}
