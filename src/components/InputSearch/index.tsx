import { TextInput, IconButton } from "@react-native-material/core"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { useState } from "react";

export type InputSearchProps = {
  onSearch: (text: string) => void
}

const InputSearch = ({ onSearch }: InputSearchProps) => {
  const [text, setText] = useState<string>("")

  return (
    <>
      <TextInput
        placeholder="Buscar..."
        onChangeText={setText}
        style={styles.inputSearch}
        variant="standard"
        trailing={
          <IconButton
            onPress={() => onSearch(text)}
            icon={<Icon size={20} name="map-search" />}
          />
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  inputSearch: {
    marginTop: 50,
    width: "100%"
  }
})

export default InputSearch
