import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Button from "./../../components/Button";
import Routes from "./../../navigation/routes";
import colors from "../../config/colors";

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      blurRadius={Platform.OS === "android" ? 2 : 10}
      style={styles.background}
      source={require("../../../assets/grocery_bg.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Welcome ! We're so glad you're here.</Text>
        <Text style={styles.subTitle}>
          With our easy-to-use platform, you'll have access to thousands of
          products from top brands and independent sellers. Whether you're
          shopping for clothes, electronics, home goods, or anything in between,
          we've got you covered.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color="primary"
          onPress={() => navigation.navigate(Routes.LOGIN)}
        />
        {/* <Button
          title="Dont have account? Register Here"
          color="secondary"
          onPress={() => navigation.navigate(Routes.REGISTER)}
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate(Routes.REGISTER)}>
          <View>
            <Text
              style={{
                color: colors.light,

                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Don't have an account yet? Register Here
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "stretch",
  },
  buttonContainer: {
    width: "100%",
    padding: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 20,
    color: colors.light,
  },
  subTitle: {
    fontSize: 20,
    paddingHorizontal: 8,
    fontWeight: "200",
    textAlign: "center",
    color: colors.light,
  },
});
