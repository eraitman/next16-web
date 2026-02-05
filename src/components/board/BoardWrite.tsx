"use client";

import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "suneditor/dist/css/suneditor.min.css";
import { motion } from "framer-motion";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-brand-gray animate-pulse" />,
});

const SAVE_POST = gql`
  mutation savePost($post_id: Int, $author: String!, $title: String!, $content: String!) {
    savePost(post_id: $post_id, author: $author, title: $title, content: $content) {
      id
      title
      content
      author
    }
  }
`;

interface SavePostData {
    savePost: {
        id: number;
        title: string;
        content: string;
        author: string;
    };
}

interface SavePostVars {
    post_id: number | null;
    author: string;
    title: string;
    content: string;
}

interface BoardWriteProps {
    initialData?: {
        id: number;
        title: string;
        author: string;
        content: string;
    };
}

export function BoardWrite({ initialData }: BoardWriteProps) {
    const router = useRouter();
    const [savePostMutation, { loading: saving }] = useMutation<SavePostData, SavePostVars>(SAVE_POST);

    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: {
            title: initialData?.title || "",
            author: initialData?.author || "",
            content: initialData?.content || ""
        }
    });

    const onSubmit = async (data: any) => {
        try {
            const { data: resultData } = await savePostMutation({
                variables: {
                    post_id: initialData?.id || null,
                    title: data.title,
                    author: data.author,
                    content: data.content
                }
            });

            if (resultData?.savePost) {
                alert("성공적으로 저장되었습니다.");
                router.push(`/review/view?pageNo=1&id=${resultData.savePost.id}`);
                router.refresh();
            }
        } catch (err) {
            console.error(err);
            alert("저장 중 오류가 발생했습니다.");
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 bg-white p-8 md:p-12 border border-gray-100 shadow-sm"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3 space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">제목</label>
                    <input
                        {...register("title", { required: true })}
                        placeholder="제목을 입력하세요"
                        className={`w-full px-4 py-3 border-b-2 font-bold text-lg outline-none transition-all ${errors.title ? "border-red-500" : "border-brand-gray focus:border-brand-yellow"
                            }`}
                    />
                    {errors.title && <p className="text-red-500 text-[10px] font-bold">제목은 필수입니다.</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-blue">작성자</label>
                    <input
                        {...register("author", { required: true })}
                        placeholder="작성자"
                        className={`w-full px-4 py-3 border-b-2 font-bold text-lg outline-none transition-all ${errors.author ? "border-red-500" : "border-brand-gray focus:border-brand-yellow"
                            }`}
                    />
                    {errors.author && <p className="text-red-500 text-[10px] font-bold">작성자는 필수입니다.</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-blue">내용</label>
                <div className="border border-brand-gray">
                    <Controller
                        name="content"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <SunEditor
                                setContents={field.value}
                                onChange={field.onChange}
                                setOptions={{
                                    height: "500",
                                    buttonList: [
                                        ["undo", "redo"],
                                        ["font", "fontSize", "formatBlock"],
                                        ["paragraphStyle", "blockquote"],
                                        ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                                        ["fontColor", "hiliteColor", "textStyle"],
                                        ["removeFormat"],
                                        ["outdent", "indent"],
                                        ["align", "horizontalRule", "list", "lineHeight"],
                                        ["table", "link", "image", "video", "audio"],
                                        ["fullScreen", "showBlocks", "codeView"],
                                        ["preview", "print"],
                                    ],
                                    stickyToolbar: "0",
                                }}
                            />
                        )}
                    />
                </div>
                {errors.content && <p className="text-red-500 text-[10px] font-bold">내용을 입력해주세요.</p>}
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-8 py-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-brand-blue transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={saving}
                    className="px-12 py-3 bg-brand-yellow text-brand-black font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all disabled:opacity-50"
                >
                    {saving ? "Saving..." : "Save Post"}
                </button>
            </div>
        </motion.form>
    );
}
