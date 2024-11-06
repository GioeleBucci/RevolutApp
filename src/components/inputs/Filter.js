import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Modal,
  Button,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import {TextInput} from 'react-native-gesture-handler';
import FilterIcon from '../../assets/svg/FilterIcon';
import {CheckBox} from 'react-native-elements';

/**
 * A generic input field component.
 * @param {string} placeholder - The placeholder for the input field.
 * @param {function} onFilterChange - The callback function to handle input changes.
 */
const Filter = ({placeholder = 'Enter text', onFilterChange = () => {}}) => {
  const {colors} = useTheme();
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);

  return (
    <View style={styles.cardDetail}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        onChangeText={onFilterChange} // Call the callback function on text change
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FilterIcon />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <CheckBox
            title="Option 1"
            checked={option1}
            onPress={() => setOption1(!option1)}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Option 2"
            checked={option2}
            onPress={() => setOption2(!option2)}
            containerStyle={styles.checkbox}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    cardDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: colors.primaryBorder,
      borderWidth: 1,
      backgroundColor: colors.cardBackground,
      borderRadius: 20,
      marginVertical: 10,
      paddingHorizontal: 15,
    },
    icon: {
      height: 40, // Match the height of the TextInput
      width: 40, // Adjust the width as needed
    },
    modalView: {
      margin: 20,
      backgroundColor: colors.cardBackground,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    checkbox: {
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  });
};

export default Filter;
