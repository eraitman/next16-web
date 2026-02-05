export const ENROLLMENT_CONSTANTS = {
    OPEN_DATE: {
        A: process.env.NEXT_PUBLIC_OPEN_DATE_A || "'26. 4. 3(금)",
        B: process.env.NEXT_PUBLIC_OPEN_DATE_B || "'26. 3. 4(수)",
        C: process.env.NEXT_PUBLIC_OPEN_DATE_C || "'26. 4. 6(월)",
    },
    END_DATE: {
        A: process.env.NEXT_PUBLIC_END_DATE_A || "'26. 6. 26(금)",
        B: process.env.NEXT_PUBLIC_END_DATE_B || "'26. 6. 1(월)",
        C: process.env.NEXT_PUBLIC_END_DATE_C || "'26. 7. 5(일)",
    },
    DURATION: {
        A: process.env.NEXT_PUBLIC_DURATION_A || "'26.4.3(금) ~ 6.26(금)",
        B: process.env.NEXT_PUBLIC_DURATION_B || "'26.3.4(수) ~ 6.1(월)",
        C: process.env.NEXT_PUBLIC_DURATION_C || "'26.4.6(월) ~ 7.5(일)",
    },
    KLASS: {
        A: process.env.NEXT_PUBLIC_KLASS_A || "2604A", // 출석반
        B: process.env.NEXT_PUBLIC_KLASS_B || "2603V", // 영상반 (빠른)
        C: process.env.NEXT_PUBLIC_KLASS_C || "2604V", // 영상반 (다음)
    }
};
