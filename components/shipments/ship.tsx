import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CustomTextInput from "../CustomTextInput";

export default function Ship({ navigation }: any) {
  const handleClick = function () {
    navigation.navigate("SendPackage");
  };

  return (
    <View className="flex-1 relative">
      <View>
        <Image
          source={require("../../assets/app/truck.png")}
          className="w-full"
        />
      </View>

      <View className="absolute top-[55px] right-[15px]">
        <Image source={require("../../assets/app/burger.png")} />
      </View>

      <Text className="font-medium text-lg leading-[27px] text-center mt-[25px]">
        Ship or Get a Free Estimate
      </Text>

      <TouchableOpacity
        onPress={handleClick}
        className="mt-[25px] border-[#E8E6EA] border h-[58px] px-[15px] mx-[15px] rounded-[10px] relative justify-center"
      >
        <Text className="text-xs leading-[18px] absolute -top-2 left-5 bg-gray-100 px-2">
          Place*
        </Text>
        <Text className="leading-[21px] text-sm my-auto">
          Where is your package going?
        </Text>
        <Image
          source={require("../../assets/app/pin.png")}
          className="absolute right-[15px]"
        />
      </TouchableOpacity>
    </View>
  );
}
