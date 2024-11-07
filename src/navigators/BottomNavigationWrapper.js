import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomNavigation from '../navigators/BottomNavigation';

const BottomNavigationWrapper = ({navigationRef}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BottomNavigation navigation={navigation} navigationRef={navigationRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomNavigationWrapper;
