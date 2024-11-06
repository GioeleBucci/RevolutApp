import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Text from '../common/Text';

/**
 * A generic button component that displays a title and an optional right-aligned component.
 *
 * @param title The title to display on the button.
 * @param titleColor The color of the title text. Defaults to secondary text color.
 * @param RightComponent An optional component to render on the right side of the button.
 * @param onPress The callback function to handle button press.
 */
const GenericButton = ({title, titleColor, RightComponent, onPress}) => {
  const {colors} = useTheme();
  const styles = useStyles();
  const textColor = titleColor ? titleColor : colors.secondaryText;

  return (
    <TouchableOpacity style={styles.cardDetail} onPress={onPress}>
      <Text style={{color: textColor}}>{title}</Text>
      {RightComponent && <RightComponent />}
    </TouchableOpacity>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    cardDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.cardBackground,
      borderWidth: 1,
      borderColor: colors.primaryBorder,
      padding: 15, // Reduced padding
      borderRadius: 20,
      marginVertical: 5, // Reduced margin
    },
  });
};

export default GenericButton;
