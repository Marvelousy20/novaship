import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface ToastProps {
  message: string;
  isVisible: boolean;
  duration?: number;
  type?: "success" | "error";
}

const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  duration = 3000,
  type,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, fadeAnim, duration]);

  return (
    <Animated.View
      style={[
        styles.toast,
        { opacity: fadeAnim },
        type === "success" ? styles.success : styles.error,
      ]}
      className="flex justify-center"
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    top: 0,
    left: "10%",
    right: "10%",
    borderRadius: 10,
    alignSelf: "center",
    height: 60,
    maxWidth: "85%",
  },
  text: {
    color: "white",
    textAlign: "center",
  },

  success: {
    backgroundColor: "#00997D",
  },
  error: {
    backgroundColor: "#F44336",
  },
});

export default Toast;
