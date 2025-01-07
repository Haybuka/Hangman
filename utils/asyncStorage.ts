import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeData = async (key: string, value: any) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

// export const getData = async (key: string) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(key);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };

export const setStorageItem = (key: string, item: any) => {
  return AsyncStorage.setItem(key, item);
};

/*==============================================================================*/

export const getStorageItem = (key: string) => {
  return AsyncStorage.getItem(key);
};

/*==============================================================================*/

export const removeStorageItem = (key: string) => {
  return AsyncStorage.removeItem(key);
};

// const permission = await getStorageItem('@Cowry:ContactPermission');
