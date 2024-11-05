import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../common/Text';
import CategoryIcons from '../../assets/enums/CategoryIcons';
import Transaction from '../../model/Transaction';
import shortenUUID from '../../commons/shortenUUID';

const TransactionLabel = ({t}) => {
  const styles = useStyles();
  const categoryIcon = CategoryIcons[t.category];
  console.log(t);
  console.log(t.category);

  return (
    <View style={styles.wrapper}>
      <Text small>{t.account.uuid}</Text>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={categoryIcon}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.infoRowContainer}>
          <Text content>Store: {t.store}</Text>
          <Text content>Date: {t.date}</Text>
          <Text content>Amount: {t.amount}€</Text>
          <Text content>Account: {shortenUUID(t.account)}</Text>
        </View>
      </View>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.cardBackground,
      padding: 15,
      marginVertical: 10,
      borderRadius: 20,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -20,
    },
    infoRowContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      marginLeft: 15,
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

export default TransactionLabel;
