import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import CategoryIcons from '../../assets/enums/CategoryIcons';

/**
 * @param category The category to display.
 * @param amount The spending amount to display.
 */
const MonthlySpendingsLabel = ({category, amount}) => {
  const styles = useStyles();
  const categoryIcon = CategoryIcons[category];

  return (
    <View style={styles.cardDetail}>
      <View style={styles.iconContainer}>
        <Image source={categoryIcon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text medium>{category}</Text>
      <Text content>{amount}€</Text>
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
      backgroundColor: colors.cardBackground,
      borderWidth: 1,
      borderColor: colors.primaryBorder,
      padding: 10,
      borderRadius: 20,
      marginVertical: 5,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 200,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 30,
      height: 30,
      tintColor: colors.blacknWhite,
    },
  });
};

export default MonthlySpendingsLabel;
