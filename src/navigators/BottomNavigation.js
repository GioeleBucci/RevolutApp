import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import DashboardIcon from '../assets/svg/DashboardIcon';
import ClockIcon from '../assets/svg/ClockIcon';
import Transfer from '../screens/Transfer';
import Settings from '../screens/Settings';
import SettingsIcon from '../assets/svg/SettingsIcon';
import TrasferIcon from '../assets/svg/TransferIcon';
import Transactions from '../screens/Transactions';

const Tab = createBottomTabNavigator();

const HomeIco = ({focused}) => <DashboardIcon focused={focused} />;

const HistoryIco = ({focused}) => <ClockIcon focused={focused} />;

const SettingsIco = ({focused}) => <SettingsIcon focused={focused} />;

const TransferIco = ({focused}) => <TrasferIcon focused={focused} />;

const BottomNavigation = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      showLabel={false}
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.headerBackground,
          borderTopColor: colors.primaryBorder,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: HomeIco,
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarIcon: TransferIco,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: HistoryIco,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: SettingsIco,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
