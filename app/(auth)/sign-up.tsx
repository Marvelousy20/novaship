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

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 h-full bg-white">
      <View className="pt-8">
        <ScrollView>
          <View className="flex-1 h-full px-4">
            <Text className="text-sm font-IRegular text-[#777777]">
              Create a profile for more benefits
            </Text>

            <Text className="text-[#777777] text-sm font-IRegular leading-[22px] mt-4">
              Get full tracking details about your incoming packages, the
              ability to give instructions to your friendly NovaShip driver, and
              more.
            </Text>

            <View className="mt-7">
              <CustomTextInput
                label="Email Address*"
                placeholder="al@gmail.com"
              />
              <CustomTextInput label="Full Name*" placeholder="Alex May" />

              <View className="flex-row w-full justify-between">
                <CustomTextInput
                  label="Code Phone"
                  placeholder="US +1"
                  containerStyles="w-[36%]"
                />
                <CustomTextInput
                  label="Phone Number"
                  placeholder="444 1234 567"
                  containerStyles="w-[59%]"
                />
              </View>

              <CustomTextInput label="Username*" placeholder="Alex May" />

              <CustomTextInput
                label="Password*"
                placeholder="********"
                secureTextEntry
              />
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
                I agree to the NovaShip Technology Agreement and the NovaShip
                Tariff/Terms and Conditions of Service, which can be found at .
                the links set forth above.
              </Text>
            </View>

            <View className="flex-row gap-x-2.5 mt-6 max-w-[330px]">
              <View className="mt-1">
                <CustomCheckbox />
              </View>
              <Text className="text-[#777777] text-sm leading-[22px]">
                I understand I have the 14-day right of withdrawal and I hereby
                expressly renounce the 14-day right of withdrawal and request
                NovaShip immediately make NovaShip technologies available to me.
              </Text>
            </View>

            <View className="flex-row items-center justify-center mt-6">
              <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
              <View className="flex-1 h-px bg-[#DEE2DD]" />
              <View className="w-1.5 h-1.5 rounded-full bg-[#DEE2DD]" />
            </View>

            <View className="mt-6">
              <CustomButton title="Sign up" />

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
