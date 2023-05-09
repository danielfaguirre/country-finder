import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEnum } from "../../models/storage.model";

const set = (key: string, data: string) => {
  AsyncStorage.setItem(key, data);
};

const get = async (key: StorageEnum) => {
  const data = await AsyncStorage.getItem(key);
  return data || null
};

const remove = (key: StorageEnum) => {
  AsyncStorage.removeItem(key);
};

const storage = {
  set,
  get,
  remove,
};

export default storage;
