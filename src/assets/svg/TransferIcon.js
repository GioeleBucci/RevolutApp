import { useTheme } from '@react-navigation/native';
import React from 'react';
import TrasferSvg from './transfer.svg';

const TrasferIcon = ({ focused }) => {
  const { colors } = useTheme();
  return (
    <TrasferSvg width={25} height={25}
      stroke={focused ? colors.blacknWhite : colors.icon}
    />
  );
};

export default TrasferIcon;
