"use client";

import Script from "next/script";

export default function InicisScript() {
    return (
        <Script
            src="https://stgstdpay.inicis.com/stdjs/INIStdPay.js"
            strategy="afterInteractive"
        />
    );
}
