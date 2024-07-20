import { FormEvent, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPInput from "../components/OTPInput";
import CustomButton from "../components/CustomButton";
import { api } from "../app/(services)/api/api";
import { useMutation } from "@tanstack/react-query";
import ToastManager, { Toast } from "toastify-react-native";
import axios from "axios";
import OTPTextInput from "react-native-otp-textinput";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function VerifyOtp() {
  const showToasts = () => {
    Toast.success("Promised is resolved");
  };
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  //Getting user data
  const [verifiedEmailData, setVerifiedEmailData] = useState(null);
  const { push } = useRouter();
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("verifiedEmail");
        if (jsonValue != null) {
          const data = JSON.parse(jsonValue);
          setVerifiedEmailData(data);

          // Extract email from the nested structure
          const userEmail = data?.data?.user?.email;
          setEmail(userEmail);
        }
      } catch (e) {
        console.error("Failed to fetch the data from storage", e);
      }
    };

    getData();
  }, []);

  console.log("email:", email);
  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };
  const OTPValidationSchema = Yup.object().shape({
    otp: Yup.string()
      .required("Required")
      .length(6, "OTP must be exactly 6 digits"),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { token: string }) => {
      await axios.patch(`${api}/email/verify`, data);
    },
    mutationKey: ["verify"],
    onSuccess() {
      console.log("Successfully");
      // toast.success("Email verified, you can sign-in now");
      push("/(auth)/log-in");
    },

    onError(error) {
      const errorData = error as any;

      const errorObject = errorData;
      let errorMessage;

      if (typeof errorObject === "object" && errorObject !== null) {
        console.log(
          "errors:",
          errorData,
          errorData?.data?.message || errorData?.status
        );
      } else if (errorObject === null) {
        console.log("other:", errorData);
      } else {
        console.log("Network issues");
      }
    },
  });

  // Resend OTP
  const { mutate: resend, isPending: pending } = useMutation({
    mutationFn: async (data: { email: string }) => {
      await axios.patch(`${api}/resend-email`, data);
    },
    mutationKey: ["resend"],
    onSuccess(data) {
      console.log("Successfully resend", data);
      // toast.success("Email verified, you can sign-in now");
      // push("/");
    },

    onError(error) {
      const errorData = error as any;
      console.log("err:", error);
      const errorObject = errorData;
      let errorMessage;

      if (typeof errorObject === "object" && errorObject !== null) {
        console.log(
          "errors:",
          errorData,
          errorData?.data?.message || errorData?.status
        );
      } else if (errorObject === null) {
        console.log("other:", errorData);
      } else {
        console.log("Network issues");
      }
    },
  });

  const handleSubmit = (values: any) => {
    console.log("OTP Submitted: ", values.otp);
    mutate({
      token: values.otp,
    });
    // Handle OTP submission (e.g., API call)
  };

  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={OTPValidationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View className="flex-1 h-full px-4 bg-white">
          <Text></Text>
          <Text className="text-[#777777] text-[14px]">
            Enter the NovaShip verification code sent to your email.
          </Text>

          <Text
            onPress={showToasts}
            className="text-[12px] text-black opacity-40 mt-6"
          >
            Email Address
          </Text>
          <Text className="mt-2 text-[14px] text-[#414A53]">{email}</Text>
          <OTPTextInput
            handleTextChange={(otp) => setFieldValue("otp", otp)}
            tintColor={"#00997D"}
            inputCount={6}
            // textInputStyle={[
            //   styles.textInput,
            //   values.otp.length === 6 ? styles.filledInput : styles.emptyInput,
            // ]}
            textInputStyle={{
              borderColor: "black",
              borderWidth: 2,
              borderBottomWidth: 2,
              borderRadius: 15,
              flex: 1,
            }}
          />
          {touched.otp && errors.otp && (
            <Text className="text-red-400">{errors.otp}</Text>
          )}
          <Text className="mt-2 text-[14px] text-[#777777]">
            {`Enter code sent to ${email}`}
          </Text>

          {isPending ? (
            <ActivityIndicator
              size="small"
              color="white"
              className="bg-green text-white px-6 rounded-[30px] min-h-[55px] justify-center items-center"
            />
          ) : (
            <CustomButton
              title="Submit"
              containerStyles="mt-6"
              handlePress={handleSubmit}
            />
          )}

          <TouchableOpacity className="flex-row justify-end mt-6">
            {pending ? (
              <Text className="text-green">Loading</Text>
            ) : (
              <View className="flex-row space-x-2">
                <Text
                  onPress={() => resend({ email: email })}
                  className="underline"
                >
                  Resend Code
                </Text>
                <Text className="text-green">00:52s</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

// const styles = StyleSheet.create({
//   textInput: {
//     borderColor: "black",
//     borderWidth: 2,
//     borderBottomWidth: 2,
//     borderRadius: 15,
//     flex: 1,
//   },
//   filledInput: {
//     backgroundColor: "lightgreen",
//   },
//   emptyInput: {
//     backgroundColor: "white",
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     marginTop: 10,
//   },
// });
