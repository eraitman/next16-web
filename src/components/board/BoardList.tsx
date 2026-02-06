"use client";

import React, { useState } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client/react";


import moment from "moment";
import "moment/locale/ko";
import { Search } from "lucide-react";
import { Pagination } from "./Pagination";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const GET_LIST = gql`
  query list(
    $pageNo: Int!
    $count: Int!
    $searchingWord: String
    $lpo: String
  ) {
    list(
      pageNo: $pageNo
      count: $count
      searchingWord: $searchingWord
      lpo: $lpo
    ) {
      id
      title
      view
      author
      created_at
    }
  }
`;

const GET_PAGECOUNT = gql`
  query pageCount($searchingWord: String) {
    pageCount(searchingWord: $searchingWord)
  }
`;

interface Post {
    id: number;
    title: string;
    view: number;
    author: string;
    created_at: string;
}

interface BoardListData {
    list: Post[];
}

interface BoardListVars {
    pageNo: number;
    count: number;
    searchingWord?: string;
    lpo?: string | null;
}

interface PageCountData {
    pageCount: number;
}

interface PageCountVars {
    searchingWord?: string;
}

export function BoardList({ activePostId }: { activePostId?: number }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const pageNo = parseInt(searchParams.get("pageNo") || "1", 10);
    const searchQuery = searchParams.get("search");

    const [searchInput, setSearchInput] = useState(searchQuery || "");

    const { data } = useSuspenseQuery<BoardListData, BoardListVars>(GET_LIST, {
        variables: {
            pageNo,
            count: 12,
            searchingWord: searchQuery || undefined,
            lpo: null,
        },
    });

    const { data: pageData } = useSuspenseQuery<PageCountData, PageCountVars>(GET_PAGECOUNT, {
        variables: { searchingWord: searchQuery || undefined },
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("pageNo", "1");
        if (searchInput) {
            params.set("search", searchInput);
        } else {
            params.delete("search");
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    // Loading handled by Suspense

    const list = data?.list || [];
    const pageCount = pageData?.pageCount || 0;

    return (
        <div className="space-y-8">
            <div className="flex justify-end">
                <form onSubmit={handleSearch} className="relative w-full max-w-xs">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="검색어를 입력하세요"
                        className="w-full pl-4 pr-10 py-2 border-b-2 border-brand-gray focus:border-brand-yellow outline-none font-bold text-sm bg-transparent transition-all"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue">
                        <Search size={18} />
                    </button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-brand-gray/50 text-[10px] font-black uppercase tracking-widest text-brand-blue">
                            <th className="px-6 py-4 w-20 text-center">No</th>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4 w-32">Author</th>
                            <th className="px-6 py-4 w-32 text-center">Date</th>
                            <th className="px-6 py-4 w-20 text-center">View</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {list.map((post: Post, idx: number) => {
                            const displayIdx = pageCount - (pageNo - 1) * 12 - idx;
                            const isSelected = post.id === activePostId;
                            const postUrl = `/review/view?pageNo=${pageNo}&id=${post.id}`;

                            return (
                                <tr
                                    key={post.id}
                                    className={`group hover:bg-brand-gray transition-colors cursor-pointer ${isSelected ? 'bg-brand-yellow/10' : ''}`}
                                    onClick={() => router.push(postUrl)}
                                >
                                    <td className="px-6 py-4 text-center text-xs font-bold text-gray-400">{displayIdx}</td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={postUrl}
                                            className={`font-bold text-sm tracking-tight block w-full ${isSelected ? 'text-brand-blue underline decoration-brand-yellow' : 'text-brand-black group-hover:text-brand-blue'}`}
                                            onClick={(e) => e.stopPropagation()} // Let the TR handler work too, but technically this is the SEO link
                                        >
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-black text-brand-blue uppercase">{post.author}</td>
                                    <td className="px-6 py-4 text-center text-xs text-gray-400 font-bold font-mono">
                                        {moment(parseInt(post.created_at, 10)).format("YYYY.MM.DD")}
                                    </td>
                                    <td className="px-6 py-4 text-center text-xs text-gray-400 font-bold">{post.view}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination
                pageNo={pageNo}
                pageCount={pageCount}
                searchingWord={searchQuery}
                basePath={pathname}
            />
        </div>
    );
}
