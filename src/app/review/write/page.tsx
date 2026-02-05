"use client";

import React, { use, useEffect, useState } from "react";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { BoardWrite } from "@/components/board/BoardWrite";
import { motion } from "framer-motion";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client/react";

const GET_POST = gql`
  query post($id: Int!) {
    post(id: $id) {
      id
      title
      content
      author
    }
  }
`;

function ReviewEditor({ id }: { id: number }) {
    const { data } = useSuspenseQuery<any>(GET_POST, { variables: { id } });
    return <BoardWrite initialData={data.post} />;
}

export default function ReviewWritePage({
    searchParams
}: {
    searchParams: Promise<{ id?: string, p?: string }>
}) {
    const { id, p } = use(searchParams);
    const isAuthorized = p === "iu";

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-gray">
                <h2 className="text-2xl font-black text-red-500 uppercase tracking-tighter">Unauthorized Access</h2>
            </div>
        );
    }

    return (
        <ApolloWrapper>
            <div className="flex flex-col w-full py-20 bg-brand-gray/20 min-h-screen">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8 flex justify-between items-end"
                    >
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black tracking-tighter text-brand-black uppercase italic">
                                {id ? "Edit Review" : "Write Review"}
                            </h1>
                            <p className="text-sm font-bold text-gray-400">수료 소감을 정직하게 작성해주세요.</p>
                        </div>
                    </motion.div>

                    {id ? (
                        <React.Suspense fallback={<div className="py-20 text-center font-bold text-gray-400">LOADING POST DATA...</div>}>
                            <ReviewEditor id={parseInt(id)} />
                        </React.Suspense>
                    ) : (
                        <BoardWrite />
                    )}
                </div>
            </div>
        </ApolloWrapper>
    );
}
