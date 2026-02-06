import type { Attributes } from '@flags-sdk/growthbook';
import type { Identify } from 'flags';
import { dedupe } from 'flags/next';
import { cookies } from 'next/headers';

/**
 * GrowthBook 유저 식별 및 타겟팅 속성 정의
 * 
 * 쿠키에서 'ab_cid'를 추출하여 유저 고유 ID로 사용합니다.
 */
export const identify = dedupe(async () => {
    const cookieStore = await cookies();
    // TODO: 미들웨어에서 'ab_cid'가 자동 생성되도록 보완 예정
    const cid = cookieStore.get('ab_cid')?.value || 'anonymous';

    return {
        "id": cid,
        "source": "web",
        // 필요 시 deviceType, browser 등을 헤더에서 추출하여 추가 가능
    };
}) satisfies Identify<Attributes>;
