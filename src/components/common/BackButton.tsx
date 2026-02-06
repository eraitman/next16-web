"use client";

import React from "react";

export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="text-xs font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
            ← Back to List
        </button>
    );
}
