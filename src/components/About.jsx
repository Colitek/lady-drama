import React from "react";
import { useTranslation } from "react-i18next";

function preventWidows(text) {
  return text.replace(/(\s)([aiouwz]{1,2})(\s)/gi, (match, p1, p2, p3) => {
    return p1 + p2 + '\u00A0';
  });
}

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-gray-100 py-20 px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center">
          <h2 className="text-5xl font-bold mb-6">
            {t("about.heading")}
          </h2>
          <p className="text-gray-600 mb-8 max-w-5xl leading-relaxed mx-auto ml-0 md:ml-[50px] whitespace-pre-line">
            {preventWidows(t("about.description"))}
          </p>
        </div>
      </div>
    </section>
  );
}
