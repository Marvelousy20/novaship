import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const HamburgerIcon = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.line} className="mr-4" />
      <View style={[styles.line, styles.middleLine]} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  line: {
    width: 15,
    height: 3,
    backgroundColor: "black",
    marginVertical: 2,
  },
  middleLine: {
    width: 30,
  },
});

export default HamburgerIcon;
