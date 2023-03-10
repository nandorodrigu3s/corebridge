import React, { useContext, useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutSuccess from "./src/screens/chekout-success/checkout-success.screen";
import NFTDetails from "./src/screens/nft-details/nft-details.screen";
import MyTabs from "./AppTabs";
import UserProvider from "./src/contexts/user.context-provider";
import CartProvider from "./src/contexts/cart.context-provider";
import Toast from "react-native-toast-message";
import Login from "./src/screens/login/login.screen";
import WalletDetails from "./src/screens/wallet-details/wallet-details.screen";
import { ApolloAuthProvider } from "./ApolloAuthProvider";
import BackdropProvider from "./src/contexts/custom-backdrop.context-provider";
import { AppCustomBackdrop } from "./src/components/mols/mol.backdrop/app-backdrop.mol";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <CartProvider>
          <BackdropProvider>
            <ApolloAuthProvider>
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeTab"
                  component={MyTabs}
                  options={{
                    headerShown: false,
                  }}
                ></Stack.Screen>
                <Stack.Screen
                  component={NFTDetails}
                  name="NFTDetails"
                ></Stack.Screen>
                <Stack.Screen
                  options={{ headerShown: false }}
                  component={CheckoutSuccess}
                  name="CheckoutSuccess"
                ></Stack.Screen>
                <Stack.Screen
                  name="Login"
                  component={Login}
                ></Stack.Screen>
                <Stack.Screen
                  name="WalletDetails"
                  component={WalletDetails}
                ></Stack.Screen>
              </Stack.Navigator>
              <Toast />
              <AppCustomBackdrop />
            </ApolloAuthProvider>
          </BackdropProvider>
        </CartProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
