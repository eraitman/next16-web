import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // Get base URL from environment variable or fallback to production URL
        const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://web.cliffenglish.co.kr';

        console.log('=== Mobile Callback Base URL ===');
        console.log('NEXT_PUBLIC_CLIENT_URL:', process.env.NEXT_PUBLIC_CLIENT_URL);
        console.log('req.nextUrl.origin:', req.nextUrl.origin);
        console.log('Using baseUrl:', baseUrl);
        console.log('================================');

        const formData = await req.formData();
        const P_STATUS = formData.get('P_STATUS');
        const P_RMESG1 = formData.get('P_RMESG1');
        const P_TID = formData.get('P_TID');
        const P_REQ_URL = formData.get('P_REQ_URL');
        const P_NOTI = formData.get('P_NOTI');
        const P_MID = formData.get('P_MID');
        const P_OID = formData.get('P_OID');

        if (P_STATUS !== '00') {
            return NextResponse.redirect(`${baseUrl}/payment?error=${encodeURIComponent(P_RMESG1 as string)}`, 303);
        }

        let actualOid = P_OID as string;
        let name = '';
        let klass = '';

        if (P_NOTI) {
            const dataParts = (P_NOTI as string).split('|');
            if (dataParts.length > 0) {
                actualOid = dataParts[0]; // Real OID from our system
                name = dataParts[1] ? decodeURIComponent(dataParts[1]) : '';
                klass = dataParts[4] || '';
            }
        }

        const params = new URLSearchParams({
            tid: P_TID as string,
            reqUrl: P_REQ_URL as string,
            oid: actualOid,
            mid: P_MID as string,
            type: 'MOBILE'
        });

        if (name) params.append('name', name);
        if (klass) params.append('klass', klass);

        return NextResponse.redirect(`${baseUrl}/payment/complete?${params.toString()}`, 303);
    } catch (error) {
        console.error('Inicis Mobile Callback Error:', error);
        const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || 'https://web.cliffenglish.co.kr';
        return NextResponse.redirect(`${baseUrl}/payment?error=callback_error`, 303);
    }
}
