import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { AppLayout } from "@/components/layouts";

import { cn } from "@/lib/utils";
import { CLARITY_ID, GA4_ID, GTM_ID } from "@/lib/constants";
import { genMetaData } from "@/lib/metadata";

import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = genMetaData({
  title: "Офтальмологічний центр Дмитра Горячева в Ужгороді",
  description:
    "Сучасна лазерна корекція зору, лікування катаракти, глаукоми та комплексна діагностика очей. Запис онлайн та індивідуальний підхід до кожного пацієнта.",
  img: "share-og.png",
  canonical: "",
  asLayout: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        {CLARITY_ID ? (
          <script
            id="microsoft-clarity"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
              `,
            }}
          />
        ) : null}
      </head>
      {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      {GA4_ID ? <GoogleAnalytics gaId={GA4_ID} /> : null}
      <body
        className={cn(montserrat.className, `antialiased overflow-x-hidden`)}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
