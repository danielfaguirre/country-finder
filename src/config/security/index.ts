import http from "../http"
import { StorageEnum } from "../../models/storage.model"
import { AccessTokenResponse } from "../../models/security.model"
import storage from "../storage"
import { API_TOKEN, BASE_API_URL, USER_EMAIL } from "../constants"

export const initServiceConfig = async () => {
  let accessToken = await storage.get(StorageEnum.ACCESS_TOKEN)
  try {
    if (!accessToken) {
      const url = `${BASE_API_URL}/getaccesstoken`
      const headers: HeadersInit = {
        "Accept": "application/json",
        "api-token": API_TOKEN,
        "user-email": USER_EMAIL
      }
      const response = await http.getData<AccessTokenResponse>(url, headers)
      accessToken = response.auth_token
      storage.set(StorageEnum.ACCESS_TOKEN, accessToken)
    }
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    throw new Error(error.message)
  }
  return accessToken
}
