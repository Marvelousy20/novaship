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
import { useNavigation } from "@react-navigation/native";

// const { setIsMenuOpen }

export default function DetailsHeader({
  vendor,
  logo,
}: {
  vendor: string;
  logo: string;
}) {
  const { setIsMenuOpen } = useMenu();
  const navigate = useNavigation();
  return (
    <View className="">
      <View className="">
        <ImageBackground
          source={require("../assets/app/Top.png")}
          className="absolute top-0 w-full h-[225px]"
          resizeMode="cover"
        />

        <SafeAreaView className="">
          <View className="px-4">
            <View className="flex-row justify-between items-center gap-6">
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <View className="border rounded-xl p-3 border-[#E8E6EA]">
                  <Ionicons
                    name="chevron-back-outline"
                    size={24}
                    color={"#00997D"}
                  />
                </View>
              </TouchableOpacity>

              <View>
                <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
                  <Image source={require("../assets/app/whiteHamburger.png")} />
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row justify-between mt-10 items-center">
              <View>
                <Text className="text-white text-sm">Your shipment from</Text>
                <Text className="text-white font-semibold">{vendor}</Text>
              </View>

              <View className="mt-0.5">
                <Image
                  source={{ uri: logo }}
                  className="w-[50px] h-[50px] rounded-lg"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
