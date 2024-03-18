import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./pages/Router/Router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// //Localisaton
// i18n
//     .use(initReactI18next)
//     .use(LanguageDetector)
//     .init({
//         supportedLngs: ['en','ru', 'kg'],
//         fallbackLng: "ru",
//         detection: {
//             order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             caches: ['cookie']
//         },
//         backend: {
//             loadPath: '/assets/locales/{{lng}}/translation.json',
//         },
//
//
//     });
//


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
