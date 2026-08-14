import { cpSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "../app/page";

const root = resolve(process.cwd());
const output = join(root, "github-pages");
const cssDirectory = join(root, "dist/client/_next/static/css");
const cssFile = readdirSync(cssDirectory).find((file) => file.endsWith(".css"));

if (!cssFile) throw new Error("Derlenmiş CSS dosyası bulunamadı. Önce npm run build çalıştırın.");

mkdirSync(output, { recursive: true });
cpSync(join(root, "public/images"), join(output, "images"), { recursive: true });
cpSync(join(root, "public/og.png"), join(output, "og.png"));
cpSync(join(root, "public/favicon.svg"), join(output, "favicon.svg"));
writeFileSync(join(output, ".nojekyll"), "");
writeFileSync(join(output, "style.css"), readFileSync(join(cssDirectory, cssFile), "utf8"));

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

const body = renderToStaticMarkup(<Home />)
  .replaceAll('src="/images/', 'src="images/')
  .replaceAll('href="/images/', 'href="images/');
const structuredData = JSON.stringify(localBusiness).replaceAll("<", "\\u003c");

const document = `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Karam Event Hall | Esenyurt Davet Salonu</title>
  <meta name="description" content="Söz, nişan, kına, butik düğün ve özel davetler için Esenyurt'ta şık ve samimi bir etkinlik deneyimi.">
  <meta name="keywords" content="Karam Event Hall, Esenyurt davet salonu, nişan salonu, kına gecesi, butik düğün">
  <meta property="og:title" content="Karam Event Hall | En güzel evetlerin buluşma noktası">
  <meta property="og:description" content="Hayalinizdeki daveti size özel dokunuşlarla gerçeğe dönüştürüyoruz.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:url" content="https://selinturkmen1184-web.github.io/karam-event-hall/">
  <meta property="og:image" content="https://selinturkmen1184-web.github.io/karam-event-hall/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://selinturkmen1184-web.github.io/karam-event-hall/">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">${structuredData}</script>
</head>
<body>${body}<script src="site.js" defer></script></body>
</html>
`;

writeFileSync(join(output, "index.html"), document);

const browserScript = `(() => {
  const form = document.querySelector('#plannerForm');
  const date = form?.querySelector('input[name="date"]');
  if (date) date.min = new Date().toISOString().slice(0, 10);

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const value = (name) => data.get(name) || 'Belirtilmedi';
    const message = [
      'Merhaba Karam Event Hall.',
      '',
      'Etkinlik türü: ' + value('eventType'),
      'Tarih: ' + value('date'),
      'Tahmini kişi sayısı: ' + value('guests'),
      'Ad Soyad: ' + value('name'),
      '',
      'Müsaitlik ve paket bilgisi rica ediyorum.'
    ].join('\\n');
    window.open('https://wa.me/905454055866?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  });

  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
  });
})();
`;

writeFileSync(join(output, "site.js"), browserScript);
console.log(`GitHub Pages çıktısı hazırlandı: ${output}`);
