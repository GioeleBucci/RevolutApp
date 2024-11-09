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
          categories: {
            Groceries: 'Groceries',
            Shopping: 'Shopping',
            Restaurants: 'Restaurants',
            Transportation: 'Transportation',
            Entertainment: 'Entertainment',
            Health: 'Health',
            Services: 'Services',
            Utilities: 'Utilities',
            Transfer: 'Transfers',
            Other: 'Other',
          },
          dashboard: {
            welcome: 'Welcome back! Your savings are doing just fine',
            latest_transactions: 'Latest Transactions',
            monthly_spending: 'Monthly Spendings (from',
          },
          transfer: {
            screen_name: 'Transfer',
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
            screen_name: 'Transactions',
            filter_placeholder: 'Filter for date or destination...',
            to: 'To',
            store: 'Store',
            date: 'Date',
            amount: 'Amount',
            message: 'Message',
          },
          settings: {
            screen_name: 'Settings',
            language: 'Language',
            theme: 'Theme',
            light: 'Change to Light Theme ',
            dark: 'Change to Dark Theme ',
          },
        },
      },
      it: {
        translation: {
          categories: {
            Groceries: 'Spesa',
            Shopping: 'Shopping',
            Restaurants: 'Ristoranti',
            Transportation: 'Trasporti',
            Entertainment: 'Divertimento',
            Health: 'Salute',
            Services: 'Servizi',
            Utilities: 'Utilità',
            Transfer: 'Trasferimenti',
            Other: 'Altro',
          },
          dashboard: {
            welcome: 'Bentornato! Tranquillo, i tuoi risparmi sono al sicuro',
            latest_transactions: 'Ultimi Movimenti',
            monthly_spending: 'Spese Mensili (dal',
          },
          transfer: {
            screen_name: 'Trasferisci',
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
            screen_name: 'Transazioni',
            filter_placeholder: 'Filtra per data o destinazione...',
            to: 'A',
            store: 'Negozio',
            date: 'Data',
            amount: 'Importo',
            message: 'Messaggio',
          },
          settings: {
            screen_name: 'Impostazioni',
            language: 'Lingua',
            theme: 'Tema',
            light: 'Seleziona Tema Chiaro ',
            dark: 'Seleziona Tema Scuro ',
          },
        },
      },
    },
  });

export default i18n;
