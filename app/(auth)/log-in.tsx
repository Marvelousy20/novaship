import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { api } from "../(services)/api/api";
import axios from "axios";
import Toast from "../../components/Toast";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email().label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(4)
    .label("Password"),
});

const Login = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setShowToastType] = useState<"success" | "error">(
    "success"
  );

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await axios.post(`${api}/login`, data);
    },
    mutationKey: ["login"],
    onSuccess(data) {
      console.log("Successfully", data);
      setToastMessage("Login Successful");
      setShowToastType("success");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        router.push("/(tabs)/track");
      }, 3000);
    },

    onError(error) {
      const errorData = error as any;
      setToastMessage("Login Failed");
      setShowToastType("error");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
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
    console.log("login: ", values);
    mutate({
      email: values.email.toLowerCase(),
      password: values.password,
    });
  };

  return (
    <View className="flex-1 bg-white h-full px-4 pt-8">
      <View className="flex-1">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <CustomTextInput
                label="Email*"
                placeholder="Alex_M"
                onChangeText={handleChange("email")}
                value={values.email}
                containerStyles={
                  errors.email && touched.email ? "mb-2" : "mb-6"
                }
              />
              {/* Error */}
              {errors.email && touched.email && (
                <Text className="text-[12px] text-red-500 mb-6">
                  {errors.email}
                </Text>
              )}

              <CustomTextInput
                label="Password*"
                placeholder="********"
                secureTextEntry
                onChangeText={handleChange("password")}
                value={values.password}
                containerStyles={
                  errors.password && touched.password ? "mb-2" : "mb-6"
                }
              />
              {errors.password && touched.password && (
                <Text className="text-red-500 text-[12px]">
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity>
                <Text className="text-green-500 text-right text-green text-sm font-IMedium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              {isPending ? (
                <ActivityIndicator
                  size="small"
                  color="white"
                  className="bg-green text-white px-6 rounded-[30px] min-h-[55px] justify-center items-center mt-5"
                />
              ) : (
                <View className="mt-5">
                  <CustomButton title="Log in" handlePress={handleSubmit} />
                </View>
              )}
            </View>
          )}
        </Formik>

        <View className="mt-5 flex-row gap-x-2 items-center justify-center">
          <Image
            source={require("../../assets/app/line.png")}
            className="w-[94px] h-[1px]"
            resizeMode="cover"
          />
          <Text className="text-[12px] text-[#414A53] font-IRegular">
            or Continue with
          </Text>

          <Image
            source={require("../../assets/app/line.png")}
            className="w-[94px] h-[1px] rotate-180"
            resizeMode="cover"
          />
        </View>

        <View className="flex-row justify-center items-center mt-5 gap-x-8">
          <View className="border border-[#E8E6EA] rounded-xl h-[52px] w-[52px] items-center justify-center">
            <Image source={require("../../assets/app/logos_facebook.png")} />
          </View>

          <View className="border border-[#E8E6EA] rounded-xl h-[52px] w-[52px] items-center justify-center">
            <Image source={require("../../assets/app/logos_google-icon.png")} />
          </View>

          <View className="border border-[#E8E6EA] rounded-xl h-[52px] w-[52px] items-center justify-center">
            <Image source={require("../../assets/app/logos_apple.png")} />
          </View>
        </View>

        <View className="items-center mt-5">
          <Text className=" font-IRegular text-[16px]">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-green">
              Sign up
            </Link>
          </Text>
        </View>
      </View>

      <View className="mb-10">
        <Text className="text-center max-w-[250px] mx-auto font-IMedium text-[12px] leading-[18px]">
          By clicking “Sign up” you agree with our{" "}
          <Link href="/" className="text-green underline">
            Tariff/Terms & Conditions
          </Link>{" "}
          &{" "}
          <Link href="/" className="text-green underline">
            Privacy Policy
          </Link>
          .
        </Text>
      </View>

      {showToast && (
        <Toast message={toastMessage} isVisible={showToast} type={toastType} />
      )}
    </View>
  );
};

export default Login;
