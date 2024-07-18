import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Track from "../../components/Track/Track";
import ToMe from "../../components/Track/ToMe";
import FromMe from "../../components/Track/FromMe";
import Delivered from "../../components/Track/Delivered";

const Tab = createMaterialTopTabNavigator();

const TrackTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="flex-1 h-full">
      <View className="flex-1">
        <ImageBackground
          source={require("../../assets/app/Top.png")}
          className="absolute top-0 w-full h-[293px]"
          resizeMode="cover"
        />

        <SafeAreaView className="flex-1">
          <View className="px-4">
            <View className="flex-row justify-between">
              <View className="flex-row gap-4">
                <View>
                  <Image source={require("../../assets/app/profileImg.png")} />
                </View>

                <View>
                  <Text className="text-white text-sm">Hello, Welcome</Text>
                  <Text className="font-semibold text-xl mt-1 text-white">
                    Alex May
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-x-2">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
                <Text className="h-[40px] w-[1px] bg-[#E8E6EA4D]"></Text>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </View>
            </View>

            <View className="items-center">
              <TextInput
                placeholder="Enter Tracking Number"
                className="bg-white rounded-xl h-[58px] px-4 mt-6 placeholder:text-[#414A53] w-full"
              />

              <TouchableOpacity className="items-center mt-7 rounded-[30px] bg-green w-[150px] h-[55px] justify-center">
                <Text className="text-white text-lg font-medium">Track</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-6 flex-1">
            <Tab.Navigator
              initialRouteName="Track"
              screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIndicatorStyle: { backgroundColor: "#00997D" },
                tabBarStyle: { backgroundColor: "transparent" },
              }}
            >
              <Tab.Screen
                name="Track"
                component={Track}
                options={{
                  title: "Sign up",
                  tabBarLabel: ({ focused }) => (
                    <Text
                      className={`font-ISemiBold text-[16px] ${
                        focused ? "text-green" : "text-[#ADAFBB]"
                      }`}
                    >
                      Track
                    </Text>
                  ),
                }}
              />
              <Tab.Screen
                name="To Me"
                component={ToMe}
                options={{
                  title: "Sign up",
                  tabBarLabel: ({ focused }) => (
                    <Text
                      className={`font-ISemiBold text-[16px] ${
                        focused ? "text-green" : "text-[#ADAFBB]"
                      }`}
                    >
                      To Me
                    </Text>
                  ),
                }}
              />
              <Tab.Screen
                name="From Me"
                component={FromMe}
                options={{
                  title: "Sign up",
                  tabBarLabel: ({ focused }) => (
                    <Text
                      className={`font-ISemiBold text-[16px] ${
                        focused ? "text-green" : "text-[#ADAFBB]"
                      }`}
                    >
                      From Me
                    </Text>
                  ),
                }}
              />
              <Tab.Screen
                name="Delivered"
                component={Delivered}
                options={{
                  title: "Sign up",
                  tabBarLabel: ({ focused }) => (
                    <Text
                      className={`font-ISemiBold text-[16px] ${
                        focused ? "text-green" : "text-[#ADAFBB]"
                      }`}
                    >
                      Delivered
                    </Text>
                  ),
                }}
              />
            </Tab.Navigator>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TrackTab;

const styles = StyleSheet.create({});
