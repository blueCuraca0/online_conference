import { initReactI18next } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

import en from './locales/en/translation.json';
import uk from './locales/uk/translation.json';

const resources = {
  en: { translation: en },
  uk: { translation: uk },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk',
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });

export const setAppLanguage = (language: string) => {
  if (language !== null) {
    void changeLanguage(language.toLocaleLowerCase());
  }
};

export { default } from 'i18next';