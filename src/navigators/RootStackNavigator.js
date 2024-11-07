import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

const RootStack = createStackNavigator();

const RootStackNavigator = ({navigationRef}) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        gestureEnabled: false,
        presentation: 'modal',
      }}>
      <RootStack.Screen name="App" options={{headerShown: false}}>
        {props => <AppNavigator {...props} navigationRef={navigationRef} />}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
