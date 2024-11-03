import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Transaction from '../model/Transaction';
import BankAccount from '../model/BankAccount';
import Categories from '../model/Categories';
import TransactionLabel from '../components/labels/TramsactionLabel';
import {ScrollView} from 'react-native-gesture-handler';
import Screen from '../components/common/Screen';
import Filter from '../components/inputs/Filter';

const Transactions = () => {
  const styles = useStyles();
  const t = new Transaction(
    new BankAccount(14),
    12,
    'REMA',
    '2021/09/01',
    Categories.Groceries,
  );
  return (
    <Screen title={'Transactions'}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Filter placeholder={'Search...'} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
          <TransactionLabel t={t} />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    profile: {
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
    limit: {
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
  });
};

export default Transactions;
