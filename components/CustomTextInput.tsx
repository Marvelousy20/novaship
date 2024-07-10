import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomInputProps {
  label?: string;
  secureTextEntry?: any;
  placeholder?: string;
  containerStyles?: string;
}

const CustomTextInput = ({
  label,
  secureTextEntry,
  placeholder,
  containerStyles,
}: CustomInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`mb-6 relative ${containerStyles}`}>
      <View className="bg-white bg-opacity-80 self-start px-1 ml-4 z-10 shadow shadow-white absolute -top-3">
        <Text
          className={`text-sm opacity-40 ${isFocused || placeholder ? "" : ""}`}
        >
          {label}
        </Text>
      </View>

      <View className="border border-[#E8E6EA] rounded-xl px-[15px] py-4 flex-row items-center -z-10">
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible}
          className="flex-1 text-base text-gray-700"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="text-green"
          >
            {/* <FontAwesome
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="gray"
            /> */}

            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color={"#ADAFBB"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
