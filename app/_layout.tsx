import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import queryClient from "./(services)/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Federo-Regular": require("../assets/fonts/Federo-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

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
            headerLeft: () => (
              <View className="flex-row items-center justify-center gap-6">
                <View className="border rounded-xl p-3 border-[#E8E6EA]">
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color={"#00997D"}
                  />
                </View>
                <Text className="font-ISemiBold text-xl">Profile</Text>
              </View>
            ),
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
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
