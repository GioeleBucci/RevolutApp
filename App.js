import React, {useRef} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Navigation from './src/navigators/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

const App = () => {
  const navigationRef = useRef();

  return (
    <GestureHandlerRootView style={styles.root}>
      <I18nextProvider i18n={i18n}>
        <View style={styles.container}>
          <Button
            title="Toggle Theme"
            onPress={() => navigationRef.current.toggleTheme()}
          />
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
