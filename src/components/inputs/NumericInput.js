import React from 'react';
import Text from '../common/Text';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput} from 'react-native';

/**
 * A generic input field component.
 *
 * @param {string} label - The label for the input field.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param onChangeText - The function to call when the text changes.
 * @param {string} [inputType="default"] - The type of keyboard to use for the input field.
 */
const GenericInputField = ({
  label,
  placeholder,
  onChangeText,
  inputType = 'default',
}) => {
  const {colors} = useTheme();
  const styles = useStyles();

  return (
    <>
      <Text content>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        keyboardType={inputType}
      />
    </>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    input: {
      height: 40,
      borderColor: colors.primaryBorder,
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
  });
};

export default GenericInputField;
