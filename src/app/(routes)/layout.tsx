import {Header} from "@/components/layout/header";
import Script from 'next/script'
// import { useRouter } from 'next/router';
import {Inter} from "next/font/google";
import {cn} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children,}:
{ children: React.ReactNode; }) {
    return (
        <>
            <Script
                strategy="beforeInteractive"
                type="text/javascript"
                src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAPS_CLIENT_ID}&submodules=geocoder`}
            ></Script>
            <Header/>
            <div className={cn("mt-3", inter.className)}>{children}</div>
        </>
    );
}