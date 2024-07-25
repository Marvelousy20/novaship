import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import { Link } from "expo-router";
import { Delivery } from "../type";

interface DeliveryProps {
  delivery: {
    id: string;
    vendor: string;
    date: string;
    trackingNumber: string;
    status: string;
    progress: number;
    logo: string;
  };
}

const DeliveryCard = ({ delivery }: DeliveryProps) => {
  // /track/${delivery.trackingNumber}
  return (
    <Link
      href={{
        pathname: "/track/[id]",
        params: { id: delivery.trackingNumber },
      }}
    >
      <View className="border border-[#E8E6EA] rounded-xl p-4 w-full mb-5">
        <View className="flex-row space-x-4 w-full">
          <View>
            <Image
              source={{ uri: delivery.logo }}
              className="w-[60px] h-[60px] rounded-lg"
            />
          </View>

          <View className="space-y-0.5 flex-1">
            <View className="flex flex-row justify-between">
              <Text className="text-sm">{delivery.vendor}</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#ADAFBB"
              />
            </View>
            <Text className="text-[12px] mb-1 text-[#414A53]">
              {delivery.date}
            </Text>
            <Text className="text-sm text-[#414A53]">
              {delivery.trackingNumber}
            </Text>
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-[#414A53] capitalize">
            {delivery.status}
          </Text>
          <ProgressBar progress={delivery.progress} />
        </View>
      </View>
    </Link>
  );
};

export default DeliveryCard;
