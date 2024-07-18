import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type CustomCheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

const CustomCheckbox = ({ checked, onChange }: CustomCheckboxProps) => {
  return (
    <Pressable
      className={`w-[15px] h-[15px] justify-center border border-[#E8E6EA] items-center rounded-[4px] bg-transparent ${
        checked ? "" : ""
      }`}
      onPress={onChange}
    >
      {checked && <Ionicons name="checkmark" size={12} color="#00997D" />}
    </Pressable>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({});
