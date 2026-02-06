import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const P_STATUS = formData.get('P_STATUS');
        const P_RMESG1 = formData.get('P_RMESG1');
        const P_TID = formData.get('P_TID');
        const P_REQ_URL = formData.get('P_REQ_URL');
        const P_NOTI = formData.get('P_NOTI');
        const P_MID = formData.get('P_MID');
        const P_OID = formData.get('P_OID');

        if (P_STATUS !== '00') {
            return NextResponse.redirect(`${req.nextUrl.origin}/payment?error=${encodeURIComponent(P_RMESG1 as string)}`, 303);
        }

        const params = new URLSearchParams({
            tid: P_TID as string,
            reqUrl: P_REQ_URL as string,
            oid: P_OID as string,
            mid: P_MID as string,
            type: 'MOBILE'
        });

        return NextResponse.redirect(`${req.nextUrl.origin}/payment/complete?${params.toString()}`, 303);
    } catch (error) {
        console.error('Inicis Mobile Callback Error:', error);
        return NextResponse.redirect(`${req.nextUrl.origin}/payment?error=callback_error`, 303);
    }
}
