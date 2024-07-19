import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, useState } from "react";
import { View, Text } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { api } from "../app/(services)/api/api";
const TestOtp = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { token: string }) => {
      await axios.patch(`${api}/email/verify`, data);
    },
    mutationKey: ["verify"],
    onSuccess() {
      // toast.success("Email verified, you can sign-in now");
      // push("/");
    },

    onError(error) {
      console.log(error);
    },
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({
      token: otp,
    });
  };
  return (
    <View>
      <form onSubmit={onSubmit}>
        <OTPTextInput
          handleTextChange={handleOtpChange}
          tintColor={"#00997D"}
          inputCount={6}
          textInputStyle={{
            borderColor: "black",
            borderWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 15,
            flex: 1,
          }}
        />
      </form>

      <Text>Your otp is: {otp} </Text>
    </View>
  );
};
export default TestOtp;
