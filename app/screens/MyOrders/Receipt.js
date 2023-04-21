import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import colors from "../../config/colors";
import { Card, Divider } from "@rneui/base";
import moment from "moment";
import PhpFormatter from "../../utils/currencyFormatter";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import routes from "../../navigation/routes";

const Receipt = (props) => {
  const data = props.route.params;

  const dateToday = moment().format("MMMM Do YYYY, h:mm a");

  return (
    <Wrapper style={styles.container}>
      <ScrollView>
        <View style={{ height: "100%", justifyContent: "center" }}>
          <Card containerStyle={styles.card}>
            <Card.Title style={styles.headerLabel}>
              ORDER #: FW532DFA
            </Card.Title>
            <Text style={{ textAlign: "center" }}>{dateToday}</Text>
            <Divider style={{ marginVertical: 10 }} />
            <View style={styles.row}>
              <Text style={styles.title}>Payment Type :</Text>
              <Text style={styles.value}>Cash</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Customer Name :</Text>
              <Text style={styles.value}>
                {data.customer.first_name} {data.customer.last_name}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Address :</Text>
              <Text style={styles.value}>{data.customer.address}</Text>
            </View>
            <Divider style={{ marginVertical: 10 }} />
            <View style={styles.row}>
              <Text style={styles.subHeader}>QTY ITEM</Text>
              <Text style={styles.subHeader}>TOTAL</Text>
            </View>
            {data.order_lines.map((item) => {
              return (
                <View style={styles.row} key={item.id}>
                  <Text style={styles.title}>
                    {item.quanty} - {item.product_name}
                  </Text>
                  <Text style={styles.value}>
                    {PhpFormatter(item.product_selling_price * item.quanty)}
                  </Text>
                </View>
              );
            })}
            <Divider style={{ marginVertical: 10 }} />
            <View style={styles.row}>
              <Text style={styles.title}>Amount :</Text>
              <Text style={styles.value}>{PhpFormatter(data.totalAmount)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Vatable :</Text>
              <Text style={styles.value}>{PhpFormatter(data.vat)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>VAT :</Text>
              <Text style={styles.value}>{PhpFormatter(data.vatable)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Total Amount :</Text>
              <Text style={styles.value}>{PhpFormatter(data.totalAmount)}</Text>
            </View>
            <Divider style={{ marginVertical: 10 }} />
            <Text style={styles.footerLabel}>THANK YOU!</Text>
          </Card>

          <Button
            style={{ paddingHorizontal: 15 }}
            onPress={() => props.navigation.goBack()}
          >
            Done
          </Button>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  footerLabel: {
    fontSize: 45,
    fontWeight: "200",
    textAlign: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    opacity: 0.5,
    fontWeight: "600",
  },
  subHeader: {
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  row: {
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
  card: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.0,
    elevation: 1,
  },
  headerLabel: {
    fontSize: 35,
    fontWeight: "300",
  },
});
