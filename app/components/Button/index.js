import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "./../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AppButton = ({ title, onPress, color = "primary", icon }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>{title}</Text>
        {icon ? (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            style={{ color: colors.white, marginLeft: 10 }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
