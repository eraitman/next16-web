'use client';

import React from 'react';
import Link from 'next/link';

interface PaginationProps {
    pageNo: number;
    pageCount: number;
    searchingWord?: string | null;
    basePath: string;
}

export function Pagination({ pageNo, pageCount, searchingWord, basePath }: PaginationProps) {
    const totalPages = Math.ceil(pageCount / 12);
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center space-x-2 py-8">
            {pages.map((p) => (
                <Link
                    key={p}
                    href={`${basePath}?pageNo=${p}${searchingWord ? `&search=${searchingWord}` : ''}`}
                    className={`w-10 h-10 flex items-center justify-center font-bold transition-all ${p === pageNo
                            ? 'bg-brand-yellow text-brand-black shadow-md'
                            : 'bg-white text-gray-400 hover:text-brand-blue border border-gray-100'
                        }`}
                >
                    {p}
                </Link>
            ))}
        </nav>
    );
}
