import {useTheme} from '@react-navigation/native';
import React from 'react';
import ClockSvg from './clock.svg';

const ClockIcon = ({focused}) => {
  const {colors} = useTheme();
  return (
    <ClockSvg
      width={25}
      height={25}
      stroke={focused ? colors.blacknWhite : colors.icon}
    />
  );
};

export default ClockIcon;
