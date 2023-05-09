import { BASE_API_URL } from "../config/constants"
import http from "../config/http"
import storage from "../config/storage"
import { CountryResponseType, CountryType } from "../models/country.model"
import { StorageEnum } from "../models/storage.model"

const getCountriesService = async () => {
  const accessToken = await storage.get(StorageEnum.ACCESS_TOKEN)
  const headers: HeadersInit = {
    "Authorization": `Bearer ${encodeURI(accessToken as string)}`,
    "Accept": "application/json"
  }
  const url = `${BASE_API_URL}/countries`
  const response = await http.getData<CountryResponseType[]>(url, headers)
  const countryAdapter: CountryType[] = response.map(({ country_name, country_short_name, country_phone_code }) => ({
    name: country_name,
    shortName: country_short_name,
    phoneCode: country_phone_code
  }))
  return countryAdapter
}

export default getCountriesService
