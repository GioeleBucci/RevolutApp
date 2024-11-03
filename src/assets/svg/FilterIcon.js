import {useTheme} from '@react-navigation/native';
import React from 'react';
import FilterSvg from './filter.svg';

const FilterIcon = () => {
  const {colors} = useTheme();
  return (
    <FilterSvg
      width={25}
      height={25}
      stroke={colors.icon}
    />
  );
};

export default FilterIcon;
