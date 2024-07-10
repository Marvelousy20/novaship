import { StyleSheet, Text, View, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import Track from "../../assets/app/track.png";
import Ship from "../../assets/app/ship.png";
import Profile from "../../assets/app/profile.png";

interface TabProps {
  icon: any;
  color: string;
  name: string;
  focused: any;
}

const TabIcon = ({ icon, color, name, focused }: TabProps) => {
  return (
    <View className="items-center flex-row justify-center gap-1.5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#00997D" : "black"}
        className="w-6 h-6"
      />
      <Text className="font-medium text-[#414A53]">{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#F3F3F3",
          },
        }}
      >
        <Tabs.Screen
          name="track"
          options={{
            title: "Track",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Track}
                name="Track"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="ship"
          options={{
            title: "Ship",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Ship}
                name="Ship"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Profile}
                name="Profile"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
