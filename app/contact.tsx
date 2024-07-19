import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Contact = () => {
  return (
    <View className="bg-white flex-1 pt-4">
      <ScrollView>
        <Image source={require("../assets/app/map.png")} className="w-full" />
        <View className="px-4 mt-6">
          <View className="items-center">
            <Text className="text-[#414A53] text-xl font-semibold">
              We're here to help you
            </Text>

            <Text className="text-[#282D3B80] text-[14px] mt-2.5">
              Please fill out the form
            </Text>
          </View>

          <View className="mt-5">
            <CustomTextInput placeholder="Alex_M" label="Username" />
            <CustomTextInput
              placeholder="Marvel@gmail.com"
              label="Email Address"
            />
            <CustomTextInput placeholder="Price" label="Subject" />
            <CustomTextInput
              placeholder="+1 444 1234 567"
              label="Phone Number"
            />
            <CustomTextInput
              placeholder="Write your message"
              label="Message"
              multiline={true}
              numberOfLines={5}
            />
            <CustomButton title="Submit" />
          </View>

          <View
            className="bg-white rounded-[15px] p-4 my-9"
            style={styles.shadowBox}
          >
            <View className="flex-row space-x-2.5 border-b border-[#E8E6EA] pb-4">
              <Image source={require("../assets/app/location.png")} />
              <View>
                <Text className="text-[#414A53] text-14px">Address</Text>
                <Text className="text-[16px] text-[#777777] mt-[5px]">
                  2001 42nd St North Bergen, NJ 07047 United States
                </Text>
              </View>
            </View>

            <View className="flex-row space-x-2.5 border-b border-[#E8E6EA] py-4">
              <Image source={require("../assets/app/message.png")} />
              <View>
                <Text className="text-[#414A53] text-14px">Email</Text>
                <Text className="text-[16px] text-[#777777] mt-[5px]">
                  dev@ncor.ai
                </Text>
              </View>
            </View>

            <View className="flex-row space-x-2.5 py-4">
              <Image source={require("../assets/app/clock.png")} />
              <View>
                <Text className="text-[#414A53] text-14px">Working hours</Text>
                <Text className="text-[16px] text-[#777777] mt-[5px]">
                  8:00 - 17:00, Mon - Sat
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
  },
});
