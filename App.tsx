import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/home.screen";
import Login from "./src/screens/login/login.screen";
import CheckoutSuccess from "./src/screens/chekout-success/checkout-success.screen";
import Cart from "./src/screens/cart/cart.screen";
import NFTDetails from "./src/screens/nft-details/nft-details.screen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home"></Stack.Screen>
        <Stack.Screen component={Cart} name="Cart"></Stack.Screen>
        <Stack.Screen component={NFTDetails} name="NFTDetails"></Stack.Screen>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            title: 'Voltar'
          }}
        ></Stack.Screen>
        <Stack.Screen
          options={{headerShown: false}}
          component={CheckoutSuccess}
          name="CheckoutSuccess"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
