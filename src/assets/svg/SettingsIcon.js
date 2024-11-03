import { useTheme } from '@react-navigation/native';
import React from 'react';
import SettingsSvg from './settings.svg';

const SettingsIcon = ({ focused }) => {
  const { colors } = useTheme();
  return (
    <SettingsSvg width={25} height={25}
      stroke={focused ? colors.blacknWhite : colors.icon}
    />
  );
};

export default SettingsIcon;
