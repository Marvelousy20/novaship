import React from "react";
import { Text } from "react-native";
import { withLayoutContext } from "expo-router";

import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const AuthLayout = () => {
  return (
    <>
      <MaterialTopTabs
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "#00997D",
            height: 2,
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: 600,
            fontFamily: "Inter",
            fontSize: 19,
          },
        }}
        className="pt-4 bg-white"
      >
        <MaterialTopTabs.Screen
          name="log-in"
          options={{
            title: "Log in",
            tabBarLabel: ({ focused }) => (
              <Text
                className={`font-ISemiBold text-[19px] ${
                  focused ? "text-green" : "text-[#ADAFBB]"
                }`}
              >
                Login
              </Text>
            ),
          }}
        />
        <MaterialTopTabs.Screen
          name="sign-up"
          options={{
            title: "Sign up",
            tabBarLabel: ({ focused }) => (
              <Text
                className={`font-ISemiBold text-[19px] ${
                  focused ? "text-green" : "text-[#ADAFBB]"
                }`}
              >
                Sign Up
              </Text>
            ),
          }}
        />
      </MaterialTopTabs>

      <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;
