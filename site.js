(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress');
  const revealItems = document.querySelectorAll('[data-reveal]');
  document.body.classList.add('enhanced');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8%' });
  revealItems.forEach((item) => revealObserver.observe(item));

  const updateScrollState = () => {
    const max = root.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress?.style.setProperty('--scroll-progress', String(ratio));
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

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
    ].join('\n');
    window.open('https://wa.me/905454055866?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  });

  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
  });
})();
