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
import {postData} from '../commons/rest/dataposter';

const Transactions = () => {
  const styles = useStyles();
  const a = new BankAccount(1293);
  const t = new Transaction(a, 12, 'REMA', '12/04/24', Categories.Groceries);

  // postData('accounts', a.toJSON());
  // postData('transactions', t.toJSON());

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
