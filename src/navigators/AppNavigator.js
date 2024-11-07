import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigationWrapper from './BottomNavigationWrapper';

const Stack = createStackNavigator();

const AppNavigator = ({navigationRef}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigation">
        {props => (
          <BottomNavigationWrapper {...props} navigationRef={navigationRef} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
