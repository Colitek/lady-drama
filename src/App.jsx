import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
const galleryImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png"
];


function preventWidows(text) {
  return text.replace(/(\s)([aiouwz]{1,2})(\s)/gi, (match, p1, p2, p3) => {
    return p1 + p2 + '\u00A0';
  });
}



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(null);
const [isVisible, setIsVisible] = useState(false);
const [timeLeft, setTimeLeft] = useState("");
const [showCountdown, setShowCountdown] = useState(true);
const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const goNext = () => {
  if (selectedIndex < galleryImages.length - 1) {
    setSelectedIndex(selectedIndex + 1);
  }
};

const goPrev = () => {
  if (selectedIndex > 0) {
    setSelectedIndex(selectedIndex - 1);
  }
};

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
    if (days > 0) parts.push(`${days} dni`);
    if (hours > 0) parts.push(`${hours} godzin`);
    if (minutes > 0) parts.push(`${minutes} minut`);
    if (seconds > 0) parts.push(`${seconds} sekund`);

    setTimeLeft(`Do nowej kolekcji pozostało: ${parts.join(" ")}`);
  };

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  return () => clearInterval(timer);
}, []);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") {
        setIsVisible(false);
        setTimeout(() => setSelectedIndex(null), 600);
      }
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [selectedIndex]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HEADER */}
      {showCountdown && timeLeft && (
  <div className="bg-black text-white text-sm text-center py-2 font-medium tracking-wide">
    {timeLeft}
  </div>
)}
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
            <a href="#collection" className="hover:text-gray-500 transition">Kolekcja</a>
            <a href="#gallery" className="hover:text-gray-500 transition">Galeria</a>
            <a href="#contact" className="hover:text-gray-500 transition">Kontakt</a>
            <a href="#about" className="hover:text-gray-500 transition">O Nas</a>
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
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col gap-4 text-sm uppercase font-medium px-6 pb-6 pt-2">
            <a href="#collection" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 transition">Kolekcja</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 transition">Galeria</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-500 transition">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* NOWA KOLEKCJA */}
      <section id="collection" className="bg-gray-100 py-20 px-6 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6">
              Kolekcja Wiosna 2025<br /> Już dostępna!
            </h2>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Połączenie odważnego designu z subtelną elegancją. Każdy element zaprojektowany z myślą o kobiecie, która nie boi się być widoczna.
            </p>
            <button className="bg-neutral-600 hover:bg-neutral-700 text-white font-semibold px-8 py-3 rounded-lg transition">
              Zobacz więcej
            </button>
          </div>
          <div className="flex-1">
            <img
  src="/Main.png"
  alt="Nowa kolekcja"
  className="rounded-lg shadow-xl object-cover w-full max-h-[600px]"
  onContextMenu={(e) => e.preventDefault()} // blokuje prawe kliknięcie
  draggable={false} // uniemożliwia przeciąganie
/>

          </div>
        </div>
      </section>
           <section id="about" className="bg-gray-100 py-20 px-6 md:px-0">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
    <div className="flex-1 text-center">
      <h2 className="text-5xl font-bold mb-6">
        Made in Poland
      </h2>
      <p className="text-gray-600 mb-8 max-w-5xl leading-relaxed mx-auto">
        {preventWidows(`Każdy projekt marki Lady Drama powstaje w 100% w Polsce – od pierwszego szkicu aż po ostatni szew. Nasze ubrania są efektem pasji, precyzji i czasu poświęconego na dopracowanie najdrobniejszych detali.

Stawiamy na jakość, dlatego proces twórczy nigdy nie jest pośpieszany. Każda kolekcja to unikalna opowieść, dopracowana z myślą o kobietach, które cenią nie tylko piękno, ale i rzemiosło.

Tkaniny sprowadzamy z najdalszych zakątków świata – od włoskich jedwabi po ręcznie tkane materiały z Japonii – wszystko po to, by zapewnić niespotykaną jakość i niepowtarzalne wzory, jakich nie znajdziesz nigdzie indziej.`)}
      </p>
    </div>
  </div>
