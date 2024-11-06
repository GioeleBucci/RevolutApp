import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Modal, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';
import {TextInput} from 'react-native-gesture-handler';
import FilterIcon from '../../assets/svg/FilterIcon';
import {CheckBox} from 'react-native-elements';
import Categories from '../../model/Categories';

/**
 * A generic input field component.
 * @param {string} placeholder - The placeholder for the input field.
 * @param {function} onFilterChange - The callback function to handle input changes.
 * @param {function} onCategoryChange - The callback function to handle category changes.
 */
const Filter = ({placeholder, onFilterChange, onCategoryChange}) => {
  const {colors} = useTheme();
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    Object.keys(Categories).reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {}),
  );

  const toggleCategory = category => {
    const updatedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category],
    };
    setSelectedCategories(updatedCategories);
    onCategoryChange(Object.keys(updatedCategories));
  };

  return (
    <View style={styles.cardDetail}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        onChangeText={onFilterChange}
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
          {Object.values(Categories).map(category => (
            <CheckBox
              key={category}
              title={category}
              checked={!!selectedCategories[category]}
              onPress={() => toggleCategory(category)}
              containerStyle={styles.checkbox}
            />
          ))}
          <Button
            title="Close"
            onPress={() => {
              setModalVisible(false);
            }}
          />
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
