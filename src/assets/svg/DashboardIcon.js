import React from 'react';
import { useTheme } from '@react-navigation/native';
import HomeSvg from './home.svg';

const DashboardIcon = ({ focused }) => {
  const { colors } = useTheme();
  return (
    <HomeSvg width={25} height={25}
      stroke={focused ? colors.blacknWhite : colors.icon}
    />
  );
};

export default DashboardIcon;
