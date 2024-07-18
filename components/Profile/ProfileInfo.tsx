import React from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { others, profileDetails } from "./DummyData";

const ProfileInfo = () => {
  return (
    <View className="px-4">
      <SafeAreaView>
        <View className="flex items-center my-6">
          <Image source={require("../../assets/app/seperator.png")} />
        </View>
        <View className="flex-col gap-5">
          {profileDetails?.map((item, idx) => (
            <View key={idx} className="">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  {item?.icon}
                  <Text className=" font-medium text-base text-[#414A53]">
                    {item?.text}
                  </Text>
                </View>
                <View>{item?.direct}</View>
              </View>
            </View>
          ))}
        </View>

        <View className="flex items-center my-6">
          <Image source={require("../../assets/app/seperator.png")} />
        </View>

        <View className="flex-col gap-5">
          {others?.map((item, idx) => (
            <View key={idx} className="">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  {item?.icon}
                  <Text className=" font-medium text-base text-[#414A53]">
                    {item?.text}
                  </Text>
                </View>
                <View>{item?.direct}</View>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileInfo;
