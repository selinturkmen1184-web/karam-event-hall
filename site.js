(() => {
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
