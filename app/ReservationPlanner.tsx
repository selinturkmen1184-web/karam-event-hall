"use client";

import type { FormEvent } from "react";

export function ReservationPlanner() {
  function submitPlanner(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const eventType = form.get("eventType") || "Belirtilmedi";
    const date = form.get("date") || "Belirtilmedi";
    const guests = form.get("guests") || "Belirtilmedi";
    const name = form.get("name") || "Belirtilmedi";
    const message = `Merhaba Karam Event Hall.\n\nEtkinlik türü: ${eventType}\nTarih: ${date}\nTahmini kişi sayısı: ${guests}\nAd Soyad: ${name}\n\nMüsaitlik ve paket bilgisi rica ediyorum.`;
    window.open(`https://wa.me/905454055866?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="planner-form" id="plannerForm" onSubmit={submitPlanner}>
      <label>
        <span>Etkinlik türü</span>
        <select name="eventType" required defaultValue="">
          <option value="" disabled>Seçiniz</option>
          <option>Söz & Nişan</option>
          <option>Kına Gecesi</option>
          <option>Butik Düğün</option>
          <option>Sünnet Düğünü</option>
          <option>Doğum Günü</option>
          <option>Toplantı / Açılış</option>
          <option>Diğer</option>
        </select>
      </label>
      <label>
        <span>Planlanan tarih</span>
        <input type="date" name="date" required />
      </label>
      <label>
        <span>Tahmini kişi sayısı</span>
        <input type="number" name="guests" min="10" max="500" placeholder="Örn. 100" required />
      </label>
      <label>
        <span>Adınız</span>
        <input type="text" name="name" placeholder="Ad Soyad" autoComplete="name" required />
      </label>
      <button className="button button-gold planner-submit" type="submit">WhatsApp teklifini hazırla <span aria-hidden="true">↗</span></button>
      <p className="planner-privacy">Form gönderildiğinde bilgileriniz yalnızca WhatsApp mesajına eklenir; sitede kaydedilmez.</p>
    </form>
  );
}
