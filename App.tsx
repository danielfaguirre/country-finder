import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { initServiceConfig } from './src/config/security';
import { CountryType } from './src/models/country.model';
import CountryList from './src/components/CountryList';
import InputSearch from './src/components/InputSearch';
import InputSearchClearButton from './src/components/InputSearchClearButton';
import getCountriesService from './src/services/countries.service';
import ErrorMessage from './src/components/ErrorMessage';
import Loading from './src/components/Loading';

export default function App() {
  const [countries, setCountries] = useState<CountryType[] | null>(null)
  const [countriesFilter, setCountriesFilter] = useState<CountryType[] | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const getCountries = useCallback(async () => {
    await initServiceConfig()
    try {
      const countries = await getCountriesService()
      setCountries(countries)
      // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      setErrorMessage(error.message)
      setCountries([])
    }
  }, [])

  useEffect(() => {
    getCountries()
  }, [getCountries])

  const handleSearch = async (text: string) => {
    if (text !== "" && countries) {
      setCountriesFilter(
        countries?.filter(({ name }) =>
          name.toLowerCase().includes(text.toLowerCase()))
      )
    } else {
      setCountriesFilter(null)
    }
  }

  if (countries === null)
    return (
      <Loading isLoading={countries === null} />
    )

  return (
    <View style={styles.container}>
      <InputSearch
        onSearch={handleSearch}
      />
      {
        !!countriesFilter &&
        <InputSearchClearButton onPress={() => handleSearch("")} />
      }
      <CountryList countries={countriesFilter || countries} />
      <StatusBar style="auto" />
      <ErrorMessage messge={errorMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20
  }
});
