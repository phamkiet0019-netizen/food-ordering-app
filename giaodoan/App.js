import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./navigation/tabs";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import OrderInfo from "./screens/OrderInfo";
import OrderDelivery from "./screens/OrderDelivery";
import Cart from "./screens/Cart"; 
import AdminDashboard from "./screens/AdminDashboard";
import { CartProvider } from "./context/CartContext";
import AdminHome from "./screens/AdminHome";
// 🔹 Màn hình đăng nhập/đăng ký
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Auth */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />

          {/* User */}
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderInfo" component={OrderInfo} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          <Stack.Screen name="Cart" component={Cart} />
         
       

          {/* Admin */}
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
