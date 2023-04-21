import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "./../../config/colors";
import Text from "./../Text";

const Card = ({ image, onPress, title, subTitle, inCart }) => (
  <TouchableWithoutFeedback onPress={inCart ? null : onPress}>
    <View style={[styles.card, inCart ? styles.disabledCard : null]}>
      <View
        style={{
          height: 200,
          maxWidth: "100%",
          flex: 1,
        }}
      >
        <Image style={styles.image} source={{ uri: image }} />
      </View>

      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.title}>{title} </Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          {inCart ? (
            <Text style={{ color: colors.danger }}>Already in Cart</Text>
          ) : null}
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  disabledCard: {
    opacity: 0.5,
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
