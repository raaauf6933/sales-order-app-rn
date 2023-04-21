import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, ListItem } from "@rneui/base";
import colors from "../../../../config/colors";
import OrderStatus from "../../../../components/OrderCard/OrderStatus";

export default function OrderInfo({ data }) {
  const { customer } = data;

  return (
    <Card containerStyle={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 7,
        }}
      >
        <Text style={styles.title}>Order Info</Text>
        <OrderStatus status={data.status} />
      </View>
      <Card.Divider />
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 4,
          }}
        >
          <Text style={styles.title1}>Customer:</Text>
          <Text style={styles.title2}>
            {customer.first_name} {customer.last_name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 4,
          }}
        >
          <Text style={styles.title1}>Contact Number:</Text>
          <Text style={styles.title2}>{customer.contact_number}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 4,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title1}>Email:</Text>
          <Text style={styles.title2}>{customer.email}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 15,
    fontWeight: "400",
    marginRight: 15,
  },
  title2: {
    fontSize: 15,
    fontWeight: "300",
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    opacity: 0.8,
  },
  card: {
    borderRadius: 15,
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
