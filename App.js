import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import Homescreen from "./screens/Homescreen"
import { store } from "./store"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Homescreen />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
