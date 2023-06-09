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
import moment from "moment";
import OrderStatus from "./OrderStatus";

const OrderCardCustomer = ({
  image,
  onPress,
  title,
  subTitle,
  quantity,
  status,
  data,
}) => {
  const date = moment(data.createdAt).format("MMMM Do YYYY, h:mm a");

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "100" }}>ORDER: </Text>
            <Text style={{ fontWeight: "bold" }}>{data.order_id}</Text>
          </View>
          <View>
            <OrderStatus status={status} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.detailsContainer}>
            {/* <Text style={styles.subTitle}>
              Total Amount:{" "}
              <Text style={{ fontWeight: "100" }}> {subTitle}</Text>{" "}
            </Text>
            <Text style={styles.subTitle}>
              Order Created: <Text style={{ fontWeight: "100" }}>{date}</Text>{" "}
            </Text> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 4,
              }}
            >
              <Text style={styles.title1}>Total Amount:</Text>
              <Text style={styles.title2}>{subTitle}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 4,
              }}
            >
              <Text>Order Created:</Text>
              <Text>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#d1d1d1",
    borderStyle: "solid",
    borderBottomWidth: 0.2,
    backgroundColor: "#f5fafc",
  },
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
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default OrderCardCustomer;
