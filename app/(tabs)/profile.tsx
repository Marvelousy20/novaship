import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, TouchableOpacity, Image } from "react-native";

import React from "react";
import ProfileHero from "../../components/Profile/ProfileHero";
import TrackerProgress from "../../components/Profile/TrackerProgress";
import ProfileInfo from "../../components/Profile/ProfileInfo";

const ProfileTab = () => {
  return (
    <ScrollView className="flex-1 h-full my-8">
      <View className="px-4">
        <View className="flex-row justify-between">
          <View className="flex-row items-center justify-center gap-6">
            <View className="border rounded-xl p-3 border-[#E8E6EA]">
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={"#00997D"}
              />
            </View>
            <Text className="font-ISemiBold text-xl">Profile</Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>
      </View>
      <View>{/* <ProfileHero /> */}</View>

      <View>
        <TrackerProgress />
      </View>
      {/* profile info */}
      <ProfileInfo />
    </ScrollView>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
