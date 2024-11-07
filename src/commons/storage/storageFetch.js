import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchTheme = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log(`No value found for ${key}`);
      return null;
    }
  } catch (e) {
    console.log(`Error fetching ${key}:`, e);
    return null;
  }
};

export default fetchTheme;
