import { useState, useEffect, useRef } from "react";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { createPortal } from "react-dom";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setOpen(false);
    if (lang === "pl") window.location.href = "/";
    if (lang === "en") window.location.href = "/en";
  };

  // Kliknięcie poza zamyka
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll zamyka
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Oblicz pozycję globusa po kliknięciu
  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 4, // odległość od dołu przycisku
        left: rect.left + window.scrollX,
      });
    }
    setOpen(!open);
  };

  return (
    <>
      <div ref={buttonRef} className="relative z-50 inline-block text-sm">
        <button
          onClick={handleToggle}
          className="flex items-center space-x-1 text-ladydrama hover:text-ladydrama-light transition"
          aria-haspopup="true"
          aria-expanded={open}
        >
          <LiaGlobeEuropeSolid className="w-5 h-5" />
          <span className="text-xs font-medium">PL / EN</span>
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className="absolute w-28 bg-white border border-gray-300 rounded-lg shadow-md z-[9999]"
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            <button
              onClick={() => handleLanguageChange("pl")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-ladydrama-light"
            >
              Polski
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-ladydrama-light"
            >
              English
            </button>
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}
