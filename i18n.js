import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: {
          dashboard: {
            welcome: 'Welcome back! Your savings are doing just fine',
            latest_transactions: 'Latest Transactions',
            monthly_spending: 'Monthly Spendings (from',
          },
        },
      },
      it: {
        translation: {
          dashboard: {
            welcome: 'Bentornato! Tranquillo, i tuoi risparmi sono al sicuro',
            latest_transactions: 'Ultimi Movimenti',
            monthly_spending: 'Spese Mensili (da',
          },
        },
      },
    },
  });

export default i18n;
