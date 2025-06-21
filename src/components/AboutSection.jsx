export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Lewa kolumna */}
        <div className="relative ml-0 md:ml-[50px]">
          <span className="text-sm tracking-widest text-gray-400 uppercase block mb-4">O MARCE</span>
          <h2 className="text-5xl font-extrabold text-[#0E1528] leading-tight">
            WITAJ W <br /> ŚWIECIE <br /> LADY DRAMA<sup>®</sup>
          </h2>

          {/* pionowa linia */}
          <div className="absolute top-0 -right-6 h-full w-[2px] button-ladydrama hidden md:block"></div>

        </div>

        {/* Prawa kolumna */}
        <div className="text-[#0E1528] space-y-6">
          <p className="text-lg font-bold leading-relaxed">
            Marka Lady Drama<sup>®</sup> jest tworzona przez kobietę dla kobiet. Stawiamy na jakość i unikatowość.
            Cały produkt od początku do końca powstaje w Polsce.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Projektujemy własne printy, by mieć pewność niepowtarzalności naszych kolekcji, które kierujemy
            dla kobiet ceniących oryginalność i nieszablonowość. Nowoczesnych i indywidualnych.
            Pasjonatek mody i stylu. Wyróżnia nas poczucie smaku i gustu, elegancja w każdym wydaniu
            oraz dbałość o najdrobniejszy detal.
          </p>
        </div>
      </div>
    </section>
  );
}
