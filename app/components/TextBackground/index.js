import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextBackground = ({ text }) => {
  return (
    <View style={styles.containter}>
      <Text style={styles.message}>{text}</Text>
    </View>
  );
};

export default TextBackground;

const styles = StyleSheet.create({
  containter: {
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  message: {
    fontSize: 45,
    fontWeight: 100,
  },
});
