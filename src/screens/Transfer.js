import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import Screen from '../components/common/Screen';
import React, {useEffect, useState} from 'react';
import GenericButton from '../components/buttons/GenericButton';
import GenericInputField from '../components/inputs/GenericInputField';
import ArrowDropdownList from '../components/inputs/ArrowDropdownList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTheme} from '@react-navigation/native';
import formatTime from '../commons/FormatTime';
import TextLabel from '../components/labels/TextLabel';
import Endpoints from '../commons/rest/endpoints';
import {fetchData} from '../commons/rest/datafetcher';
import Transaction from '../model/Transaction';
import Categories from '../model/Categories';
import {postData} from '../commons/rest/dataposter';

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

  const handleTransfer = () => {
    if (!sourceAccount || !destinationAccount || !amount || !date) {
      Alert.alert('Transfer failed', 'Please fill all fields');
      return;
    }
    if (accounts[sourceAccount] < amount) {
      Alert.alert('Transfer failed', 'Insufficient funds');
      return;
    }
    let transfer = new Transaction(
      sourceAccount,
      destinationAccount,
      amount,
      date,
      Categories.Other,
      message,
    );
    postData(Endpoints.TRANSACTIONS, transfer.toJSON());
  };

  const handleCancel = () => {
    // Handle the cancel logic here
    setSourceAccount('');
    setDestinationAccount('');
    setAmount('');
    setMessage('');
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
            placeholder={'Enter message'}
            onChangeText={setMessage}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={date}
            onConfirm={selectedDate => {
              setDatePickerVisibility(false);
              const formattedDate = formatTime(selectedDate);
              setDate(selectedDate);
              console.log('Selected date:', formattedDate);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
          <View style={styles.dateContainer}>
            <TextLabel label={'Date'} content={formatTime(date)} />
            <GenericButton
              title="Change Date"
              onPress={() => setDatePickerVisibility(true)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <GenericButton
              title="Cancel"
              titleColor="red"
              onPress={handleCancel}
            />
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
    },
  });
};

export default Transfer2;
