import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity as PlainButton,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "./../../config/colors";
import Text from "./../Text";

const CartCard = ({
  id,
  image,
  onPress,
  title,
  subTitle,
  quantity,
  removeItem,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 100,
            maxWidth: 100,
            flex: 1,
          }}
        >
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title} </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View>
              <Text style={styles.subTitle}>{subTitle}</Text>
              <Text style={styles.qtyTitle}>QTY: {quantity}</Text>
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <PlainButton
                style={styles.removeBtn}
                onPress={() => removeItem(id)}
              >
                <Text style={{ color: colors.danger }}>Remove</Text>
              </PlainButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  removeBtn: {
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    padding: 20,
    marginVertical: 10,

    marginHorizontal: 7,
  },
  qtyTitle: {
    color: colors.medium,
  },
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
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

export default CartCard;
