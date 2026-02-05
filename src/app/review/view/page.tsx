"use client";

import React, { use } from "react";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { BoardView } from "@/components/board/BoardView";
import { motion } from "framer-motion";

export default function ReviewViewPage({
    searchParams
}: {
    searchParams: Promise<{ id: string }>
}) {
    const { id } = use(searchParams);

    return (
        <ApolloWrapper>
            <div className="flex flex-col w-full py-20 bg-brand-gray/20 min-h-screen">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <button
                            onClick={() => window.history.back()}
                            className="text-xs font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                        >
                            ← Back to List
                        </button>
                    </motion.div>

                    <React.Suspense fallback={<div className="py-20 text-center font-bold text-gray-400">Loading post...</div>}>
                        <BoardView id={parseInt(id)} />
                    </React.Suspense>
                </div>
            </div>
        </ApolloWrapper>
    );
}
