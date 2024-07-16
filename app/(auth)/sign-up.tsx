import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomCheckbox from "../../components/CustomCheckbox";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import * as Yup from "yup";
import { Formik } from "formik";

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
  // confirmPassword: Yup.string().oneOf(
  //   [Yup.ref("password")],
  //   "Passwords must match"
  // ),
});

const SignIn = () => {
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
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              errors,
              touched,
              values,
              handleSubmit,
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
                      label="Code Phone"
                      placeholder="US +1"
                      // containerStyles="w-[36%]"
                      value={values.phoneNumber}
                      onChangeText={handleChange("pboneNumber")}
                      containerStyles={`w-[36%] ${
                        errors.phoneNumber && touched.phoneNumber
                          ? "mb-2"
                          : "mb-6"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <Text className="text-red-500 text-[12px] mb-6">
                        {errors.phoneNumber}
                      </Text>
                    )}
                    <CustomTextInput
                      label="Phone Number"
                      placeholder="444 1234 567"
                      containerStyles={`w-[59%] ${
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
                    <CustomCheckbox />
                  </View>
                  <Text className="text-[#777777] text-sm leading-[22px]">
                    I agree to the NovaShip Technology Agreement and the
                    NovaShip Tariff/Terms and Conditions of Service, which can
                    be found at . the links set forth above.
                  </Text>
                </View>

                <View className="flex-row gap-x-2.5 mt-6 max-w-[330px]">
                  <View className="mt-1">
                    <CustomCheckbox />
                  </View>
                  <Text className="text-[#777777] text-sm leading-[22px]">
                    I understand I have the 14-day right of withdrawal and I
                    hereby expressly renounce the 14-day right of withdrawal and
                    request NovaShip immediately make NovaShip technologies
                    available to me.
                  </Text>
                </View>

                <View className="flex-row items-center justify-center mt-6">
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                  <View className="flex-1 h-px bg-[#DEE2DD]" />
                  <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
                </View>

                <View className="mt-6">
                  <CustomButton title="Sign up" handlePress={handleSubmit} />

                  <TouchableOpacity className="font-IRegular">
                    <View className="flex-row items-center gap-1 justify-center text-[16px] mt-4">
                      <Text>Already have an account?</Text>

                      <Text className="text-green-500 text-green text-sm font-IMedium">
                        <Link href="/">Log in</Link>
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
