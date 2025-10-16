import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "home",
        works: "works",
        about_me: "about-me",
        contacts: "contacts",
      },
    },
    ru: {
      translation: {
        home: "дом",
        works: "работа",
        about_me: "обо мне",
        contacts: "контакты",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
