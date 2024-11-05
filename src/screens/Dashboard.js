import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/common/Text';
import AddCircle from '../assets/svg/AddCircle';
import {Payment} from '../assets';
import SpendingsLabel from '../components/labels/SpendingsLabel';
import Categories from '../model/Categories';
import BalanceLabel from '../components/labels/BalanceLabel';
import LatestTransactionsList from '../components/lists/LatestTransactionsList';
import MonthlySpendingsList from '../components/lists/MonthlySpendingsList';
import Endpoints from '../commons/rest/endpoints';
import {fetchData} from '../commons/rest/datafetcher';

const Dashboard = () => {
  const styles = useStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData(Endpoints.ACCOUNTS, setAccounts);
    fetchData(Endpoints.TRANSACTIONS, setTransactions);
  }, []);

  const spendings = [
    [Categories.Groceries, 200],
    [Categories.Entertainment, 1200],
    [Categories.Restaurants, 150],
    [Categories.Shopping, 100],
    [Categories.Other, 75],
  ];

  const SchedulePayment = () => {
    return (
      <View style={styles.paymentView}>
        <TouchableOpacity>
          <AddCircle />
        </TouchableOpacity>
        <Text title style={styles.paymentText}>
          Schedule a{'\n'}new payment
        </Text>
        <Image
          source={Payment}
          style={styles.paymentImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  const welcomeMessage = (
    <View style={{marginBottom: 10}}>
      <Text title style={styles.title}>
        Dashboard 💸
      </Text>
      <Text small style={styles.subTitle}>
        Welcome back! Your savings are doing just fine.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 20}}>
        <View style={{zIndex: 10}}>
          {welcomeMessage}
          {accounts.map((account, index) => (
            <BalanceLabel
              key={index}
              balance={account.balance}
              accountNumber={index + 1}
            />
          ))}
        </View>

        <LatestTransactionsList>
          {transactions
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // TODO sort doesnt work
            .map((transaction, index) => (
              <SpendingsLabel
                key={index}
                category={transaction.category}
                store={transaction.store}
                price={transaction.amount}
              />
            ))}
        </LatestTransactionsList>

        <MonthlySpendingsList spendings={spendings} />

        {/* <SchedulePayment /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 10,
    },
    title: {
      marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    paymentView: {
      marginTop: 20,
      backgroundColor: colors.card,
      flexDirection: 'row',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
    },
    paymentText: {
      fontWeight: '600',
      marginLeft: 15,
    },
    paymentImage: {
      width: 100,
      height: 100,
      position: 'absolute',
      right: 1,
      top: -20,
    },
    balanceSection: {
      paddingHorizontal: 60,
      alignItems: 'center',
    },
    balanceView: {
      marginTop: 40,
      backgroundColor: colors.cardBackground,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderRadius: 20,
      alignItems: 'center',
    },
    balanceText: {
      color: colors.text,
    },
    balanceValue: {
      fontSize: 30,
      letterSpacing: 2,
      fontWeight: 'bold',
    },
    balanceList: {
      marginTop: 20,
      backgroundColor: colors.cardBackground,
      padding: 20,
      borderRadius: 20,
    },
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
    transactionsList: {
      marginTop: 15,
      maxHeight: 200,
    },
  });
};

export default Dashboard;
