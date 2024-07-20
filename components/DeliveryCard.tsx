import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import { Link } from "expo-router";
import { Delivery } from "../type";

const DeliveryCard = ({
  id,
  image,
  shipmentProgress,
  status,
  createdAt,
}: Delivery) => {
  return (
    <Link href={`/track/${id}`}>
      <View className="border border-[#E8E6EA] rounded-xl p-4 w-full mb-5">
        <View className="flex-row space-x-4 w-full">
          <View>
            <Image
              source={require("../assets/app/amazon.png")}
              className="w-[60px] h-[60px]"
            />
          </View>

          <View className="space-y-0.5 flex-1">
            <View className="flex flex-row justify-between">
              <Text className="text-sm">{}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ADAFBB"
              />
            </View>
            <Text className="text-[12px] mb-1 text-[#414A53]">{date}</Text>
            <Text className="text-sm text-[#414A53]">{trackingNumber}</Text>
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-[#414A53]">{status}</Text>
          <ProgressBar progress={progress} />
        </View>
      </View>
    </Link>
  );
};

export default DeliveryCard;
