import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const toggleOpen = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 112; // 7rem = 112px
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = rect.left + rect.width / 2; // środek przycisku
      if (left + dropdownWidth / 2 > viewportWidth) {
        left = viewportWidth - dropdownWidth / 2 - 8;
      }
      if (left - dropdownWidth / 2 < 8) {
        left = dropdownWidth / 2 + 8;
      }

      let top = rect.bottom + 4;
      const dropdownHeight = 4 * 40; // 4 przyciski, ~40px każdy
      if (top + dropdownHeight > viewportHeight) {
        top = rect.top - dropdownHeight - 4;
      }

      setPosition({ top, left });
    }
    setOpen((prev) => !prev);
  };

  const changeLanguage = async (lng) => {
  await i18n.changeLanguage(lng);
  setOpen(false);
  window.dispatchEvent(new CustomEvent("close-mobile-menu")); // <- dodaj to
};


  useEffect(() => {
    function onClickOutside(e) {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() {
      setOpen(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const closeMenu = () => {
    setMenuOpen(false);
  };
  window.addEventListener("close-mobile-menu", closeMenu);
  return () => window.removeEventListener("close-mobile-menu", closeMenu);
}, []);

  // Definicja obsługiwanych języków
  const languages = [
    { code: "pl", label: "Polski" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
  ];

  // Skrócony kod języka do wyświetlania (np. PL, EN, DE, ES)
  const currentLang = (i18n.resolvedLanguage || i18n.language || "pl").slice(0, 2).toUpperCase();

  return (
    <div ref={buttonRef} className="inline-block z-50">
      <button
        onClick={toggleOpen}
        className="flex items-center space-x-1 text-ladydrama hover:text-ladydrama-light transition"
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
      >
        <LiaGlobeEuropeSolid className="w-5 h-5" />
        <span className="text-xs font-medium">{currentLang}</span>
      </button>

      {open && (
        <div
          className="fixed w-28 bg-white border border-gray-300 rounded-lg shadow-md z-[9999]"
          style={{
            top: position.top + "px",
            left: position.left + "px",
            transform: "translateX(-50%)",
          }}
        >
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => changeLanguage(code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:text-ladydrama-light ${
                i18n.language === code ? "font-bold text-ladydrama" : "text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
