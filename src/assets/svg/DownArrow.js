import {useTheme} from '@react-navigation/native';
import React from 'react';
import DownArrowSvg from './downArrow.svg';

const DownArrow = () => {
  const {colors} = useTheme();
  return <DownArrowSvg width={25} height={25} stroke={colors.icon} />;
};

export default DownArrow;
