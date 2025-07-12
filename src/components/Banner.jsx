import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);
  const { t, i18n } = useTranslation();

  // Funkcja do odmiany słów z tłumaczeniami
  const pluralize = (count, forms) => {
    // forms: [singular, few, many]
    const absCount = Math.abs(count);
    if (i18n.language === "pl") {
      if (absCount === 1) return `${count} ${forms[0]}`;
      if (
        absCount % 10 >= 2 &&
        absCount % 10 <= 4 &&
        (absCount % 100 < 10 || absCount % 100 >= 20)
      )
        return `${count} ${forms[1]}`;
      return `${count} ${forms[2]}`;
    } else {
      // dla angielskiego zwykły plural, dodajemy 's' jeśli count !== 1
      return `${count} ${count === 1 ? forms[0] : forms[2]}`;
    }
  };

  useEffect(() => {
    const targetDate = new Date("2025-07-19T13:00:00");
    const hideAfterDays = 7;

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (now - targetDate > hideAfterDays * 24 * 60 * 60 * 1000) {
        setShowCountdown(false);
        return;
      }

      if (difference <= 0) {
        setTimeLeft(t("banner.collectionAvailable"));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const parts = [];
      if (days > 0)
        parts.push(
          pluralize(days, [
            t("banner.day_singular"),
            t("banner.day_few"),
            t("banner.day_many"),
          ])
        );
      if (hours > 0)
        parts.push(
          pluralize(hours, [
            t("banner.hour_singular"),
            t("banner.hour_few"),
            t("banner.hour_many"),
          ])
        );
      if (minutes > 0)
        parts.push(
          pluralize(minutes, [
            t("banner.minute_singular"),
            t("banner.minute_few"),
            t("banner.minute_many"),
          ])
        );
      if (seconds > 0)
        parts.push(
          pluralize(seconds, [
            t("banner.second_singular"),
            t("banner.second_few"),
            t("banner.second_many"),
          ])
        );

      setTimeLeft(`${t("banner.timeLeft")}: ${parts.join(" ")}`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [t, i18n.language]);

  useEffect(() => {
    const updateBannerVisibility = () => {
      const isVisible = window.scrollY === 0;
      setVisible(isVisible);
      window.dispatchEvent(new CustomEvent("banner-visibility", { detail: isVisible }));
    };

    updateBannerVisibility();

    window.addEventListener("scroll", updateBannerVisibility);
    return () => window.removeEventListener("scroll", updateBannerVisibility);
  }, []);

  if (!showCountdown || !timeLeft || !visible) return null;

  return (
    <div className="bg-black text-white text-sm text-center py-2 font-medium tracking-wide text-xs-mobile">
      {timeLeft}
    </div>
  );
}
