import React from 'react';
import Text from '../common/Text';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

/**
 * A generic input field component.
 *
 * @param {string} content - The content for the input field.
 */
const TextLabel = ({label, content}) => {
  const styles = useStyles();

  return (
    <View>
      <Text content>{label}</Text>
      <View style={styles.input}>
        <Text content>{content}</Text>
      </View>
    </View>
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
      justifyContent: 'center',
    },
  });
};

export default TextLabel;
