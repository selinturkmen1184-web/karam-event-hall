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
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Karam Event Hall",
    url: "https://selinturkmen1184-web.github.io/karam-event-hall/",
    telephone: "+90 545 405 58 66",
    image: "https://selinturkmen1184-web.github.io/karam-event-hall/og.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zafer Mahallesi, Adile Naşit Bulvarı, Gümüş Panorama Çarşı, K Blok",
      addressLocality: "Esenyurt",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: ["https://www.instagram.com/karameventhall/"],
  };
  return <html lang="tr"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
