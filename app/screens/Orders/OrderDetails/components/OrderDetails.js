import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import ProductOrderDetails from "../../../../components/ProductOrderDetails";
import { Card } from "@rneui/base";
import PhpFormatter from "../../../../utils/currencyFormatter";
import colors from "../../../../config/colors";

const listData = [
  {
    id: "1",
    title: "Gentlemans Collection",
    price: PhpFormatter(6999),
    image: require("../../../../../assets/wine_1.jpg"),
  },
  {
    id: "2",
    title: "CAPERCAILLIE CHARDONNAY",
    price: PhpFormatter(7888),
    image: require("../../../../../assets/wine_3.jpg"),
  },
  {
    id: "3",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../../../assets/wine_4.jpg"),
  },
];

export default function OrderDetails() {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={{ textAlign: "left" }}>
        <Text style={styles.title}>Order Details</Text>
      </Card.Title>
      <Card.Divider />
      <View style={{ padding: 10 }}>
        {listData.map((item, index) => {
          return (
            <View key={index}>
              <ProductOrderDetails
                image={item.image}
                title={item.title}
                subTitle={item.price}
                quantity={4}
              />
              {listData.length - 1 === index ? null : <Card.Divider />}
            </View>
          );
        })}
        {/* <FlatList
          nestedScrollEnabled
          data={listData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item, index, arr }) => (
            <View key={index}>
              <ProductOrderDetails
                image={item.image}
                title={item.title}
                subTitle={item.price}
                quantity={4}
              />
              {listData.length - 1 === index ? null : <Card.Divider />}
            </View>
          )}
        /> */}
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, paddingBottom: 15 }}>Order summary</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 4,
            }}
          >
            <Text style={styles.title1}>Subtotal:</Text>
            <Text style={styles.title2}>{PhpFormatter(4000)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 4,
            }}
          >
            <Text style={styles.title1}>Vatable Sales:</Text>
            <Text style={styles.title2}>{PhpFormatter(3872)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 4,
            }}
          >
            <Text style={styles.title1}>VAT:</Text>
            <Text style={styles.title2}>{PhpFormatter(271)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 4,
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.title2}>{PhpFormatter(4000)}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 18,
    fontWeight: "400",
    marginRight: 15,
  },
  title2: {
    fontSize: 18,
    fontWeight: "300",
  },
  total: {
    fontSize: 18,
    fontWeight: "600",
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  title: {
    fontSize: 24,
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
