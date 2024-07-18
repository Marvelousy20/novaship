import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Delivered = () => {
  return (
    <View className="px-4">
      <View className="bg-[#00997D33] bg-opacity-20 p-5 rounded-[15px] mt-6 flex-row items-center space-x-4">
        <View>
          <Ionicons
            name="information-circle-outline"
            size={29}
            color={"#00997D"}
          />
        </View>

        <View>
          <Text className="text-[#414A53] font-semibold text-[14px]">
            No packages.
          </Text>
          <Text className="text[#414A53] mt-2">
            To create a package, go to Ship tab.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Delivered;
