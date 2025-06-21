import React, { useEffect, useState } from "react";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const targetDate = new Date("2025-06-21T13:00:00");
    const hideAfterDays = 7;

    const pluralize = (count, forms) => {
      const absCount = Math.abs(count);
      if (absCount === 1) return `${count} ${forms[0]}`;
      if (absCount % 10 >= 2 && absCount % 10 <= 4 && (absCount % 100 < 10 || absCount % 100 >= 20))
        return `${count} ${forms[1]}`;
      return `${count} ${forms[2]}`;
    };

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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showCountdown || !timeLeft || !visible) return null;

  return (
    <div className="bg-black text-white text-sm text-center py-2 font-medium tracking-wide text-xs-mobile">
      {timeLeft}
    </div>
  );
}
