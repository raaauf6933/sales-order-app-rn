import { StyleSheet, FlatList, View, Text } from "react-native";

import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";

import PhpFormatter from "../../utils/currencyFormatter";
import CartCard from "./../../components/CartCard";
import AppButton from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const listData = [
  {
    id: "1",
    title: "Gentlemans Collection",
    price: PhpFormatter(6999),
    image: require("../../../assets/wine_1.jpg"),
  },
  {
    id: "2",
    title: "CAPERCAILLIE CHARDONNAY",
    price: PhpFormatter(7888),
    image: require("../../../assets/wine_3.jpg"),
  },
  {
    id: "3",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
];

function MyCart(props) {
  const { navigation } = props;
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Wrapper style={styles.container}>
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartCard
              image={item.image}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
              title={item.title}
              subTitle={item.price}
              quantity={4}
            />
          )}
        />
      </Wrapper>
      <View style={styles.checkoutContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.amountLabel}>{PhpFormatter(14000)}</Text>
          </View>
          <View style={styles.checkoutBtn}>
            <AppButton
              title="Place Order"
              icon="cart-check"
              onPress={() => navigation.navigate(Routes.SUCCESS_CHECKOUT)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  totalLabel: {
    fontSize: 14,
    opacity: 0.6,
  },
  amountLabel: {
    fontSize: 24,
    fontWeight: 600,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  checkoutContainer: {
    backgroundColor: colors.white,
    padding: 30,
  },
  checkoutBtn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyCart;
