import React, {useEffect, useRef} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Navigation from './src/navigators/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {I18nextProvider, useTranslation} from 'react-i18next';
import storageFetch from './src/commons/storage/storageFetch';

const App = () => {
  const navigationRef = useRef();
  const {t, i18n} = useTranslation();

  useEffect(() => {
    storageFetch('language').then(value => {
      if (value) {
        console.log('Setting language to:', value);
        i18n.changeLanguage(value);
      }
    });
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <I18nextProvider i18n={i18n}>
        <View style={styles.container}>
          <Navigation ref={navigationRef} />
        </View>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
