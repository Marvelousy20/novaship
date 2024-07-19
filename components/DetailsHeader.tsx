import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMenu } from "../context/MenuContext";

export default function DetailsHeader() {
  const { setIsMenuOpen } = useMenu();

  return (
    <View className="">
      <View className="">
        <ImageBackground
          source={require("../assets/app/Top.png")}
          className="absolute top-0 w-full h-[245px]"
          resizeMode="cover"
        />

        <SafeAreaView className="">
          <View className="px-4">
            <View className="flex-row justify-between items-center gap-6">
              <View className="border rounded-xl p-3 border-[#E8E6EA]">
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color={"#00997D"}
                />
              </View>

              <View>
                <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
                  <Image source={require("../assets/app/whiteHamburger.png")} />
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row justify-between mt-10 items-center">
              <View>
                <Text className="text-white text-sm">Your shipment from</Text>
                <Text className="text-white font-semibold">Amazon</Text>
              </View>

              <View className="mt-0.5">
                <Image source={require("../assets/app/amazon.png")} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
