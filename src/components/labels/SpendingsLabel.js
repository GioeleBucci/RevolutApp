import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../common/Text';
import CategoryIcons from '../../assets/enums/CategoryIcons';
import Categories from '../../model/Categories';

/**
 * SL2 component renders a category icon and associated text.
 *
 * @param {Categories} category - The category for which the icon is displayed. Should be an element of Category.
 * @param {string} store - The store where the transaction took place.
 * @param {string} price - The price to be displayed.
 */
const SpendingsLabel = ({category, store, price}) => {
  const styles = useStyles();
  const categoryIcon = CategoryIcons[category];

  return (
    <View style={styles.listView}>
      <View style={styles.iconContainer}>
        <Image source={categoryIcon} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.balanceTextRow}>
        <Text content>{store}</Text>
        <Text content>{price}€</Text>
      </View>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    balanceTextRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      marginLeft: 10,
    },
    listView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
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

export default SpendingsLabel;
