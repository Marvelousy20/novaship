import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  isLoading?: boolean;
  textStyles?: string;
}

const CustomButton = ({
  title,
  containerStyles,
  handlePress,
  isLoading,
  textStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-green text-white px-6 rounded-[30px] min-h-[55px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-white font-medium text-lg font-IMedium ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
