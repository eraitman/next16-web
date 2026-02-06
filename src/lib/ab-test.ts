"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

/**
 * A/B Testing Hook
 * 
 * Supports URL-persistent A/B testing.
 * If 'ab=B' is in the URL, it sets the group to 'B'.
 * Defaults to 'A'.
 */
export function useABTest() {
    const searchParams = useSearchParams();
    const [group, setGroup] = useState<"A" | "B">("A");

    useEffect(() => {
        // 1. Check URL first (URL-persistent priority)
        const abParam = searchParams.get("ab");
        if (abParam === "B") {
            setGroup("B");
            if (typeof window !== "undefined") {
                localStorage.setItem("ab_group", "B");
            }
            return;
        } else if (abParam === "A") {
            setGroup("A");
            if (typeof window !== "undefined") {
                localStorage.setItem("ab_group", "A");
            }
            return;
        }

        // 2. Check LocalStorage if no URL param
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("ab_group");
            if (saved === "B") {
                setGroup("B");
            }
        }
    }, [searchParams]);

    return {
        group,
        isA: group === "A",
        isB: group === "B",
    };
}
