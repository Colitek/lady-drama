import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'pl').toUpperCase().slice(0, 2);

  const toggleOpen = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      });
    }
    setOpen((prev) => !prev);
  };

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng);
    setOpen(false);
  };

  // Zamknięcie dropdown po kliknięciu poza
  useEffect(() => {
    function onClickOutside(e) {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Zamknięcie dropdown przy scrollu
  useEffect(() => {
    function onScroll() {
      setOpen(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={buttonRef} className="relative inline-block z-50">
      <button
        onClick={toggleOpen}
        className="flex items-center space-x-1 text-ladydrama hover:text-ladydrama-light transition"
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
      >
        <LiaGlobeEuropeSolid className="w-5 h-5" />
        <span className="text-xs font-medium">
  {(i18n.resolvedLanguage || i18n.language || 'pl').slice(0, 2).toUpperCase()}
</span>
      </button>

      {open && (
  <div
    className="absolute top-full mt-2 right-0 w-28 bg-white border border-gray-300 rounded-lg shadow-md z-[9999]"
  >
    <button
      type="button"
      onClick={() => changeLanguage("pl")}
      className={`block w-full text-left px-4 py-2 text-sm hover:text-ladydrama-light ${
        i18n.language === "pl" ? "font-bold text-ladydrama" : "text-gray-700"
      }`}
    >
      Polski
    </button>
    <button
      type="button"
      onClick={() => changeLanguage("en")}
      className={`block w-full text-left px-4 py-2 text-sm hover:text-ladydrama-light ${
        i18n.language === "en" ? "font-bold text-ladydrama" : "text-gray-700"
      }`}
    >
      English
    </button>
  </div>
)}

    </div>
  );
}
