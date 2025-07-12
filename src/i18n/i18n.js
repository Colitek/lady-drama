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
  .use(LanguageDetector) // wykrywanie języka z przeglądarki
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl', // jeśli nie wykryje, użyje PL
    interpolation: {
      escapeValue: false, // react już domyślnie zabezpiecza
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: [], // nie zapisuj w localStorage / cookie
    },
  });

export default i18n;
