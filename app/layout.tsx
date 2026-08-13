import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karam-event-hall.openai.site"),
  title: "Karam Event Hall | Esenyurt Davet Salonu",
  description: "Söz, nişan, kına, butik düğün ve özel davetler için Esenyurt'ta şık ve samimi bir etkinlik deneyimi.",
  keywords: ["Karam Event Hall", "Esenyurt davet salonu", "nişan salonu", "kına gecesi", "butik düğün"],
  openGraph: {
    title: "Karam Event Hall | En güzel evetlerin buluşma noktası",
    description: "Hayalinizdeki daveti size özel dokunuşlarla gerçeğe dönüştürüyoruz.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Karam Event Hall" }],
  },
  twitter: { card: "summary_large_image", title: "Karam Event Hall", description: "En güzel evetlerin buluşma noktası.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
