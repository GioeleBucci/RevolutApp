import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from '../common/Text';
import { useTranslation } from 'react-i18next';

/**
 * @param {string} label - The label of the dropdown list
 * @param {Array} entries - The entries of the dropdown list
 * @param {function} onValueChange - The function that will be called when the value changes
 */
const ArrowDropdownList = ({label, entries = [], onValueChange}) => {
  const formattedEntries = entries.map(entry => ({
    label: entry,
    value: entry,
  }));

  const [value, setValue] = useState(
    formattedEntries.length > 0 ? formattedEntries[0].value : null,
  );
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(formattedEntries);

  const {t} = useTranslation();

  useEffect(() => {
    setItems(formattedEntries);
  }, [entries]);

  useEffect(() => {
    if (value !== null) {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  const handleValueChange = useCallback(
    val => {
      setValue(val);
      onValueChange(val);
    },
    [onValueChange],
  );

  const styles = useStyles();

  return (
    <>
      {label && <Text content>{label}</Text>}
      <DropDownPicker
        placeholder={t('transfer.source_placeholder')}
        style={styles.style}
        containerStyle={styles.containerStyle}
        disabledStyle={styles.disabledStyle}
        textStyle={styles.textStyle}
        labelStyle={styles.labelStyle}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={setItems}
      />
    </>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    style: {
      backgroundColor: colors.primaryBackground,
    },
    containerStyle: {marginVertical: 10},
    disabledStyle: {
      opacity: 0.5,
    },
    textStyle: {
      color: colors.secondaryText,
      fontSize: 15,
    },
    labelStyle: {
      color: colors.primaryText,
    },
    label: {
      color: colors.primaryText,
      marginBottom: 5,
    },
  });
};

export default ArrowDropdownList;
