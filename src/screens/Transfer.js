import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import Screen from '../components/common/Screen';
import React, {useEffect, useState} from 'react';
import GenericButton from '../components/buttons/GenericButton';
import GenericInputField from '../components/inputs/GenericInputField';
import ArrowDropdownList from '../components/inputs/ArrowDropdownList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTheme} from '@react-navigation/native';
import formatDate from '../commons/formatDate';
import TextLabel from '../components/labels/TextLabel';
import Endpoints from '../commons/rest/endpoints';
import {fetchData} from '../commons/rest/datafetcher';
import Transaction from '../model/Transaction';
import Categories from '../model/Categories';
import {postData} from '../commons/rest/dataposter';
import {putData} from '../commons/rest/dataputter';

const Transfer2 = () => {
  const styles = useStyles();
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [sourceAccount, setSourceAccount] = useState('');
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchData(Endpoints.ACCOUNTS, data => {
      const parsed = Object.fromEntries(
        data.map(({id, balance}) => [id, balance]),
      );
      setAccounts(parsed);
    });
  }, []);

  function setBalance(accountID, balance) {
    try {
      putData(Endpoints.ACCOUNTS, accountID, {
        id: accountID,
        balance: balance,
      });
    } catch (error) {
      throw new Error(`Failed to update balance for ID ${accountID}: `, error);
    }
  }

  function performTransaction(from, to, amount) {
    const originalBalance = parseFloat(accounts[from]); // Snapshot
    amount = parseFloat(amount);
    try {
      setBalance(from, originalBalance - amount);
      // if destination account belongs to the user update its balance as well
      if (accounts[to]) {
        let destinationBalance = parseFloat(accounts[to]);
        setBalance(to, destinationBalance + amount);
      }
    } catch (error) {
      console.error('Transaction failed, rolling back:', error);
      this.setBalance(originalBalance);
    }
  }

  const handleTransfer = () => {
    if (!sourceAccount || !destinationAccount || !amount || !date) {
      Alert.alert('Transfer failed', 'Please fill all fields');
      return;
    }
    if (sourceAccount === destinationAccount) {
      Alert.alert(
        'Transfer failed',
        'Source and destination cannot be the same',
      );
      return;
    }
    if (parseFloat(accounts[sourceAccount]) < amount) {
      Alert.alert('Transfer failed', 'Insufficient funds');
      return;
    }
    let transfer = new Transaction(
      sourceAccount,
      destinationAccount,
      -amount,
      formatDate(date),
      Categories.Transfer,
      message,
    );
    try {
      performTransaction(sourceAccount, destinationAccount, amount);
      postData(Endpoints.TRANSACTIONS, transfer.toJSON());
      Alert.alert('Transfer successful', 'Transaction completed');
    } catch (error) {
      console.error('Error during transfer:', error);
      Alert.alert('Transfer failed', 'An error occurred!');
    }
  };

  return (
    <Screen title={'Transfer'}>
      <SafeAreaView style={styles.container}>
        <View style={styles.elemContainer}>
          <GenericInputField
            label="Amount"
            placeholder={'Enter amount'}
            onChangeText={setAmount}
            inputType="numeric"
          />
          <ArrowDropdownList
            label="Source Account"
            entries={Object.keys(accounts)}
            onValueChange={setSourceAccount}
          />
          <GenericInputField
            label="Destination Account"
            placeholder={'Enter destination account'}
            onChangeText={setDestinationAccount}
          />
          <GenericInputField
            label="Message"
            placeholder={'Enter message (optional)'}
            onChangeText={setMessage}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={date}
            onConfirm={selectedDate => {
              setDatePickerVisibility(false);
              const formattedDate = formatDate(selectedDate);
              setDate(selectedDate);
              console.log('Selected date:', formattedDate);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
          <View style={styles.dateContainer}>
            <TextLabel label={'Date'} content={formatDate(date)} />
            <GenericButton
              title="Change Date"
              onPress={() => setDatePickerVisibility(true)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <GenericButton
              title="Submit"
              titleColor="green"
              onPress={handleTransfer}
            />
          </View>
        </View>
      </SafeAreaView>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: colors.background,
    },
    elemContainer: {
      marginTop: 20,
      padding: 20,
      borderRadius: 20,
    },
    input: {
      height: 40,
      borderColor: colors.primaryBorder,
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: 40,
    },
  });
};

export default Transfer2;
