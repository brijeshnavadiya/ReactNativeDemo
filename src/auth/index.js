import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Auth {
  getValue(key, toJson) {
    const value = AsyncStorage.getItem(key);

    return toJson ? JSON.parse(value) : value;
  }

  setValue(key, value) {
    value = typeof value === 'object' ? JSON.stringify(value) : value;
    return AsyncStorage.setItem(key, value);
  }

  remove(key) {
    AsyncStorage.removeItem(key);
  }

  hasValue(key) {
    return AsyncStorage.getItem(key) !== null;
  }
}
