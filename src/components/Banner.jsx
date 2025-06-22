import React, { useEffect, useState } from "react";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);

  // Funkcja do odmiany słów (dni, godziny, minuty itd.)
  const pluralize = (count, forms) => {
    const absCount = Math.abs(count);
    if (absCount === 1) return `${count} ${forms[0]}`;
    if (absCount % 10 >= 2 && absCount % 10 <= 4 && (absCount % 100 < 10 || absCount % 100 >= 20))
      return `${count} ${forms[1]}`;
    return `${count} ${forms[2]}`;
  };

  // Aktualizacja licznika odliczania
  useEffect(() => {
    const targetDate = new Date("2025-06-21T13:00:00");
    const hideAfterDays = 7;

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (now - targetDate > hideAfterDays * 24 * 60 * 60 * 1000) {
        setShowCountdown(false);
        return;
      }

      if (difference <= 0) {
        setTimeLeft("Nowa kolekcja jest już dostępna!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const parts = [];
      if (days > 0) parts.push(pluralize(days, ["dzień", "dni", "dni"]));
      if (hours > 0) parts.push(pluralize(hours, ["godzina", "godziny", "godzin"]));
      if (minutes > 0) parts.push(pluralize(minutes, ["minuta", "minuty", "minut"]));
      if (seconds > 0) parts.push(pluralize(seconds, ["sekunda", "sekundy", "sekund"]));

      setTimeLeft(`Do nowej kolekcji pozostało: ${parts.join(" ")}`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Wykrywanie scrolla i ustawienie widoczności
  useEffect(() => {
    const updateBannerVisibility = () => {
      const isVisible = window.scrollY === 0;
      setVisible(isVisible);
      window.dispatchEvent(new CustomEvent("banner-visibility", { detail: isVisible }));
    };

    // Wywołaj raz przy załadowaniu strony
    updateBannerVisibility();

    window.addEventListener("scroll", updateBannerVisibility);
    return () => window.removeEventListener("scroll", updateBannerVisibility);
  }, []);

  // Nie renderuj, jeśli nie trzeba
  if (!showCountdown || !timeLeft || !visible) return null;

  return (
    <div className="bg-black text-white text-sm text-center py-2 font-medium tracking-wide text-xs-mobile">
      {timeLeft}
    </div>
  );
}
