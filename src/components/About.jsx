import React from "react";

function preventWidows(text) {
  return text.replace(/(\s)([aiouwz]{1,2})(\s)/gi, (match, p1, p2, p3) => {
    return p1 + p2 + '\u00A0';
  });
}

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Made in Poland
          </h2>
          <p className="text-gray-600 mb-8 max-w-5xl leading-relaxed mx-auto ml-0 md:ml-[50px]">
            {preventWidows(`Każdy projekt marki Lady Drama powstaje w 100% w Polsce – od pierwszego szkicu aż po ostatni szew. Nasze ubrania są efektem pasji, precyzji i czasu poświęconego na dopracowanie najdrobniejszych detali.

Stawiamy na jakość, dlatego proces twórczy nigdy nie jest pośpieszany. Każda kolekcja to unikalna opowieść, dopracowana z myślą o kobietach, które cenią nie tylko piękno, ale i rzemiosło.

Tkaniny sprowadzamy z najdalszych zakątków świata – od włoskich jedwabi po ręcznie tkane materiały z Japonii – wszystko po to, by zapewnić niespotykaną jakość i niepowtarzalne wzory, jakich nie znajdziesz nigdzie indziej.`)}
          </p>
        </div>
      </div>
    </section>
  );
}
