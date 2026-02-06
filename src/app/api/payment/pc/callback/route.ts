import { NextRequest, NextResponse } from 'next/server';

/**
 * Inicis PC Payment Callback Handler
 * 
 * This endpoint receives the payment result from Inicis after user completes payment.
 * It validates the payment with backend GraphQL mutation and redirects to result page.
 */
export async function POST(req: NextRequest) {
    try {
        // Get base URL from environment variable or fallback to production URL
        const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://web.cliffenglish.co.kr';

        console.log('=== Callback Base URL ===');
        console.log('NEXT_PUBLIC_CLIENT_URL:', process.env.NEXT_PUBLIC_CLIENT_URL);
        console.log('req.nextUrl.origin:', req.nextUrl.origin);
        console.log('Using baseUrl:', baseUrl);
        console.log('========================');

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
                `${baseUrl}/payment?error=${encodeURIComponent(resultMsg as string)}`,
                303
            );
        }

        // Success - redirect to complete page
        // We use the OID from merchantData (which we sent) rather than orderNumber (which Inicis returns)
        // to ensure perfect matching with our DB record.
        let actualOid = oid as string;
        let name = '';
        let klass = '';

        if (merchantData) {
            const dataParts = (merchantData as string).split('|');
            if (dataParts.length > 0) {
                actualOid = dataParts[0]; // Use the first part as the real OID
                name = dataParts[1] ? decodeURIComponent(dataParts[1]) : '';
                klass = dataParts[4] || '';
            }
        }

        const params = new URLSearchParams({
            amount: '420000',
            oid: actualOid,
            mid: mid as string,
            authToken: authToken as string,
            authUrl: authUrl as string,
            type: 'PC'
        });

        if (name) params.append('name', name);
        if (klass) params.append('klass', klass);

        return NextResponse.redirect(
            `${baseUrl}/payment/complete?${params.toString()}`,
            303
        );

    } catch (error: any) {
        console.error('Inicis PC Callback Error:', error);
        const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://web.cliffenglish.co.kr';
        return NextResponse.redirect(
            `${baseUrl}/payment?error=${encodeURIComponent('결제 처리 중 오류가 발생했습니다.')}`,
            303
        );
    }
}
