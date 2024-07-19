import { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPInput from "../components/OTPInput";
import CustomButton from "../components/CustomButton";
import { resendOtp, verifyOtp } from "../app/(services)/api/api";
import { useMutation } from "@tanstack/react-query";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");

  const mutation = useMutation({
    mutationFn: verifyOtp,
    mutationKey: ["verifyOtp"],
  });

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };

  const handleVerifyOTP = () => {
    try {
      const data = mutation.mutateAsync({ token: otp });
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    console.log(otp);
  };

  return (
    <View className="px-4 bg-white h-full flex-1">
      <Text></Text>
      <Text className="text-[#777777] text-[14px]">
        Enter the NovaShip verification code sent to your email.
      </Text>

      <Text className="text-[12px] text-black opacity-40 mt-6">
        Email Address
      </Text>
      <Text className="mt-2 text-[14px] text-[#414A53]">
        afosmarvi@gmail.com
      </Text>
      <OTPInput length={6} onCodeFilled={handleOtpChange} />
      <Text className="mt-2 text-[14px] text-[#777777]">
        code sent to afosmarvi@gmail.com
      </Text>

      {mutation?.isPending ? (
        <ActivityIndicator
          size="small"
          color="white"
          className="bg-green text-white px-6 rounded-[30px] min-h-[55px] justify-center items-center"
        />
      ) : (
        <CustomButton
          title="Submit"
          containerStyles="mt-6"
          handlePress={handleVerifyOTP}
        />
      )}

      <TouchableOpacity className="flex-row justify-end mt-6">
        <View className="flex-row space-x-2">
          <Text className="underline">Resend Code</Text>
          <Text className="text-green">00:52s</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
