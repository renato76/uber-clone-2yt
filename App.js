import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import HomeScreen from "./screens/HomeScreen"
import { store } from "./store"
import { SafeAreaProvider } from "react-native-safe-area-context"
// import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />

          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
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
