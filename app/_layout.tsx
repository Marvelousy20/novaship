import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import queryClient from "./(services)/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import HamburgerMenu from "../components/Hamburger";
import HamburgerIcon from "../components/HamburgerIcon";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Federo-Regular": require("../assets/fonts/Federo-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: true,
            title: "",
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <View className="flex-row items-center justify-center gap-6">
                  <View className="border rounded-xl p-3 border-[#E8E6EA]">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Ionicons
                        name="chevron-back-outline"
                        size={24}
                        color={"#00997D"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="font-ISemiBold text-xl">Profile</Text>
                </View>
              );
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="track/[id]"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="verifyOtp"
          options={{
            headerShown: true,
            title: "",
            headerLeft: ({}) => {
              const navigation = useNavigation();
              return (
                <View className="flex-row items-center justify-center gap-6">
                  <View className="border rounded-xl p-3 border-[#E8E6EA]">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Ionicons
                        name="chevron-back-outline"
                        size={24}
                        color={"#00997D"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="font-ISemiBold text-xl text-[#414A53]">
                    Enter Verification Code
                  </Text>
                </View>
              );
            },
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="contact"
          options={{
            headerShown: true,
            title: "",
            headerLeft: () => {
              return (
                <View className="">
                  <Image source={require("../assets/app/logo2.png")} />
                </View>
              );
            },

            headerRight: () => {
              return (
                <TouchableOpacity
                  className="mt-3"
                  onPress={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Image
                    source={require("../assets/app/coloredHamburger.png")}
                  />
                </TouchableOpacity>
              );
            },
            headerShadowVisible: false,
          }}
        />
      </Stack>

      {isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </QueryClientProvider>
  );
};

export default RootLayout;
