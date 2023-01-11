import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/home/home.screen";
import FontAweIcon from "react-native-vector-icons/FontAwesome";
import Cart from "./src/screens/cart/cart.screen";
import { CartContext } from "./src/contexts";
import Profile from "./src/screens/profile/profile.screen";

const Tabs = createBottomTabNavigator();

function MyTabs () {

const cartValues = useContext(CartContext);
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        component={Home}
        name='HomeTab'
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <FontAweIcon name="home" size={24} color={focused ? "#000" : undefined} />
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        component={Cart}
        name='Cart'
        options={{
          headerShown: false,
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({focused}) => (
            <FontAweIcon name="shopping-basket" size={20} color={focused ? "#000" : undefined}/>
          ),
          tabBarBadge: cartValues.inCartCount > 0
          ? cartValues.inCartCount
          : undefined,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAweIcon name="user" size={24} color={focused ? "#000" : undefined} />
          )
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default MyTabs;