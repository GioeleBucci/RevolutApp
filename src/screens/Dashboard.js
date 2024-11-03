import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/common/Text';
import BurgerMenu from '../assets/svg/BurgerMenu';
import AddCircle from '../assets/svg/AddCircle';
import {Me, Payment} from '../assets';
import DarkMode from '../assets/svg/DarkMode';
import LightMode from '../assets/svg/LightMode';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/appReducer';
import RNRestart from 'react-native-restart';
import SpendingsLabel from '../components/labels/SpendingsLabel';
import Categories from '../model/Categories';
import BalanceLabel from '../components/labels/BalanceLabel';
import LatestTransactionsList from '../components/lists/LatestTransactionsList';
import MonthlySpendingsList from '../components/lists/MonthlySpendingsList';

const Dashboard = () => {
  const styles = useStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();

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
          <BalanceLabel balance="1563" accountNumber="1" />
          {/* <BalanceLabel balance="2000" accountNumber="2" /> */}
          <BalanceLabel balance="251" accountNumber="2" />
        </View>

        <LatestTransactionsList>
          <SpendingsLabel
            category={Categories.Groceries}
            store="REMA"
            price="150"
          />
          <SpendingsLabel
            category={Categories.Entertainment}
            store="Cinema"
            price="50"
          />
          <SpendingsLabel
            category={Categories.Health}
            store="Pharmacy"
            price="30"
          />
          <SpendingsLabel
            category={Categories.Other}
            store="Bookstore"
            price="20"
          />
          <SpendingsLabel
            category={Categories.Restaurants}
            store="McDonald's"
            price="25"
          />
          <SpendingsLabel
            category={Categories.Services}
            store="Laundry"
            price="15"
          />
          <SpendingsLabel
            category={Categories.Shopping}
            store="Zara"
            price="100"
          />
          <SpendingsLabel
            category={Categories.Transportation}
            store="Uber"
            price="40"
          />
          <SpendingsLabel
            category={Categories.Utilities}
            store="ENEL"
            price="60"
          />
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
