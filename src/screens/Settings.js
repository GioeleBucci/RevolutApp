import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../components/common/Text';
import Screen from '../components/common/Screen';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import DarkMode from '../assets/svg/DarkMode';
import LightMode from '../assets/svg/LightMode';
import {toggleTheme} from '../store/appReducer';
import RNRestart from 'react-native-restart';

const Settings = () => {
  const {colors} = useTheme();
  const styles = useStyles();
  const dispatch = useDispatch();
  const dark = useSelector(state => state.app.dark);

  const toggle = value => {
    dispatch(toggleTheme(value));
    RNRestart.Restart();
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggle(dark == '2' ? '1' : '2')}>
          {dark == '2' ? <LightMode /> : <DarkMode />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Screen title={'Settings'}>
      <View style={styles.container}>
        <Header />
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
  });
};

export default Settings;
