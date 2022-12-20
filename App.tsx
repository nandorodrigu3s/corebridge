import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/home";
import Login from "./src/screens/login/login";
import CheckoutSuccess from "./src/screens/chekout-success/checkout-success";
import Cart from "./src/screens/cart/cart";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen component={Home} name="Home"></Stack.Screen>
        <Stack.Screen component={Login} name="Login"></Stack.Screen>
        <Stack.Screen component={Cart} name="Login"></Stack.Screen>
        <Stack.Screen component={CheckoutSuccess} name="Login"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
