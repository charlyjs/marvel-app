import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';

export default i18n
  .use(initReactI18next)
  .init({
    lng: 'es',
    resources: { en, es },
    interpolation: { escapeValue: false }
  }).then();
