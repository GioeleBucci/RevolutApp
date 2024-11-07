import React from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import SpendingsLabel from '../labels/SpendingsLabel';
import {useTranslation} from 'react-i18next';

/**
 * @param {SpendingsLabel} children - The SpendingsLabel to be rendered in the list.
 * */
const LatestTransactionsList = ({children}) => {
  const styles = useStyles();

  const {t, i18n} = useTranslation();

  return (
    <View style={styles.balanceList}>
      <View style={styles.header}>
        <Text content>{t('dashboard.latest_transactions')}</Text>
      </View>
      <ScrollView style={styles.transactionsList} nestedScrollEnabled={true}>
        {children}
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
      maxHeight: 150,
    },
  });
};

export default LatestTransactionsList;
