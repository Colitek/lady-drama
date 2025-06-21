import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="button-ladydrama text-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
  {/* FORMULARZ */}
  <div className="ml-0 md:ml-[50px]">
    <h3 className="text-4xl font-bold text-center mb-10">
      Skontaktuj się z nami
    </h3>
    <form className="space-y-6">
      <input
        type="text"
        placeholder="Imię i nazwisko"
        className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
        required
      />
      <textarea
        rows="5"
        placeholder="Wiadomość"
        className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none text-gray-900"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-4 rounded-lg font-semibold transition"
      >
        Wyślij wiadomość
      </button>
    </form>
  </div>

  {/* PIONOWA KRESKA */}
  <div className="hidden md:block w-[2px] h-full bg-white mx-auto"></div>

  {/* DANE KONTAKTOWE */}
  <div className="flex flex-col items-center text-center justify-center space-y-6 text-lg">
    <h4 className="text-2xl font-semibold">Dane kontaktowe</h4>
    <p>
      <strong>Adres:</strong><br />
      ul. Przykładowa 123<br />
      00-001 Warszawa
    </p>
    <p>
      <strong>E-mail:</strong><br />
      kontakt@ladydrama.pl
    </p>
    <p>
      <strong>Telefon:</strong><br />
      +48 123 456 789
    </p>
    <p>
      <strong>Godziny otwarcia:</strong><br />
      Pon–Pt: 9:00–17:00
    </p>
  </div>
</div>

    </section>
  );
}
