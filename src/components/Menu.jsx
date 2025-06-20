import React, { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
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

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase font-medium">
          <a href="#collection" className="hover-custom">Kolekcja</a>
          <a href="#gallery" className="hover-custom">Galeria</a>
          <a href="#about" className="hover-custom">O Marce</a>
          <a href="#contact" className="hover-custom">Kontakt</a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-6 h-6 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 top-0 w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`absolute left-0 top-2.5 w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 text-sm uppercase font-medium px-6 pb-6 pt-2">
          <a href="#collection" onClick={() => setMenuOpen(false)} className="hover-custom">Kolekcja</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover-custom">Galeria</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover-custom">O Marce</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover-custom">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
