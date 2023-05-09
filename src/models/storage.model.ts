export enum StorageEnum {
  ACCESS_TOKEN = 'access_token'
}

export type StorageType = {
  set: (key: string, data: string) => void;
  get: (key: StorageEnum) => string | null;
  remove: (key: StorageEnum) => void;
}
