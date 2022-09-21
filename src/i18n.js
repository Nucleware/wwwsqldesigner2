import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.json',
    },

    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;