import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { CountryType } from "../../models/country.model";

export type CountryListItemProps = {
  country: CountryType
  onPress: (country: CountryType) => void
}

const CountryListItem = ({ country, onPress }: CountryListItemProps) => {
  const { name, shortName, phoneCode } = country
  return (
    <TouchableOpacity onPress={() => onPress(country)} style={styles.listItem}>
      <Icon style={styles.icon} name="map" size={45} />
      <Text style={styles.body}>
        <Text style={styles.titleItem}>
          {name}
        </Text>
        {'\n'}
        Código del país: {shortName}
        {'\n'}
        Código de teléfono: {phoneCode}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    padding: 10,
    margin: 7,
    borderWidth: 1,
    borderColor: "#171717",
    borderStyle: "solid",
    borderRadius: 5,
    height: 80
  },
  titleItem: {
    fontSize: 18,
    fontWeight: "bold"
  },
  icon: {
    margin: "auto",
  },
  body: {
    width: '100%',
    margin: 'auto',
    marginLeft: 10,
    fontSize: 12
  }
});

export default CountryListItem
