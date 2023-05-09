import { View, ActivityIndicator, StyleSheet, Text } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export type LoadingProps = {
  isLoading: boolean
}

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <Icon name="map" size={45} />
      <Text style={styles.title}>
        Bienvenido a Country Finder
      </Text>
      <ActivityIndicator
        animating={isLoading}
        size="large"
        color="black"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 25,
    fontWeight: "bold"
  }

});


export default Loading
