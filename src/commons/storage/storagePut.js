import AsyncStorage from '@react-native-async-storage/async-storage';

const storagePut = async (key, newValue) => {
  try {
    await AsyncStorage.setItem(key, newValue);
  } catch (e) {
    console.log(`Error changing ${key}:`, e);
  }
};

export default storagePut;
