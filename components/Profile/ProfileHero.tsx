import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileHero = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("verifiedEmail");
        if (jsonValue != null) {
          const data = JSON.parse(jsonValue);

          // Extract user name from the nested structure
          const user = data?.data?.user?.fullName;
          setUsername(user);
          // Extract user email from the nested structure
          const userEmail = data?.data?.user?.email;
          setEmail(userEmail);
          console.log("user", email);
        }
      } catch (e) {
        console.error("Failed to fetch the data from storage", e);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView className="items-center justify-center">
      <View className="flex items-center">
        <View className="flex-col items-center gap-6">
          <Image source={require("../../assets/app/profileImg.png")} />
          <View className="flex-1 items-center">
            <Text className="font-semibold text-lg text-[#414A53]">
              {username}
            </Text>
            <Text className=" font-normal text-sm text-[#999999]">{email}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileHero;
