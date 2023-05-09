import { Platform, Linking, ScrollView } from "react-native"
import { CountryType } from "../../models/country.model"
import CountryListItem from "../CountryListItem";

export type CountryListProps = {
  countries: CountryType[]
}

const CountryList = ({ countries }: CountryListProps) => {

  const handleOnPress = async (countrySelected: CountryType) => {
    const { name } = countrySelected
    const url = Platform.select({
      ios: `http://maps.apple.com/?q=${name}`,
      android: `https://www.google.com/maps/search/?api=1&query=${name}`,
      web: `https://www.google.com/maps/search/?api=1&query=${name}`
    });

    console.log(url)

    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`No se pudo abrir la URL: ${url}`);
      }
    }
  }

  return (
    <ScrollView style={{ width: "100%" }}>
      {
        countries.map(country => (
          <CountryListItem onPress={handleOnPress} key={country.name} country={country} />
        ))
      }
    </ScrollView>
  )
}


export default CountryList
