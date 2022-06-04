import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import Homescreen from "./screens/Homescreen"
import { store } from "./store"

export default function App() {
  return (
    <Provider store={store}>
        <Homescreen />
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
