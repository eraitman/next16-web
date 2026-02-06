"use client";

import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import React from "react";

export const ClientMotionDiv = (props: HTMLMotionProps<"div">) => <motion.div {...props} />;
export const ClientMotionSection = (props: HTMLMotionProps<"section">) => <motion.section {...props} />;
export const ClientMotionArticle = (props: HTMLMotionProps<"article">) => <motion.article {...props} />;
export const ClientMotionH1 = (props: HTMLMotionProps<"h1">) => <motion.h1 {...props} />;
export const ClientMotionH2 = (props: HTMLMotionProps<"h2">) => <motion.h2 {...props} />;
export const ClientMotionP = (props: HTMLMotionProps<"p">) => <motion.p {...props} />;
export const ClientMotionSpan = (props: HTMLMotionProps<"span">) => <motion.span {...props} />;
