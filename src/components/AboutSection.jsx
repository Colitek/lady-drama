import React from "react";
import { useTranslation } from "react-i18next";

export default function about_sectionSection() {
  const { t } = useTranslation();

  // Tekst tytułu zawiera łamanie linii - możesz je rozbić na array
  const titleLines = t("about_section.title").split("\n");

  return (
    <section id="about_section" className="bg-white py-20 px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div className="relative ml-0 md:ml-[50px]">
          <span className="text-sm tracking-widest text-gray-400 uppercase block mb-4">
            {t("about_section.brand")}
          </span>
          <h2 className="text-5xl font-extrabold text-[#0E1528] leading-tight">
            {titleLines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>

          {/* vertical line */}
          <div className="absolute top-0 -right-6 h-full w-[2px] button-ladydrama hidden md:block"></div>
        </div>

        {/* Right column */}
        <div className="text-[#0E1528] space-y-6">
          <p className="text-lg font-bold leading-relaxed">{t("about_section.paragraph1")}</p>
          <p className="text-gray-700 text-base leading-relaxed">{t("about_section.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}
