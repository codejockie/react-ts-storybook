import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const ns = ["common"];
const supportedLngs = ["en" /* , "fr", "ja" */];
const resources = supportedLngs.reduce((acc, lang) => {
  const translations = ns.reduce(
    (acc, n) => ({ ...acc, [n]: require(`../src/locales/${lang}/${n}.json`) }),
    {},
  );
  acc[lang] = translations;
  return acc;
}, {});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    defaultNS: "common",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    lng: "en",
    ns,
    resources,
    supportedLngs, // language to use
  });

export { i18n };
