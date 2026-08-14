"use client";

import { useEffect } from "react";

export function SiteEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    document.body.classList.add("enhanced");

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateScrollState = () => {
      const max = root.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress?.style.setProperty("--scroll-progress", `${ratio}`);
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    document.querySelectorAll<HTMLAnchorElement>(".mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      document.body.classList.remove("enhanced");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
