"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client/react";

import moment from "moment";
import { BoardList } from "./BoardList";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const GET_POST = gql`
  query post($id: Int!) {
    post(id: $id) {
      id
      title
      content
      author
      created_at
    }
  }
`;

interface BoardViewData {
    post: {
        id: number;
        title: string;
        content: string;
        author: string;
        created_at: string;
    };
}

interface BoardViewVars {
    id: number;
}

export function BoardView({ id }: { id: number }) {
    const { data } = useSuspenseQuery<BoardViewData, BoardViewVars>(GET_POST, {
        variables: { id },
    });

    // Loading handled by Suspense
    if (!data?.post) return <div className="py-20 text-center text-red-500 font-bold">POST NOT FOUND</div>;

    const { post } = data;

    return (
        <div className="space-y-12">
            <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-100 shadow-sm p-8 md:p-12 space-y-8"
            >
                <header className="space-y-4 border-b border-brand-gray pb-8">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-black leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-xs font-black uppercase tracking-widest text-brand-blue">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">Author:</span>
                            <span className="bg-brand-yellow/20 px-2 py-0.5 rounded text-brand-black">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">Date:</span>
                            <time className="font-mono">{moment(parseInt(post.created_at, 10)).format("YYYY.MM.DD")}</time>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-slate max-w-none text-brand-black font-medium leading-relaxed
                     prose-headings:font-black prose-headings:tracking-tighter
                     prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                     prose-strong:font-black"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </motion.article>

            <div className="pt-20 border-t border-brand-gray shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-black tracking-tighter text-brand-blue mb-8 ml-4 italic uppercase">Related Reviews</h3>
                <BoardList activePostId={id} />
            </div>
        </div>
    );
}