</section>

      {/* GALERIA */}
      <section id="gallery" className="py-20 px-6 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Galeria</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                {/* <img
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  className="object-cover w-full h-72 md:h-96"
                /> */}
                <img
  key={index}
  src={src}
  alt={`Galeria ${index + 1}`}
  className="object-cover w-full h-72 md:h-96 cursor-pointer transition duration-300 hover:opacity-80"
  onClick={() => {
    setSelectedIndex(index);
    setTimeout(() => setIsVisible(true), 40);
  }}
  onContextMenu={(e) => e.preventDefault()}
  draggable={false}
  onDragStart={(e) => e.preventDefault()}
/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6 md:px-0">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-10 text-gray-500">
            Skontaktuj się z nami
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-4 rounded-lg border border-gray-500 bg-gray-800 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-4 rounded-lg border border-gray-500 bg-gray-800 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Wiadomość"
              className="w-full p-4 rounded-lg border border-gray-500 bg-gray-800 placeholder-white-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-neutral-600 hover:bg-neutral-700 text-white py-4 rounded-lg font-semibold transition"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>

      </section>

      
{/* SOCIAL MEDIA KARUZELA */}
<section className="bg-gray-100 py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-2xl font-bold text-center mb-8">Współpracują z nami</h3>
    <Swiper
  modules={[Autoplay]}
  loop={true}
  freeMode={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={8000}
  slidesPerView={2.0} // <- domyślna liczba slajdów na najmniejszych ekranach
  spaceBetween={0} // <- trochę oddechu między slajdami
  breakpoints={{
    600: { slidesPerView: 3.2 },
    768: { slidesPerView: 4.6 },
    1024: { slidesPerView: 5.5 },
  }}
>
      {[
        {
          name: "Butik Vanessa",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
         {
          name: "Butik Laleczka",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
         {
          name: "Look Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Lena Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
         {
          name: "My Rosses",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
         {
          name: "La Marie",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Look Fashion",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Dżoana Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "My Scarlet Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Nina Rossa Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Meddi Fashion",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Monic Fashion",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Glow Up Butik",
          url: "https://www.facebook.com/TwojaStrona",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.314h3.588l-.467 3.622h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: "Lady Drama",
          url: "https://www.instagram.com/TwojProfil",
          icon: (
            <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.4.3.7.7.9 1.3.2.6.3 1.2.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.4-.7.7-1.3.9-.6.2-1.2.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6-.4-.3-.7-.7-.9-1.3-.2-.6-.3-1.2-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.4.7-.7 1.3-.9.6-.2 1.2-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.4.5 3.6.9 2.8 1.4 2.1 2.1 1.6 2.9c-.4.8-.7 1.9-.8 3.4C.6 8.3.6 8.7.6 12s0 3.7.1 4.9c.1 1.5.4 2.6.8 3.4.5.8 1.2 1.5 2 2 .8.4 1.9.7 3.4.8C8.3 23.9 8.7 24 12 24s3.7 0 4.9-.1c1.5-.1 2.6-.4 3.4-.8.8-.5 1.5-1.2 2-2 .4-.8.7-1.9.8-3.4.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.5-.4-2.6-.8-3.4-.5-.8-1.2-1.5-2-2-.8-.4-1.9-.7-3.4-.8C15.7.1 15.3 0 12 0z" />
              <circle cx="12" cy="12" r="3.2" />
            </svg>
          ),
        },
        // Dodaj kolejne konta social media tutaj
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <a
          
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 bg-transparent hover:bg-gray-100 transition rounded-lg "
  style={{ width: "auto", padding: 0, margin: 0 }}
>
  {item.icon}
  <span className="font-medium text-gray-800">{item.name}</span>
</a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>





      {/* STOPKA */}
      <footer className="bg-white text-gray-500 text-sm text-center py-8">
        © 2025 Lady Drama. Wszelkie prawa zastrzeżone.
      </footer>

      
      {selectedImage && (
  <div
    className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => {
      setIsVisible(false);
      setTimeout(() => setSelectedIndex(null), 600);
    }}
  >
    <img
  src={selectedImage}
  alt="Podgląd"
  className={`max-w-[90%] max-h-[90%] rounded-lg shadow-lg transform transition-transform duration-300 ${isVisible ? "scale-100" : "scale-90"}`}
  onClick={(e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    } else {
      setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    }
  }}
  onContextMenu={(e) => e.preventDefault()}
  draggable={false}
  onDragStart={(e) => e.preventDefault()}
/>
  </div>
)}


    </div>
  );
}
