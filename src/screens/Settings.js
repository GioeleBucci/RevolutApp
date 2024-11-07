import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../components/common/Text';
import Screen from '../components/common/Screen';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DarkMode from '../assets/svg/DarkMode';
import LightMode from '../assets/svg/LightMode';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import {CheckBox} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const {colors} = useTheme();
  const styles = useStyles();
  const {t, i18n} = useTranslation(); // todo add dark property to store
  const DARK = 'dark';
  // const dispatch = useDispatch();
  // const dark = useSelector(state => state.app.dark);
  // const toggle = value => {
  //   dispatch(toggleTheme(value));
  //   RNRestart.Restart();
  // };

  useEffect(() => {
    fetchTheme().then(value => {
      console.log('value:', value);
    });
  }, []);

  const fetchTheme = async () => {
    try {
      const value = await AsyncStorage.getItem(DARK);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };

  // true for dark, false for light
  const changeTheme = async color => {
    try {
      await AsyncStorage.setItem(DARK, !color);
    } catch (e) {
      console.log('Error setting color:', e);
    }
  };

  const dark = '2';

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggle(dark == '2' ? '1' : '2')}>
          {dark == '2' ? <LightMode /> : <DarkMode />}
        </TouchableOpacity>
      </View>
    );
  };

  const DummyCheckbox = () => {
    return (
      <View>
        <CheckBox
          textStyle={{color: colors.primaryText}}
          containerStyle={styles.checkbox}
          title="English"
          checked={i18n.language === 'en'}
          onPress={() => {
            i18n.changeLanguage('en');
          }}
        />
        <CheckBox
          textStyle={{color: colors.primaryText}}
          containerStyle={styles.checkbox}
          title="Italiano"
          checked={i18n.language === 'it'}
          onPress={() => {
            i18n.changeLanguage('it');
          }}
        />
      </View>
    );
  };

  return (
    <Screen title={t('settings.screen_name')}>
      <View style={styles.container}>
        <Header />
        <Text title>{t('settings.language')}</Text>
        <DummyCheckbox />
      </View>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    profile: {
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
    limit: {
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
    header: {
      marginVertical: 20,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    checkbox: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  });
};

export default Settings;
