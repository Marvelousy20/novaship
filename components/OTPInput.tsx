import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

interface OTPInputProps {
  length: number;
  onCodeFilled: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onCodeFilled }) => {
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<Array<TextInput | null>>(new Array(length).fill(null));

  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
    if (newCode.every((item) => item !== "")) {
      onCodeFilled(newCode.join(""));
    }
  };

  return (
    <View style={styles.container}>
      {code.map((item, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={item}
          onChangeText={(text) => handleInput(text, index)}
          className={`h-[58px] w-[51px] border border-[#E8E6EA] rounded-[15px] text-center text-xl font-medium ${
            item ? "bg-green text-white" : "bg-white"
          }`}
          maxLength={1}
          keyboardType="number-pad"
          returnKeyType="done"
          textContentType="oneTimeCode"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
});

export default OTPInput;
