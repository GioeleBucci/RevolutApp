import {SafeAreaView, StyleSheet, View} from 'react-native';
import Screen from '../components/common/Screen';
import React, {useState} from 'react';
import GenericButton from '../components/buttons/GenericButton';
import GenericInputField from '../components/inputs/GenericInputField';
import ArrowDropdownList from '../components/inputs/ArrowDropdownList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTheme} from '@react-navigation/native';
import formatTime from '../commons/FormatTime';
import TextLabel from '../components/labels/TextLabel';

const Transfer2 = () => {
  const styles = useStyles();
  const [destinationAccount, setDestinationAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [sourceAccount, setSourceAccount] = useState(''); // Add state for source account

  const handleTransfer = () => {
    // Handle the transfer logic here
    console.log('Transfer submitted', {
      sourceAccount,
      destinationAccount,
      amount,
      message,
      date,
    });
  };

  const handleCancel = () => {
    // Handle the cancel logic here
    setSourceAccount('');
    setDestinationAccount('');
    setAmount('');
    setMessage('');
  };

  const accounts = ['Account 1', 'Account 2', 'Account 3'];

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
            entries={accounts}
            onValueChange={setSourceAccount} // Pass the callback function
          />
          <GenericInputField
            label="Message"
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
