import { View, Text, ScrollView } from "react-native";
import React from "react";
import DeliveryCard from "../DeliveryCard";
import { Delivery } from "../../type";

const deliveries: Delivery[] = [
  {
    id: "1",
    vendor: "eBay",
    date: "June 10, 2024",
    trackingNumber: "1Z9872Y765PL1234",
    progress: 70,
    status: "Out for Delivery",
  },
  {
    id: "2",
    vendor: "Amazon",
    date: "June 09, 2024",
    trackingNumber: "9Z8765Y423PL4567",
    progress: 40,
    status: "Delayed",
  },
];

const Track = () => {
  return (
    <ScrollView>
      <View className="flex-1">
        <Text className="text-[#414A53] text-lg font-semibold text-center mt-4">
          Incoming Package (s):
        </Text>

        <View className="px-4 mt-4">
          {deliveries.map((delivery) => (
            <DeliveryCard key={delivery.id} {...delivery} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Track;
