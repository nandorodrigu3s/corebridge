import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutSuccess from "./src/screens/chekout-success/checkout-success.screen";
import NFTDetails from "./src/screens/nft-details/nft-details.screen";
import MyTabs from "./AppTabs";
import UserProvider from "./src/contexts/user.context-provider";
import CartProvider from "./src/contexts/cart.context-provider";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={MyTabs}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen component={NFTDetails} name="NFTDetails"></Stack.Screen>
            <Stack.Screen
              options={{ headerShown: false }}
              component={CheckoutSuccess}
              name="CheckoutSuccess"
            ></Stack.Screen>
          </Stack.Navigator>
        </CartProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
