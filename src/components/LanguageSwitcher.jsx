import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng);
    setOpen(false);
  };

  // Zamknięcie po kliknięciu poza
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block z-50">
      <button
        onClick={toggleOpen}
        className="flex items-center space-x-1 text-ladydrama hover:text-ladydrama-light transition"
        ref={buttonRef}
      >
        <LiaGlobeEuropeSolid className="w-5 h-5" />
        <span className="text-xs font-medium">
          {(i18n.resolvedLanguage || i18n.language || "pl").slice(0, 2).toUpperCase()}
        </span>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg shadow-md"
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
