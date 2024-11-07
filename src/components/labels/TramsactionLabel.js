import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../common/Text';
import CategoryIcons from '../../assets/enums/CategoryIcons';
import {useTranslation} from 'react-i18next';

const TransactionLabel = ({t: transaction}) => {
  const styles = useStyles();
  const categoryIcon = CategoryIcons[transaction.category];
  const {t} = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Text small>{transaction.account.uuid}</Text>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={categoryIcon}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.infoRowContainer}>
          {transaction.category == 'Transfer' ? (
            <Text content>
              {t('transactions.to')}: {transaction.destination}
            </Text>
          ) : (
            <Text content>
              {t('transactions.store')}: {transaction.destination}
            </Text>
          )}
          <Text content>
            {t('transactions.date')}: {transaction.date}
          </Text>
          <Text content>
            {t('transactions.amount')}: {transaction.amount}€
          </Text>
          <Text content>Account: {transaction.account}</Text>
          {transaction.message ? (
            <Text content>
              {t('transactions.message')}: {transaction.message}
            </Text>
          ) : null}
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
