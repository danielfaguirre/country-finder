import { Button } from "@react-native-material/core"

export type InputSearchClearButtonProps = {
  onPress: () => void
}

const InputSearchClearButton = ({ onPress }: InputSearchClearButtonProps) => {
  return (
    <Button onPress={onPress} variant="text" title="Borrar filtro" />
  )
}

export default InputSearchClearButton
