import {
  useNavigation,
  useTheme,
  useFocusEffect,
} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Text from '../components/common/Text';
import SpendingsLabel from '../components/labels/SpendingsLabel';
import BalanceLabel from '../components/labels/BalanceLabel';
import LatestTransactionsList from '../components/lists/LatestTransactionsList';
import MonthlySpendingsList from '../components/lists/MonthlySpendingsList';
import Endpoints from '../commons/rest/endpoints';
import {fetchData} from '../commons/rest/datafetcher';
import parseDate from '../commons/parseDate';
import formatDate from '../commons/formatDate';
import {useTranslation} from 'react-i18next';

const Dashboard = () => {
  const styles = useStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [spendings, setSpendings] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [loading, setLoading] = useState(true);

  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      const fetchDataAsync = async () => {
        console.log('Fetching data for Dashboard');
        await fetchData(Endpoints.ACCOUNTS, setAccounts);
        await fetchData(Endpoints.TRANSACTIONS, data => {
          setTransactions(data);
          const now = new Date();
          const fromDate = new Date(now.setMonth(now.getMonth() - 1));
          setFromDate(fromDate);
          const lastMonthTransactions = filterTransactionByDate(
            data,
            fromDate,
            new Date(),
          );
          setSpendings(calculateMonthlySpendings(lastMonthTransactions));
        });
        setLoading(false);
      };

      fetchDataAsync();
    }, []),
  );

  const filterTransactionByDate = (transactions, fromDate, toDate) => {
    return transactions.filter(transaction => {
      const transactionDate = parseDate(transaction.date);
      return transactionDate >= fromDate && transactionDate <= toDate;
    });
  };

  const calculateMonthlySpendings = transactions => {
    const spendingsMap = transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      const amount = parseFloat(transaction.amount);
      if (acc[category]) {
        acc[category] += amount;
      } else {
        acc[category] = amount;
      }
      return acc;
    }, {});
    return Object.entries(spendingsMap).map(([category, amount]) => [
      category,
      amount,
    ]);
  };

  const welcomeMessage = (
    <View style={{marginBottom: 10}}>
      <Text title style={styles.title}>
        Dashboard 💸
      </Text>
      <Text small style={styles.subTitle}>
        {t('dashboard.welcome')}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <View style={{zIndex: 10}}>
          {welcomeMessage}
          {accounts.map((account, index) => (
            <BalanceLabel
              key={index}
              balance={account.balance}
              accountId={account.id}
              accountNumber={index + 1}
            />
          ))}
        </View>

        <LatestTransactionsList>
          {transactions
            .sort((a, b) => parseDate(b.date) - parseDate(a.date))
            .map((transaction, index) => (
              <Spen2dingsLabel
                key={index}
                category={transaction.category}
                store={transaction.destination}
                price={transaction.amount}
              />
            ))}
        </LatestTransactionsList>
        <MonthlySpendingsList
          spendings={spendings}
          label={`${t('dashboard.monthly_spending')} ${formatDate(fromDate)})`}
        />
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
      paddingVertical: 20,
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
