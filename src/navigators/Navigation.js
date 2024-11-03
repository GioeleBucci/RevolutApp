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
import Login from '../screens/Dashboard';
import {useSelector} from 'react-redux';
import RootStackNavigator from './RootStackNavigator';

const Stack = createStackNavigator();

const Navigation = forwardRef((props, ref) => {
  const dark = useSelector(state => state.app.dark);
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const [theme, setTheme] = useState(getThemeObject(dark));
  const changeTheme = isDarkMode => {
    // 0 means default , 1 means light, 2 means dark
    setTheme(
      getThemeObject(
        dark == '2'
          ? true
          : dark == '1'
          ? false
          : dark == '0'
          ? isDarkMode
          : false,
      ),
    );
  };

  useImperativeHandle(ref, () => ({
    toggleTheme: () => {
      const newTheme = !theme.dark;
      setTheme(getThemeObject(newTheme));
    },
  }));

  return (
    <NavigationContainer theme={theme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
});

export default Navigation;
