import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AdminDashboard from "../screens/AdminDashboard";
import { COLORS, icons } from "../constants";

const BottomTab = createBottomTabNavigator(); // 👈 Đặt tên rõ ràng, tránh nhầm

const Tabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 60,
        },
      }}
    >
      {/* 🏠 Trang chính */}
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />

      {/* 👤 Trang Admin */}
      <BottomTab.Screen
        name="Admin"
        component={AdminDashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
