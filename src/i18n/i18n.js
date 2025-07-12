import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPL from './locales/pl.json';
import translationEN from './locales/en.json';

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pl", // co jeśli nie uda się wykryć
    resources: {
      pl: { translation: translationPL },
      en: { translation: translationEN },
    },
    detection: {
      order: ["localStorage", "navigator"], // wykrywa język najpierw z localStorage, potem z przeglądarki
      caches: ["localStorage"], // ZAPAMIĘTUJE wybrany język
    },
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
