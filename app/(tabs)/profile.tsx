import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

import React from "react";
import TrackerProgress from "../../components/Profile/TrackerProgress";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileHero from "../../components/Profile/ProfileHero";

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
            <Text className="text-xl font-ISemiBold">Profile</Text>
          </View>

          <View className="flex-row items-center">
            <Image source={require("../../assets/app/hamburger.png")} />
          </View>
        </View>
      </View>
      <View className="flex-1">
        <ProfileHero />
      </View>

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
