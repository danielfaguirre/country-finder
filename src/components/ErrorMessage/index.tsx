import { Snackbar } from "@react-native-material/core"
import { View } from "react-native"

export type ErrorMessageProps = {
  messge: string
}

const ErrorMessage = ({ messge }: ErrorMessageProps) => {
  return (
    <View style={{ flex: 1 }}>
      {
        messge &&
        <Snackbar
          message={messge}
        />
      }
    </View>
  )
}

export default ErrorMessage
