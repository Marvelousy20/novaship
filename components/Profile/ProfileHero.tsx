import React from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileHero = () => {
  return (
    <SafeAreaView className="items-center justify-center">
      <View className="flex items-center">
        <View className="flex-col items-center gap-6">
          <Image source={require("../../assets/app/profileImg.png")} />
          <View className="flex-1 items-center">
            <Text className="font-semibold text-lg text-[#414A53]">
              Alex May
            </Text>
            <Text className=" font-normal text-sm text-[#999999]">
              alex_may@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileHero;
