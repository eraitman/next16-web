import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const resultCode = formData.get('resultCode');
        const resultMsg = formData.get('resultMsg');
        const authToken = formData.get('authToken');
        const authUrl = formData.get('authUrl');
        const netCancelUrl = formData.get('netCancelUrl');
        const mid = formData.get('mid');
        const oid = formData.get('orderNumber'); // Inicis PC uses orderNumber as OID

        if (resultCode !== '0000') {
            return NextResponse.redirect(`${req.nextUrl.origin}/payment?error=${encodeURIComponent(resultMsg as string)}`, 303);
        }

        // Call Backend Validation (Mutation)
        // Note: Since this is Server Side, we can use fetch/graphql directly or standard API
        // For now, let's redirect to a intermediate page or handle it here
        // Redirect to a frontend path that handles the final validation or success
        const params = new URLSearchParams({
            authToken: authToken as string,
            authUrl: authUrl as string,
            oid: oid as string,
            mid: mid as string,
            type: 'PC'
        });

        return NextResponse.redirect(`${req.nextUrl.origin}/payment/complete?${params.toString()}`, 303);
    } catch (error) {
        console.error('Inicis PC Callback Error:', error);
        return NextResponse.redirect(`${req.nextUrl.origin}/payment?error=callback_error`, 303);
    }
}
