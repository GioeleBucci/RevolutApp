import 'react-native-gesture-handler';
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getThemeObject} from '../theme/Theme';
import RootStackNavigator from './RootStackNavigator';
import storageFetch from '../commons/storage/storageFetch';

const Stack = createStackNavigator();

const Navigation = forwardRef((props, ref) => {
  const [theme, setTheme] = useState(getThemeObject(true));

  useEffect(() => {
    storageFetch('dark').then(value => {
      if (value === null) {
        setTheme(getThemeObject(theme.dark));
      } else {
        setTheme(getThemeObject(theme.value));
      }
    });
  }, []);

  useImperativeHandle(ref, () => ({
    toggleTheme: () => {
      const newTheme = !theme.dark;
      setTheme(getThemeObject(newTheme));
    },
  }));

  return (
    <NavigationContainer theme={theme}>
      <RootStackNavigator navigationRef={ref} />
    </NavigationContainer>
  );
});

export default Navigation;
