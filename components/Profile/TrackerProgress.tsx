import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackerProgress = () => {
  return (
    <SafeAreaView className="flex-row items-center justify-between px-4 mt-[200]">
      <TouchableOpacity>
        <View className="bg-[#ccebe5] border border-transparent px-4 py-7 rounded-[16px] items-center">
          <Text className=" font-semibold text-sm text-[#414A53]">
            0 progress
          </Text>
          <Text className="font-normal text-xs text-[#676767]">delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="bg-[#ccebe5] border border-transparent px-4 py-7 rounded-[16px] items-center">
          <Text className=" font-semibold text-sm text-[#414A53]">
            12 Parcels
          </Text>
          <Text className="font-normal text-xs text-[#676767]">send</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="bg-[#ccebe5] border border-transparent px-4 py-7 rounded-[16px] items-center">
          <Text className=" font-semibold text-sm text-[#414A53]">
            30 Parcels
          </Text>
          <Text className="font-normal text-xs text-[#676767]">completed</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TrackerProgress;
