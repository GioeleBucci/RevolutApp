import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import TransactionLabel from '../components/labels/TramsactionLabel';
import {ScrollView} from 'react-native-gesture-handler';
import Screen from '../components/common/Screen';
import Filter from '../components/inputs/Filter';
import Endpoints from '../commons/rest/endpoints';
import {fetchData} from '../commons/rest/datafetcher';

const Transactions = () => {
  const styles = useStyles();

  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleFilterChange = text => {
    const filtered = filteredTransactions.filter(
      transaction =>
        transaction.store.toLowerCase().includes(text.toLowerCase()) ||
        transaction.date.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredTransactions(filtered);
  };

  const handleCategoryChange = categories => {
    console.log('recieved: ' + categories);
    const filtered = filteredTransactions.filter(transaction =>
      categories.includes(transaction.category),
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    fetchData(Endpoints.TRANSACTIONS, data => {
      setTransactions(data);
      setFilteredTransactions(data);
    });
  }, []);

  return (
    <Screen title={'Transactions'}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Filter
            placeholder={'Search...'}
            onFilterChange={handleFilterChange}
            onCategoryChange={handleCategoryChange}
          />
          {filteredTransactions.map((transaction, _index) => (
            <TransactionLabel key={transaction.id} t={transaction} />
          ))}
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
