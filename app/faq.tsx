import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const questions = [
  {
    question: "How can I return an item purchased online",
    answer:
      "Ultrices velit neque eget mauris volutpat hendrerit. Nisl imperdiet scelerisque aenean consequat a dolor duis. Arcu morbi vehicula.",
  },

  {
    question: "How can I return an item purchased online",
    answer:
      "Ultrices velit neque eget mauris volutpat hendrerit. Nisl imperdiet scelerisque aenean consequat a dolor duis. Arcu morbi vehicula.",
  },

  {
    question: "How can I return an item purchased online",
    answer:
      "Ultrices velit neque eget mauris volutpat hendrerit. Nisl imperdiet scelerisque aenean consequat a dolor duis. Arcu morbi vehicula.",
  },

  {
    question: "How can I return an item purchased online",
    answer:
      "Ultrices velit neque eget mauris volutpat hendrerit. Nisl imperdiet scelerisque aenean consequat a dolor duis. Arcu morbi vehicula.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleExpand = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View>
      <View className="items-center pt-6 px-4">
        <Text className="font-semibold text-[#414A53] text-xl">
          Frequently Asked Question
        </Text>
        <View className="w-full space-y-4 mt-6">
          {questions.map((item, index) => (
            <View key={index} className="grid space-y-4">
              <TouchableOpacity
                className="flex-row items-center justify-between"
                onPress={() => toggleExpand(index)}
              >
                <Text className="text-[16px] text-[#777777]">
                  {item.question}
                </Text>

                {activeIndex === index ? (
                  <Ionicons
                    name="chevron-up-outline"
                    color="#414A53"
                    size={15}
                  />
                ) : (
                  <Ionicons
                    name="chevron-down-outline"
                    color="#414A53"
                    size={15}
                  />
                )}
              </TouchableOpacity>
              {activeIndex === index && (
                <View
                  className="bg-[#777777] bg-opacity-10 rounded-[10px] p-4"
                  style={styles.yourStyle}
                >
                  <Text className=" text-[16px] text-[#777777] opacity-100">
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  yourStyle: {
    // Assuming the color #777777 with 93% opacity
    backgroundColor: "rgba(119, 119, 119, 0.07)",
  },
});
