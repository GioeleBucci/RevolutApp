import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from '../common/Text';

const ArrowDropdownList = ({label, entries}) => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const formattedEntries = entries.map(entry => ({
      label: entry,
      value: entry,
    }));
    setItems(formattedEntries);
    if (formattedEntries.length > 0) {
      setValue(formattedEntries[0].value);
    }
  }, [entries]);

  const styles = useStyles();

  return (
    <>
      {label && <Text content>{label}</Text>}
      <DropDownPicker
        style={styles.style}
        containerStyle={styles.containerStyle}
        disabledStyle={styles.disabledStyle}
        textStyle={styles.textStyle}
        labelStyle={styles.labelStyle}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
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
