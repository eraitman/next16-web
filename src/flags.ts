import { growthbookAdapter } from '@flags-sdk/growthbook';
import { flag } from 'flags/next';
import { after } from 'next/server';
import { identify } from '@/lib/identify';

/**
 * 트래킹 콜백 설정
 * 
 * 유저가 실험군에 노출될 때마다 비동기로 트래킹을 수행합니다.
 */
growthbookAdapter.setTrackingCallback((experiment, result) => {
    after(async () => {
        console.log('Viewed Experiment:', {
            experimentId: experiment.key,
            variationId: result.key,
        });

        // TODO: 백엔드(homepage-server) 트래킹 API 연동
        // context: cid를 식별하기 위해 identify 호출 가능
    });
});

/**
 * 메인 페이지 A/B 테스트 플래그
 * 
 * 'control'(대조군)과 'test'(실험군)로 구분합니다.
 */
export const mainPageExperiment = flag<string>({
    key: "main-page-test",
    adapter: growthbookAdapter.feature<string>(),
    defaultValue: "control",
    identify,
});
