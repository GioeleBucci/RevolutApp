import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import MonthlySpendingsLabel from '../labels/MonthlySpendingLabel';

/**
 * MonthlySpendingsList component renders a sorted list of monthly spendings.
 *
 * @param spendings - An array of (k, v) pairs where keys are spending categories and values are amounts.
 */
const MonthlySpendingsList = ({spendings}) => {
  const sortedSpendings = spendings.sort(([, a], [, b]) => b - a);

  const styles = useStyles();

  return (
    <View style={styles.balanceList}>
      <View style={styles.header}>
        <Text content>Monthly Spendings</Text>
      </View>
      <ScrollView style={styles.transactionsList} nestedScrollEnabled={true}>
        {sortedSpendings.map(([category, amount], index) => (
          <MonthlySpendingsLabel
            key={index}
            category={category}
            amount={amount}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    balanceList: {
      marginTop: 20,
      backgroundColor: colors.cardBackground,
      padding: 20,
      borderRadius: 20,
    },
    transactionsList: {
      marginTop: 15,
      maxHeight: 120,
    },
    viewAllText: {
      fontWeight: 'bold',
      color: colors.blacknWhite,
    },
  });
};

export default MonthlySpendingsList;
