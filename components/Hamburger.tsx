import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const HamburgerMenu = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <View style={styles.fullScreenMenu}>
      <SafeAreaView className="flex-1 w-full">
        <View className="flex-1 items-start justify-start w-full">
          <TouchableOpacity
            onPress={() => setIsMenuOpen(false)}
            className="flex-row w-full justify-end px-4"
          >
            <Ionicons name="close-outline" size={24} color="white" />
          </TouchableOpacity>

          <View className="items-center w-full">
            <Image source={require("../assets/sidebar/logo.png")} />
          </View>

          {/* Menu Items */}
          <View className="px-7 space-y-6 w-full mt-12">
            <Link href="/" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/material-symbols_home-outline.png")}
                />
                <Text className="font-medium text-[16px] text-white">Home</Text>
              </View>
            </Link>

            <Link href="/" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/mdi_about-variant.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  About Us
                </Text>
              </View>
            </Link>

            <Link href="/contact" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/mdi_card-account-phone-outline.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  Contact Us
                </Text>
              </View>
            </Link>

            <Link href="/contact" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/hugeicons_taxes.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  Export Taxes
                </Text>
              </View>
            </Link>

            <Link href="/contact" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/grommet-icons_compliance.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  Complaince
                </Text>
              </View>
            </Link>

            <Link href="/contact" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/hugeicons_bitcoin-cpu.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  Accepted Crypto
                </Text>
              </View>
            </Link>

            <Link href="/faq" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image source={require("../assets/sidebar/inactive.png")} />
                <Text className="font-medium text-[16px] text-white">FAQ</Text>
              </View>
            </Link>

            <View className="h-[1px] w-full bg-[#E8E6EA]"></View>

            <Link href="/(auth)/log-in" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/mdi_account-box-outline.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  Login
                </Text>
              </View>
            </Link>

            <Link href="/faq" onPress={() => setIsMenuOpen(false)}>
              <View className="flex-row items-center space-x-4">
                <Image
                  source={require("../assets/sidebar/f7_shippingbox-fill.png")}
                />
                <Text className="font-medium text-[16px] text-white">
                  My Parcels
                </Text>
              </View>
            </Link>
          </View>

          <View className="px-4 w-full mt-16">
            <TouchableOpacity className="bg-white rounded-full w-full h-[55px] items-center justify-center px-4">
              <Text className="text-green font-medium text-lg">
                Get a Quote
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00997D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});

export default HamburgerMenu;
