import { View, Text, ScrollView } from "react-native";
import React from "react";
import DeliveryCard from "../DeliveryCard";
import { Delivery } from "../../type";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { api, auth } from "../../app/(services)/api/api";
import { allShipment } from "../../types/type";

interface Shipment {
  id: string;
  enterpriseId: {
    name: string;
    logo: string;
  };
  deliveryDate: string;
  status: string;
  trackingId: string;
  weight: string;
}

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
  const { data, isPending } = useQuery({
    queryFn: async () => {
      const response = await axios.get(`${auth}shipment/user/list`);
      return response.data?.data?.shipments;
    },
    queryKey: ["shipment"],
    // select: (data) => data?.data,
  });

  function calculateProgress(status: string): number {
    switch (status) {
      case "delivered":
        return 100;
      case "shipped":
        return 50;
      case "delayed":
        return 25;
      default:
        return 0;
    }
  }

  console.log(data);

  return (
    <ScrollView>
      <View className="flex-1">
        <Text className="text-[#414A53] text-lg font-semibold text-center mt-4">
          Incoming Package (s):
        </Text>

        <View className="px-4 mt-4">
          {data?.map((shipment: Shipment) => (
            <DeliveryCard
              key={shipment.id}
              delivery={{
                id: shipment.trackingId,
                vendor: shipment.enterpriseId.name,
                date: shipment.deliveryDate,
                trackingNumber: shipment.trackingId,
                status: shipment.status,
                progress: calculateProgress(shipment.status), // Assuming you have a way to calculate progress
                logo: shipment.enterpriseId.logo,
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Track;
