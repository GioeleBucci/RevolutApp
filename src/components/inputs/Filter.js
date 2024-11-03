import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import {TextInput} from 'react-native-gesture-handler';
import {View} from 'react-native';
import FilterIcon from '../../assets/svg/FilterIcon';

/**
 * A generic input field component.
 * @apram {string} placeholder - The placeholder for the input field.
 * */
const Filter = ({placeholder}) => {
  const {colors} = useTheme();
  const styles = useStyles();

  return (
    <View style={styles.cardDetail}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
      />
      <TouchableOpacity>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    cardDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: colors.primaryBorder,
      borderWidth: 1,
      backgroundColor: colors.cardBackground,
      borderRadius: 20,
      marginVertical: 10,
      paddingHorizontal: 15,
    },
    icon: {
      height: 40, // Match the height of the TextInput
      width: 40, // Adjust the width as needed
    },
  });
};

export default Filter;
