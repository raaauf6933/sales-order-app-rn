import { ActivityIndicator, StyleSheet, View } from "react-native";

import React from "react";
import colors from "../../config/colors";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
