import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPL from './locales/pl.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';
import translationES from './locales/es.json';

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
  de: { translation: translationDE },
  es: { translation: translationES },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // fallback dla języków nieobsługiwanych
    supportedLngs: ['pl', 'en', 'de', 'es'], // dodatkowe ograniczenie – tylko te języki
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
