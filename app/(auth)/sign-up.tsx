import { useState } from "react";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import * as Yup from "yup";
import { Formik } from "formik";
import { registerUser } from "../(services)/api/api";
import { useMutation } from "@tanstack/react-query";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email().label("Email"),
  fullName: Yup.string().required("Full Name is required").label("Full Name"),
  userName: Yup.string().required("Username is required").label("Username"),
  password: Yup.string()
    .required("Password is required")
    .min(4)
    .label("Password"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .label("Phone Number"),
  agreeToTerms: Yup.boolean()
    .required("You must agree to the terms and conditions")
    .oneOf([true], "You must agree to the terms and conditions"),
  understandWithdrawal: Yup.boolean()
    .required("You must acknowledge the right of withdrawal")
    .oneOf([true], "You must acknowledge the right of withdrawal"),
});

const SignIn = () => {
  const mutation = useMutation({
    mutationFn: registerUser,
    mutationKey: ["register"],
  });
  console.log(mutation);

  return (
    <SafeAreaView className="flex-1 h-full bg-white">
      <View className="pt-8">
        <ScrollView>
          <Formik
            initialValues={{
              email: "",
              fullName: "",
              userName: "",
              password: "",
              phoneNumber: "",
              agreeToTerms: false,
              understandWithdrawal: false,
            }}
            onSubmit={(values) => {
              console.log(values);
              mutation
                .mutateAsync(values)
                .then((data) => {
                  mutation
                    .mutateAsync(values)
                    .then((data) => {
                      console.log("data", data);
                    })
                    .catch((error) => {
                      console.log("error", error);
                    });
                })
                .catch((error) => {
                  console.log("error", error);
                });
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              errors,
              touched,
              values,
              handleSubmit,
              setFieldValue,
            }) => (
              <View className="flex-1 h-full px-4">
                <Text className="text-sm font-IRegular text-[#777777]">
                  Create a profile for more benefits
                </Text>

                <Text className="text-[#777777] text-sm font-IRegular leading-[22px] mt-4">
                  Get full tracking details about your incoming packages, the
                  ability to give instructions to your friendly NovaShip driver,
                  and more.
                </Text>
                {mutation?.isError && (
                  // <Text>{mutation?.error?.response?.data?.message}</Text>
                  <Text className="text-[12px] text-red-500 text-center mt-4">
                    Error occured
                  </Text>
                )}

                {mutation?.isSuccess && (
                  // <Text>{mutation?.error?.response?.data?.message}</Text>
                  <Text className="text-[12px] text-green text-center mt-4">
                    Registration successful
                  </Text>
                )}

                <View className="mt-7">
                  <CustomTextInput
                    label="Email Address*"
                    placeholder="al@gmail.com"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    containerStyles={
                      errors.email && touched.email ? "mb-2" : "mb-6"
                    }
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-500 text-[12px] mb-6">
                      {errors.email}
                    </Text>
                  )}
                  <CustomTextInput
                    label="Full Name*"
                    placeholder="Alex May"
                    value={values.fullName}
                    onChangeText={handleChange("fullName")}
                    containerStyles={
                      errors.fullName && touched.fullName ? "mb-2" : "mb-6"
                    }
                  />
                  {errors.fullName && touched.fullName && (
                    <Text className="text-red-500 text-[12px] mb-6">
                      {errors.fullName}
                    </Text>
                  )}

                  <View className="flex-row w-full justify-between">
                    <CustomTextInput
                      label="Phone Number"
                      placeholder="US +1 444 1234 567"
                      onChangeText={handleChange("phoneNumber")}
                      containerStyles={`w-full ${
                        errors.phoneNumber && touched.phoneNumber
                          ? "mb-2"
                          : "mb-6"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <Text className="text-red-500 text-[0.75rem] mb-6">
                        {errors.phoneNumber}
                      </Text>
                    )}
                  </View>

                  <CustomTextInput
                    label="Username*"
                    placeholder="Alex May"
                    value={values.userName}
                    onChangeText={handleChange("userName")}
                    containerStyles={
                      errors.userName && touched.userName ? "mb-2" : "mb-6"
                    }
                  />
                  {errors.userName && touched.userName && (
                    <Text className="text-red-500 text-[12px] mb-6">
                      {errors.userName}
                    </Text>
                  )}

                  <CustomTextInput
                    label="Password*"
                    placeholder="********"
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange("password")}
                    containerStyles={
                      errors.password && touched.password ? "mb-2" : "mb-6"
                    }
                  />
                  {errors.password && touched.password && (
                    <Text className="text-red-500 text-[12px] mb-6">
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View className="flex-row items-center justify-center">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                  <View className="flex-1 h-px bg-[#DEE2DD]" />
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                </View>

                <View className="flex-row gap-x-2.5 max-w-[330px] mt-6">
                  <View className="mt-1">
                    <CustomCheckbox
                      checked={values.agreeToTerms}
                      onChange={() =>
                        setFieldValue("agreeToTerms", !values.agreeToTerms)
                      }
                    />
                  </View>
                  <Text className="text-[#777777] text-sm leading-[22px]">
                    I agree to the NovaShip Technology Agreement and the
                    NovaShip Tariff/Terms and Conditions of Service, which can
                    be found at . the links set forth above.
                  </Text>
                </View>
                {errors.agreeToTerms && touched.agreeToTerms && (
                  <Text className="text-red-500 text-[12px] mb-6">
                    {errors.agreeToTerms}
                  </Text>
                )}

                <View className="flex-row gap-x-2.5 mt-6 max-w-[330px]">
                  <View className="mt-1">
                    <CustomCheckbox
                      checked={values.understandWithdrawal}
                      onChange={() =>
                        setFieldValue(
                          "understandWithdrawal",
                          !values.understandWithdrawal
                        )
                      }
                    />
                  </View>
                  <Text className="text-[#777777] text-sm leading-[22px]">
                    I understand I have the 14-day right of withdrawal and I
                    hereby expressly renounce the 14-day right of withdrawal and
                    request NovaShip immediately make NovaShip technologies
                    available to me.
                  </Text>
                </View>
                {errors.understandWithdrawal &&
                  touched.understandWithdrawal && (
                    <Text className="text-red-500 text-[12px] mb-6">
                      {errors.understandWithdrawal}
                    </Text>
                  )}

                <View className="flex-row items-center justify-center mt-6">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                  <View className="flex-1 h-px bg-[#DEE2DD]" />
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                </View>

                <View className="mt-6">
                  {mutation?.isPending ? (
                    <ActivityIndicator
                      size="small"
                      color="white"
                      className="bg-green text-white px-6 rounded-[30px] min-h-[55px] justify-center items-center"
                    />
                  ) : (
                    <CustomButton title="Sign up" handlePress={handleSubmit} />
                  )}

                  <TouchableOpacity className="font-IRegular">
                    <View className="flex-row items-center gap-1 justify-center text-[16px] mt-4">
                      <Text>Already have an account?</Text>

                      <Text className="text-green-500 text-green text-sm font-IMedium">
                        <Link href="/">Log in</Link>
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className="mt-10">
                  <Text className="text-center max-w-[250px] mx-auto font-IMedium text-[12px] leading-[18px]">
                    By clicking “Sign up” you agree with our{" "}
                    <Link href="/" className="text-green underline">
                      Tariff/Terms & Conditions
                    </Link>{" "}
                    &{" "}
                    <Link href="/" className="text-green underline">
                      Privacy Policy
                    </Link>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
