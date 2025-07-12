import React from "react";
import { useTranslation } from "react-i18next";

export default function Collection() {
  const { t } = useTranslation();
  return (
    

    <section id="collection" className="bg-gray-100 py-20 px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 ml-0 md:ml-[50px]">
          <h2 className="text-5xl font-bold mb-6">
        {t("collection.heading").split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </h2>
          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
             {t("collection.description")}
          </p>
          <button className="bg-ladydrama-darker hover:bg-ladydrama text-white font-semibold px-8 py-3 rounded-lg transition">
            {t("collection.button")}
          </button>
        </div>
        <div className="flex-1">
          <img
            src="images-webp/Main.webp"
            alt="Nowa kolekcja"
            className="rounded-lg shadow-xl object-cover w-full max-h-[600px]"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
