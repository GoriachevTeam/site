import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { AppLayout } from "@/components/layouts";

import { cn } from "@/lib/utils";
import { GA4_ID } from "@/lib/constants";
import { genMetaData } from "@/lib/metadata";

import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = genMetaData({
  title: "Офтальмологічний центр Дмитра Горячева у Львові",
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
      <body
        className={cn(montserrat.className, `antialiased overflow-x-hidden`)}
      >
        <AppLayout>{children}</AppLayout>
        {GA4_ID ? <GoogleAnalytics gaId={GA4_ID} /> : null}
      </body>
    </html>
  );
}
