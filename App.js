import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Button, View} from 'react-native';
import store, {persistor} from './src/store/store';
import Navigation from './src/navigators/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

const App = () => {
  const navigationRef = useRef();

  const clearPersistedData = () => {
    persistor.purge();
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
              <Button
                title="Toggle Theme"
                onPress={() => navigationRef.current.toggleTheme()}
              />
              {/* <Button
              title="Clear Persisted Data"
              onPress={clearPersistedData}
            /> */}
              <Navigation ref={navigationRef} />
            </View>
          </PersistGate>
        </Provider>
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
