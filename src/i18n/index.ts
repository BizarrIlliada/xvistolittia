import { createI18n } from 'vue-i18n';

import { ukrainianPluralRules } from './plural-rules';

import en from './en';
import uk from './uk';

const messages = { en, uk };

const locales = [
  { code: 'en', name: 'English' },
  { code: 'uk', name: 'Ukrainian' },
];

const i18n = createI18n({
  legacy: false,
  locales,
  locale: localStorage.getItem('currentLang') !== null ? localStorage.getItem('currentLang') as string : 'uk',
  fallbackLocale: 'en',
  messages,
  pluralRules: {
    'uk': ukrainianPluralRules,
  },
});

export default i18n;
