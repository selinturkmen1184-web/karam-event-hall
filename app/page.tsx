import { ReservationPlanner } from "./ReservationPlanner";

const whatsappBase = "https://wa.me/905454055866";

const whatsapp = (message: string) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

const services = [
  { number: "01", title: "Söz & Nişan", text: "Size ait detaylarla, sıcak ve zarif bir başlangıç." },
  { number: "02", title: "Kına Gecesi", text: "Ritüelden eğlenceye, ışığı ve enerjisi yüksek bir gece." },
  { number: "03", title: "Butik Düğün", text: "Sevdiklerinizle yakın, şık ve unutulmaz bir kutlama." },
  { number: "04", title: "Özel Davetler", text: "Doğum günü, sünnet, baby shower, toplantı ve açılışlar." },
];

const gallery = [
  { src: "/images/henna-bride.jpg", alt: "Karam Event Hall kına gecesi", className: "gallery-tall" },
  { src: "/images/hero-couple.jpg", alt: "Karam Event Hall nişan çifti", className: "gallery-wide" },
  { src: "/images/garden-celebration.jpg", alt: "Karam Event Hall bahçe kutlaması", className: "gallery-square" },
  { src: "/images/engagement-couple.jpg", alt: "Karam Event Hall söz ve nişan", className: "gallery-tall" },
  { src: "/images/henna-night.jpg", alt: "Karam Event Hall kına gecesi eğlencesi", className: "gallery-square" },
  { src: "/images/service-detail.jpg", alt: "Karam Event Hall ikram detayı", className: "gallery-wide" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">2026 davet takvimi açıldı · Tarihinizi ayırtın</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Karam Event Hall ana sayfa">
          <img className="brand-logo" src="/images/karam-event-logo.png" alt="" />
        </a>
        <nav aria-label="Ana menü">
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#davetler">Davetler</a>
          <a href="#galeri">Galeri</a>
          <a href="#planla">Tarih Planla</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-cta" href={whatsapp("Merhaba Karam Event Hall, davetim için bilgi ve müsaitlik almak istiyorum.")} target="_blank" rel="noreferrer">
          Tarihini sor <ArrowIcon />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menüyü aç"><span></span><span></span><span></span></summary>
          <div>
            <a href="#hakkimizda">Hakkımızda</a><a href="#davetler">Davetler</a><a href="#galeri">Galeri</a><a href="#planla">Tarih Planla</a><a href="#iletisim">İletişim</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/hero-couple.jpg" alt="Karam Event Hall'da mutlu bir çift" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">Esenyurt · İstanbul</p>
          <h1>En güzel “evet”lerin<br /><em>buluşma noktası.</em></h1>
          <p className="hero-lead">Hayalinizdeki daveti, size özel dokunuşlar ve kusursuz bir akışla gerçeğe dönüştürüyoruz.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp("Merhaba Karam Event Hall, organizasyonum için müsait tarih ve paket bilgisi almak istiyorum.")} target="_blank" rel="noreferrer">Müsait tarihleri öğren <ArrowIcon /></a>
            <a className="text-link" href="#galeri">Mekânı keşfet <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span>Butik davet deneyimi</span><strong>Sizin hikâyeniz,<br />bizim inceliğimiz.</strong></div>
      </section>

      <section className="trust-strip" aria-label="Karam Event Hall hizmet özellikleri">
        <div><span>✦</span><p><strong>Bahçe + salon</strong>İki atmosfer, tek akış</p></div>
        <div><span>✦</span><p><strong>Işık, ses, sahne</strong>Hazır teknik altyapı</p></div>
        <div><span>✦</span><p><strong>Organizasyon desteği</strong>Planlamadan finale</p></div>
        <div><span>✦</span><p><strong>Kolay iletişim</strong>Tek dokunuşla WhatsApp</p></div>
      </section>

      <section className="intro section" id="hakkimizda">
        <div>
          <p className="eyebrow dark">Karam deneyimi</p>
          <h2>Bir salondan fazlası.<br /><em>Size ait bir atmosfer.</em></h2>
        </div>
        <div className="intro-copy">
          <p>Karam Event Hall; sözden kınaya, butik düğünden özel kutlamalara kadar her anı özenle kurgulayan sıcak ve modern bir davet alanıdır.</p>
          <p>Bahçe karşılaması, şık salon düzeni, sahne, ışık ve ses altyapısı ile siz anın tadını çıkarırken bütün ayrıntıları biz düşünürüz.</p>
          <a href={whatsapp("Merhaba, Karam Event Hall hizmetleri ve organizasyon desteği hakkında bilgi alabilir miyim?")} target="_blank" rel="noreferrer" className="line-link">Detaylı bilgi alın <ArrowIcon /></a>
        </div>
      </section>

      <section className="experience-grid">
        <div className="experience-image"><img src="/images/outdoor-couple.jpg" alt="Karam Event Hall bahçe alanında çift" /></div>
        <div className="experience-copy">
          <p className="eyebrow">Neden Karam?</p>
          <h2>Her detay,<br /><em>sizi anlatır.</em></h2>
          <div className="feature-list">
            <div><span>01</span><p><strong>Butik ve samimi</strong>Sevdiklerinizle yakın, kontrollü ve keyifli bir deneyim.</p></div>
            <div><span>02</span><p><strong>Bahçe + salon</strong>Karşılamadan finale iki farklı atmosfer, tek bir akış.</p></div>
            <div><span>03</span><p><strong>Uçtan uca destek</strong>Işık, ses, sahne ve organizasyon ekibiyle içiniz rahat.</p></div>
          </div>
        </div>
      </section>

      <section className="services section" id="davetler">
        <div className="section-heading">
          <div><p className="eyebrow dark">Davetler</p><h2>Her kutlama için<br /><em>başka bir hikâye.</em></h2></div>
          <p>Konseptiniz ne olursa olsun; mekânı, akışı ve atmosferi o güne özel kurgularız.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <a key={service.number} href={whatsapp(`Merhaba, ${service.title} organizasyonu için paket ve müsaitlik bilgisi almak istiyorum.`)} target="_blank" rel="noreferrer" className="service-row">
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <p>“Kutlamanız bir gün sürer.</p><h2>Hissettirdikleri<br /><em>bir ömür kalır.</em>”</h2>
      </section>

      <section className="planner section" id="planla">
        <div className="planner-copy">
          <p className="eyebrow dark">Hızlı teklif</p>
          <h2>Davetini anlat.<br /><em>Müsaitliğini öğren.</em></h2>
          <p>Dört kısa bilgiyle WhatsApp mesajınızı hazırlayın. Ekibimiz uygun tarih ve paket seçenekleriyle size dönüş yapsın.</p>
          <div className="planner-assurances">
            <span>✓ Ücretsiz ön görüşme</span><span>✓ Hızlı müsaitlik kontrolü</span><span>✓ Size özel paket</span>
          </div>
        </div>
        <ReservationPlanner />
      </section>

      <section className="gallery section" id="galeri">
        <div className="section-heading gallery-heading">
          <div><p className="eyebrow dark">Karam’dan anlar</p><h2>Gerçek hikâyeler.<br /><em>Gerçek mutluluklar.</em></h2></div>
          <a className="line-link" href="https://www.instagram.com/karameventhall/" target="_blank" rel="noreferrer">Instagram’da takip et <ArrowIcon /></a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => <figure key={image.src} className={image.className}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
        </div>
      </section>

      <section className="process section">
        <div><p className="eyebrow dark">Dört kolay adım</p><h2>Hayalden<br /><em>kutlamaya.</em></h2></div>
        <ol>
          <li><span>01</span><div><strong>Tarihinizi paylaşın</strong><p>Etkinlik türü, tarih ve tahmini kişi sayısını iletin.</p></div></li>
          <li><span>02</span><div><strong>Mekânı görün</strong><p>Salonumuzu gezin, ihtiyaçlarınızı birlikte konuşalım.</p></div></li>
          <li><span>03</span><div><strong>Paketinizi belirleyin</strong><p>Konsept ve hizmetleri bütçenize göre netleştirelim.</p></div></li>
          <li><span>04</span><div><strong>Gününüzü yaşayın</strong><p>Akışı bize bırakın; siz yalnızca anın tadını çıkarın.</p></div></li>
        </ol>
      </section>

      <section className="faq section" id="sorular">
        <div className="faq-heading"><p className="eyebrow dark">Merak edilenler</p><h2>Karar vermeden<br /><em>önce bilmeniz gerekenler.</em></h2></div>
        <div className="faq-list">
          <details><summary>Paketlere hangi hizmetler dahil?</summary><p>İçerik; etkinlik türü, kişi sayısı ve seçilen konsepte göre değişir. Işık, ses, sahne, ikram ve organizasyon desteği seçenekleri ön görüşmede netleştirilir.</p></details>
          <details><summary>Mekânı görmeden rezervasyon yapılır mı?</summary><p>Ön bilgi WhatsApp üzerinden paylaşılabilir; en doğru paket ve yerleşim için salon ziyareti öneriyoruz.</p></details>
          <details><summary>Bahçe ve salon birlikte kullanılabilir mi?</summary><p>Etkinlik akışına ve hava koşullarına göre karşılama ile kutlama bölümleri bahçe–salon bütünlüğünde planlanabilir.</p></details>
          <details><summary>Tarihin müsait olduğunu nasıl öğrenebilirim?</summary><p>Yukarıdaki hızlı teklif formunu doldurun veya WhatsApp’tan etkinlik türü, tarih ve tahmini kişi sayısını gönderin.</p></details>
        </div>
      </section>

      <section className="cta-section" id="iletisim">
        <img src="/images/engagement-couple.jpg" alt="Karam Event Hall çift çekimi" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <p className="eyebrow">Sıra sizin hikâyenizde</p>
          <h2>Tarihiniz için<br /><em>ilk adımı atın.</em></h2>
          <p>Etkinlik türü, tarih ve kişi sayısını yazın; uygun seçeneklerle size dönüş yapalım.</p>
          <a className="button button-gold" href={whatsapp("Merhaba Karam Event Hall. Etkinlik türü: … / Tarih: … / Tahmini kişi sayısı: … Bilgi ve müsaitlik rica ediyorum.")} target="_blank" rel="noreferrer">WhatsApp’tan bilgi alın <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img className="footer-logo" src="/images/karam-event-logo.png" alt="Karam Event" loading="lazy" /></div>
        <div><p className="footer-label">Adres</p><p>Zafer Mahallesi, Adile Naşit Bulvarı<br />Gümüş Panorama Çarşı, K Blok<br />Esenyurt / İstanbul</p><a className="footer-map" href="https://www.google.com/maps/search/?api=1&query=Karam+Event+Hall+Esenyurt" target="_blank" rel="noreferrer">Yol tarifi alın ↗</a></div>
        <div><p className="footer-label">İletişim</p><a href="tel:+905454055866">0545 405 58 66</a><a href="https://www.instagram.com/karameventhall/" target="_blank" rel="noreferrer">@karameventhall</a></div>
        <div><p className="footer-label">Hızlı bağlantı</p><a href="#davetler">Davetler</a><a href="#galeri">Galeri</a><a href="#planla">Tarih planla</a><a href={whatsapp("Merhaba Karam Event Hall, bilgi almak istiyorum.")} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <div className="footer-bottom"><span>© 2026 Karam Event Hall</span><span>Mutluluğunuz için, incelikle.</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsapp("Merhaba Karam Event Hall, bilgi ve müsaitlik almak istiyorum.")} target="_blank" rel="noreferrer" aria-label="WhatsApp üzerinden iletişime geçin"><span>✦</span><b>WhatsApp</b></a>
    </main>
  );
}
