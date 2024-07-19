import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsHeader from "../../components/DetailsHeader";
import ProgressBar from "../../components/ProgressBar";
import { Ionicons } from "@expo/vector-icons";
import { useMenu } from "../../context/MenuContext";
import HamburgerMenu from "../../components/Hamburger";

const TrackDetail = () => {
  const { id } = useLocalSearchParams();

  const [isShipmentOpen, setIsShipmentOpen] = useState(false);
  const [isShipmentProgressOpen, setIsShipmentProgressOpen] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <View className="flex-1">
      <DetailsHeader />

      <View className="flex-1">
        <ScrollView>
          <View className="h-full px-4 pb-8">
            <Text className="text-sm text-[#414A53] font-semibold mt-5">
              Scheduled Delivery
            </Text>

            <Text className="mt-2.5">Today, Thursaday, June 09, 2024</Text>
            <Text>11:00 am - 2:00 pm</Text>

            <View className="mt-6">
              <Text>Tracking Number</Text>

              <Text className="mt-2.5">9Z8765Y423PL4567</Text>
            </View>

            <View className="mt-6">
              <Text>Status</Text>
              <Text className="mt-2.5">Out For Delivery</Text>
              <ProgressBar progress={70} />
              <TouchableOpacity className="mt-2.5 rounded-[30px] bg-green w-[103px] items-center">
                <Text className="text-[12px]  text-white inline-flex py-[5px]">
                  Live Map
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mt-7">
              <TouchableOpacity
                className="flex-row items-center justify-between bg-green rounded-[15px] text-white py-4 px-5"
                onPress={() => {
                  console.log(isShipmentOpen);
                  setIsShipmentOpen(!isShipmentOpen);
                }}
              >
                <Text className="text-white text-lg font-medium">
                  Shipment Details
                </Text>

                {isShipmentOpen ? (
                  <Ionicons
                    name="chevron-up-outline"
                    color={"white"}
                    size={20}
                  />
                ) : (
                  <Ionicons
                    name="chevron-down-outline"
                    color={"white"}
                    size={20}
                  />
                )}
              </TouchableOpacity>

              {isShipmentOpen && (
                <View className="mt-4 relative p-4">
                  <ImageBackground
                    source={require("../../assets/app/packagebg.png")}
                    className="absolute top-0 left-0 right-0 h-[220px]"
                    // resizeMode="contain"
                  />
                  <View className="">
                    <Text className="text-white font-semibold text-sm">
                      Service
                    </Text>
                    <Text className="underline text-white text-[12px] mt-2.5">
                      NovaShip Ground
                    </Text>
                  </View>

                  <View className="mt-6">
                    <Text className="text-white font-semibold text-sm">
                      Weight
                    </Text>
                    <Text className="underline text-white text-[12px] mt-2.5">
                      3.80LBS
                    </Text>
                  </View>

                  <View className="mt-6">
                    <Text className="text-white font-semibold text-sm">
                      Shipment Category
                    </Text>
                    <Text className="underline text-white text-[12px] mt-2.5">
                      Package
                    </Text>
                  </View>
                </View>
              )}
            </View>

            <View className="mt-7">
              <TouchableOpacity
                className="flex-row items-center justify-between bg-green rounded-[15px] text-white py-4 px-5"
                onPress={() => {
                  console.log(isShipmentProgressOpen);
                  setIsShipmentProgressOpen(!isShipmentProgressOpen);
                }}
              >
                <Text className="text-white text-lg font-medium">
                  Shipment Progress
                </Text>

                {isShipmentProgressOpen ? (
                  <Ionicons
                    name="chevron-up-outline"
                    color={"white"}
                    size={20}
                  />
                ) : (
                  <Ionicons
                    name="chevron-down-outline"
                    color={"white"}
                    size={20}
                  />
                )}
              </TouchableOpacity>

              {isShipmentProgressOpen && (
                <View className="mt-3 bg-[#4E5156] rounded-[15px]">
                  {[
                    {
                      status: "In transit",
                      location: "Central New York",
                      date: "08/06/2024",
                      time: "6:10 pm",
                    },
                    {
                      status: "Picked up",
                      location: "New York drop point",
                      date: "06/06/2024",
                      time: "8:09 pm",
                    },
                    {
                      status: "Packing",
                      location: "New York storage",
                      date: "05/06/2024",
                      time: "5:12 am",
                    },
                  ].map((item, index) => (
                    <View className="relative p-4" key={index}>
                      <View className="flex-row justify-between">
                        <View>
                          <Text className="font-semibold text-sm text-white">
                            {item.status}
                          </Text>
                          <Text className="text-sm text-white">
                            {item.location}
                          </Text>
                        </View>

                        <View>
                          <Text className=" text-[#ADAFBB] text-[12px]">
                            {item.date}
                          </Text>
                          <Text className="text-[#ADAFBB] text-[12px]">
                            {item.time}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      {isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </View>
  );
};

export default TrackDetail;
