import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'it',
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
          transfer: {
            amount: 'Amount',
            amount_placeholder: 'Enter amount',
            source: 'Source Account',
            source_placeholder: 'Select an account',
            destination: 'Destination Account',
            destination_placeholder: 'Enter destination account',
            message: 'Message',
            message_placeholder: 'Enter a message (optional)',
            date: 'Date',
            change_date_btn: 'Change Date',
            confirm_btn: 'Confirm',
          },
          transactions: {
            filter_placeholder: 'Filter for date or destination...',
            to: 'To',
            store: 'Store',
            date: 'Date',
            amount: 'Amount',
            message: 'Message',
          },
        },
      },
      it: {
        translation: {
          dashboard: {
            welcome: 'Bentornato! Tranquillo, i tuoi risparmi sono al sicuro',
            latest_transactions: 'Ultimi Movimenti',
            monthly_spending: 'Spese Mensili (dal',
          },
          transfer: {
            amount: 'Importo',
            amount_placeholder: "Inserisci l'importo",
            source: 'Conto Mittente',
            source_placeholder: 'Seleziona un conto',
            destination: 'Conto Destinatario',
            destination_placeholder: 'Inserisci il conto destinazione',
            message: 'Messaggio',
            message_placeholder: 'Inserisci un messaggio (opzionale)',
            date: 'Data',
            change_date_btn: 'Cambia Data',
            confirm_btn: 'Conferma',
          },
          transactions: {
            filter_placeholder: 'Filtra per data o destinazione...',
            to: 'A',
            store: 'Negozio',
            date: 'Data',
            amount: 'Importo',
            message: 'Messaggio',
          },
        },
      },
    },
  });

export default i18n;
