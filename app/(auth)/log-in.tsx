import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View className="flex-1 bg-white h-full px-4 pt-8">
      <View className="flex-1">
        <CustomTextInput label="Username*" placeholder="Alex_M" />
        <CustomTextInput
          label="Password*"
          placeholder="********"
          secureTextEntry
        />
        <TouchableOpacity className="">
          <Text className="text-green-500 text-right text-green text-sm font-IMedium">
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View className="mt-5">
          <CustomButton title="Log in" />
        </View>

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
    </View>
  );
};

export default Login;
