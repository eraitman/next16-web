import React from "react";
import { Metadata } from "next";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { BoardView } from "@/components/board/BoardView";
import { getClient } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { BackButton } from "../../../components/common/BackButton";
import { ClientMotionDiv } from "../../../components/common/ClientMotion";

const GET_POST_FOR_METADATA = gql`
  query post($id: Int!) {
    post(id: $id) {
      title
      author
      content
      created_at
    }
  }
`;

interface PostData {
    post: {
        title: string;
        author: string;
        content: string;
        created_at: string;
    };
}

export async function generateMetadata(
    { searchParams }: { searchParams: Promise<{ id: string }> }
): Promise<Metadata> {
    const { id } = await searchParams;
    const client = getClient();

    try {
        const { data } = await client.query<PostData>({
            query: GET_POST_FOR_METADATA,
            variables: { id: parseInt(id) },
        });

        if (!data?.post) return { title: "Review | 벼랑영어" };

        return {
            title: `${data.post.title} | 벼랑영어 수료 소감`,
            description: `${data.post.author}님의 정직한 수강 후기입니다.`,
            openGraph: {
                title: data.post.title,
                description: `${data.post.author}님의 정직한 수강 후기입니다.`,
                type: "article",
            },
        };
    } catch (e) {
        return { title: "Review | 벼랑영어" };
    }
}

export default async function ReviewViewPage({
    searchParams
}: {
    searchParams: Promise<{ id: string }>
}) {
    const { id } = await searchParams;

    // Fetch data for JSON-LD
    const client = getClient();
    let post = null;
    try {
        const result = await client.query<PostData>({
            query: GET_POST_FOR_METADATA,
            variables: { id: parseInt(id) },
        });
        post = result.data?.post;
    } catch (e) { }

    const jsonLd = post ? {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Course",
            "name": "벼랑영어 (Cliff English)",
            "description": "정직한 영어 회화 훈련 프로그램"
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "reviewBody": post.content.replace(/<[^>]*>/g, '').substring(0, 200),
        "datePublished": new Date(parseInt(post.created_at)).toISOString(),
        "headline": post.title
    } : null;

    return (
        <ApolloWrapper>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <div className="flex flex-col w-full py-20 bg-brand-gray/20 min-h-screen">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ClientMotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <BackButton />
                    </ClientMotionDiv>

                    <React.Suspense fallback={<div className="py-20 text-center font-bold text-gray-400">Loading post...</div>}>
                        <BoardView id={parseInt(id)} />
                    </React.Suspense>
                </div>
            </div>
        </ApolloWrapper>
    );
}
