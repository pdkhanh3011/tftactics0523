import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const localeMessages = () => {
  const locales = require.context("../lang", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = { translation: locales(key) };
    }
  });
  return messages;
};

i18n.use(initReactI18next).init({
  resources: localeMessages(),
  lng: localStorage.getItem("lang") || "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
