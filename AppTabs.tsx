import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/home/home.screen";
import Icon from "react-native-vector-icons/FontAwesome";
import Cart from "./src/screens/cart/cart.screen";
import Login from "./src/screens/login/login.screen";
import { CartContext } from "./src/contexts";

const Tabs = createBottomTabNavigator();

function MyTabs () {

const cartValues = useContext(CartContext);
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        component={Home}
        name='HomeTab'
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home" size={18} />
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        component={Cart}
        name='Cart'
        options={{
          headerShown: false,
          tabBarLabel: 'Carrinho',
          tabBarIcon: () => (
            <Icon name="shopping-cart" size={24} />
          ),
          tabBarBadge: cartValues.inCartCount > 0
          ? cartValues.inCartCount
          : undefined,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="hand-o-right" size={18} />
          )
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default MyTabs;