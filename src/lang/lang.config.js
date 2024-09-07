import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./eng/eng.json";
import ru from "./ru/ru.json";
import uz from "./uz/uz.json";

const resources = {
    eng: {
        translation: eng
    },
    ru: {
        translation: ru
    },
    uz: {
        translation: uz
    }
};

i18n
.use(initReactI18next).
init({
    resources,
    lng: localStorage.getItem('lang'),
    fallbackLng: "eng",
    debug: true,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;