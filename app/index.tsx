// import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
// import RootNavigator from "./navigator/RootNavigator";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { StrokeText } from "@charmy.tech/react-native-stroke-text";
import CustomButton from "../components/CustomButton";
// const client = new ApolloClient({
//   uri: "https://hoogstraten.stepzen.net/expo/ups/__graphql",
//   headers: {
//     Authorization: `Apikey hoogstraten::stepzen.net+1000::c6678c391abfe12fab0fff4041aec05917c63d4f865217c4f30930bf5afec7af`,
//   },
//   cache: new InMemoryCache(),
// });
import { Redirect, router, Link } from "expo-router";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    // <TailwindProvider utilities={utilities}>
    //   <ApolloProvider client={client}>
    //     <NavigationContainer>
    //       <RootNavigator />
    //     </NavigationContainer>
    //   </ApolloProvider>
    // </TailwindProvider>

    <ImageBackground
      source={require("../assets/app/onboarding/background.png")}
      style={{ height: "100%", backgroundColor: "blue" }}
      resizeMode="cover"
    >
      <Image
        source={require("../assets/app/onboarding/gradient.png")}
        className="absolute inset-0 w-full h-full"
      />

      <SafeAreaView
        className="flex-1 h-full font-IRegular"
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full items-center h-full mt-[168px] px-[15px]">
            <View className="items-center">
              <Image
                source={require("../assets/app/onboarding/logo.png")}
                className="w-[63px] h-[82px]"
                resizeMode="contain"
              />
              <Text
                className="text-[34px] mt-4 font-fRegular text-white"
                style={styles.box}
              >
                NOVASHIP
              </Text>
            </View>

            <View className="text-white text-center justify-center items-center mt-[116px] font-IRegular relative">
              <Text
                className="text-[70px] font-ISemiBold absolute -top-10 leading-[78px]"
                style={styles.overlayText}
              >
                NovaShip
              </Text>

              {/* <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StrokeText
                  text="Hello, World!"
                  fontSize={50}
                  color="#000000"
                  strokeColor="#FF0000"
                  strokeWidth={2}
                  fontFamily="Arial"
                />
              </View> */}

              <Text
                className="text-white text-xl text-center font-fRegular leading-[31px]"
                style={styles.mainText}
              >
                WELCOME TO A BRIGHTER DAY IN WORLDWIDE SHIPPING:
              </Text>
              <Text className="text-[13px] text-white mt-4">
                welcome to logistics on the blockchain.
              </Text>

              <Text className="text-center text-white text-[13px] mt-8 w-[330px] leading-[21px]">
                Purchase with cryptocurrency or fiat from any platform and
                export securely, easily, reliably, and seamlessly with top
                freight forwarders in the USA.
              </Text>
            </View>

            <CustomButton
              title="Log in or Sign up"
              handlePress={() => router.push("/(auth)/log-in")}
              containerStyles="w-full mt-10"
              isLoading={false}
              textStyles=""
            />

            <Link
              href="/tabs"
              className="text-white underline text-[16px] mt-[25px]"
            >
              Learn more
            </Link>
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#fff" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  box: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 30,
  },

  overlayText: {
    // fontWeight: "bold",
    color: "transparent",
    textShadowColor: "white",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  mainText: {},
});
