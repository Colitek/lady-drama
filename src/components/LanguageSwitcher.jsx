import { useState, useEffect, useRef } from "react";
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleLanguageChange = (lang) => {
    if (lang === "pl") window.location.href = "/";
    if (lang === "en") window.location.href = "/en";
  };

  // Zamknięcie dropdownu przy scrollu
  useEffect(() => {
    if (!open) return;

    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Zamknięcie dropdownu przy kliknięciu poza
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block text-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 text-gray-700 hover:text-[var(--ladydrama-light)] focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <LiaGlobeEuropeSolid
          className="w-5 h-5 transition-colors duration-200"
          style={{ color: "inherit" }}
        />
        <span className="hidden sm:inline-block text-xs font-medium">
          PL / EN
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg shadow-md z-50">
          <button
            onClick={() => handleLanguageChange("pl")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[var(--ladydrama-light)] rounded-t-lg transition-colors duration-200"
          >
            Polski
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-[var(--ladydrama-light)] rounded-b-lg transition-colors duration-200"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
