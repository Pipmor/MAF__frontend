import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Router/Router.jsx'
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import ruTranslations from '../src/localosation/ru.json';
import kgTranslations from '../src/localosation/kg.json';



i18n.init({
    resources: {
        ru: {
            translation: ruTranslations
        },
        kg: {
            translation: kgTranslations
        }
    },
    lng: 'ru',
    interpolation: {
        escapeValue: false
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <RouterProvider router={router} />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
