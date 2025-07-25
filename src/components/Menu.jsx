import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 80;
    setShowMenu(!isScrollingDown);
    setLastScrollY(currentScrollY);

    if (isScrollingDown && menuOpen) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, menuOpen]);

useEffect(() => {
  window.dispatchEvent(new CustomEvent("menu-visibility", { detail: showMenu }));
}, [showMenu]);

useEffect(() => {
  window.dispatchEvent(new CustomEvent("menu-visibility", { detail: true }));
}, []);

useEffect(() => {
  if (!showMenu && menuOpen) {
    setMenuOpen(false);
  }
}, [showMenu, menuOpen]);





  return (
    <header
      id="menu-container" // <-- TUTAJ ważne id wrappera całego menu + banner
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showMenu ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Banner />
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" onContextMenu={(e) => e.preventDefault()}>
            <img
              src="/logo_min.png"
              alt="Lady Drama"
              className="w-56 h-auto hover:opacity-80 transition"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </a>

<div className="hidden md:flex items-center space-x-6">
  <nav className="flex space-x-8 text-sm uppercase font-medium mr-6">
    <a href="#collection" className="hover-custom">
       {t("menu.collections")}
    </a>
    <a href="#gallery" className="hover-custom">
      {t("menu.gallery")}
    </a>
    <a href="#about" className="hover-custom">
      {t("menu.about")}
    </a>
    <a href="#cooperation" className="hover-custom">
      {t("menu.cooperation")}
    </a>
    <a href="#contact" className="hover-custom">
      {t("menu.contact")}
    </a>
    
  </nav>
  <LanguageSwitcher />

</div>


          <button
            className="md:hidden relative w-6 h-6 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 top-0 w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 w-6 h-0.5 bg-gray-800 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 text-sm uppercase font-medium px-6 pb-6 pt-2">
            <a
              href="#collection"
              onClick={() => setMenuOpen(false)}
              className="hover-custom"
            >
               {t("menu.collections")}
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover-custom"
            >
              {t("menu.gallery")}
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover-custom"
            >
              {t("menu.about")}
            </a>
                        <a
              href="#cooperation"
              onClick={() => setMenuOpen(false)}
              className="hover-custom"
            >
              {t("menu.cooperation")}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover-custom"
            >
              {t("menu.contact")}
            </a>
    <div className="pt-2 border-t border-gray-200 ">
      <LanguageSwitcher />
    </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
