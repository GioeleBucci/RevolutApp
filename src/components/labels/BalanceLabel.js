import {Image, StyleSheet, View} from 'react-native';
import Text from '../common/Text';
import {useTheme} from '@react-navigation/native';
import {Balance} from '../../assets';
import shortenUUID from '../../commons/shortenUUID';

const BalanceLabel = ({balance, accountNumber, accountId}) => {
  const styles = useStyles();

  return (
    <View style={styles.balanceView}>
      <View style={{top: -15, marginLeft: 20}}>
        <Image
          source={Balance}
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.balanceSection}>
        <Text small style={styles.balanceText}>
          Account {accountNumber}
        </Text>
        <Text small style={styles.balanceText}>
          ({shortenUUID(accountId)})
        </Text>
        <Text title style={styles.balanceValue}>
          {balance}€
        </Text>
      </View>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    balanceSection: {
      paddingHorizontal: 40,
      alignItems: 'center',
    },
    balanceView: {
      marginTop: 15,
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
  });
};

export default BalanceLabel;
