import { NextRequest, NextResponse } from 'next/server';

/**
 * Inicis PC Payment Callback Handler
 * 
 * This endpoint receives the payment result from Inicis after user completes payment.
 * It validates the payment with backend GraphQL mutation and redirects to result page.
 */
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // Extract Inicis callback parameters
        const resultCode = formData.get('resultCode');
        const resultMsg = formData.get('resultMsg');
        const authToken = formData.get('authToken');
        const authUrl = formData.get('authUrl');
        const mid = formData.get('mid');
        const oid = formData.get('orderNumber'); // Inicis PC uses orderNumber as OID
        const merchantData = formData.get('merchantData');

        console.log('=== Inicis PC Callback ===');
        console.log('resultCode:', resultCode);
        console.log('resultMsg:', resultMsg);
        console.log('oid:', oid);
        console.log('authToken:', authToken);
        console.log('========================');

        // Check if payment was successful at Inicis side
        if (resultCode !== '0000') {
            console.error('Payment failed at Inicis:', resultMsg);
            return NextResponse.redirect(
                `${req.nextUrl.origin}/payment?error=${encodeURIComponent(resultMsg as string)}`,
                303
            );
        }

        // Call Backend GraphQL Mutation to validate and approve payment
        const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_SERVER_URL || 'https://server.cliffenglish.co.kr/graphql';

        const graphqlQuery = {
            query: `
                mutation validateInicis(
                    $oid: String!
                    $type: String!
                    $authToken: String!
                    $authUrl: String!
                    $mid: String!
                ) {
                    validateInicis(
                        oid: $oid
                        type: $type
                        authToken: $authToken
                        authUrl: $authUrl
                        mid: $mid
                    ) {
                        result
                        message
                        buyer_name
                        buyer_email
                        buyer_tel
                        option1
                    }
                }
            `,
            variables: {
                oid: oid,
                type: 'PC',
                authToken: authToken,
                authUrl: authUrl,
                mid: mid
            }
        };

        const response = await fetch(GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery)
        });

        const result = await response.json();

        console.log('Backend validation result:', result);

        if (result.errors) {
            console.error('GraphQL errors:', result.errors);
            return NextResponse.redirect(
                `${req.nextUrl.origin}/payment?error=${encodeURIComponent('결제 검증 중 오류가 발생했습니다.')}`,
                303
            );
        }

        const validationResult = result.data?.validateInicis;

        if (!validationResult?.result) {
            return NextResponse.redirect(
                `${req.nextUrl.origin}/payment?error=${encodeURIComponent(validationResult?.message || '결제 승인 실패')}`,
                303
            );
        }

        // Success - redirect to complete page
        const params = new URLSearchParams({
            name: validationResult.buyer_name || '',
            klass: validationResult.option1 || '',
            amount: '420000',
            oid: oid as string
        });

        return NextResponse.redirect(
            `${req.nextUrl.origin}/payment/complete?${params.toString()}`,
            303
        );

    } catch (error: any) {
        console.error('Inicis PC Callback Error:', error);
        return NextResponse.redirect(
            `${req.nextUrl.origin}/payment?error=${encodeURIComponent('결제 처리 중 오류가 발생했습니다.')}`,
            303
        );
    }
}
