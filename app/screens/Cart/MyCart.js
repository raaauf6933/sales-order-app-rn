import { StyleSheet, FlatList, View, Text } from "react-native";
import usePost from "./../../hooks/usePost";
import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";
import { useCart } from "../../context/Cart/context";
import { useAuth } from "../../context/Auth/context";
import PhpFormatter from "../../utils/currencyFormatter";
import CartCard from "./../../components/CartCard";
import AppButton from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextBackground from "../../components/TextBackground";

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
  const { state, removeItem, reset } = useCart();
  const { state: authState } = useAuth();

  const [createOrder, createOrderOpts] = usePost({
    onComplete: () => {
      navigation.navigate(Routes.SUCCESS_CHECKOUT);
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const carts = state.carts;

  const getTotalAmount = () => {
    let totalAmount = 0;
    carts.forEach(
      (item) => (totalAmount = totalAmount + item.selling_price * item.qty)
    );
    return totalAmount;
  };

  const handleCheckout = () => {
    const order_lines = carts.map((e) => ({
      product_id: e.product_id,
      quantity: e.qty,
    }));

    createOrder({
      url: "/create_order",
      data: {
        customer_id: authState.user_id,
        order_lines,
      },
      method: "POST",
    });
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Wrapper style={styles.container}>
        <FlatList
          data={carts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartCard
              image={item.image}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
              title={item.product_name}
              subTitle={item.price}
              quantity={item.qty}
              id={item.id}
              removeItem={removeItem}
            />
          )}
          ListEmptyComponent={<TextBackground text="Your cart is empty!" />}
        />
      </Wrapper>
      {carts.length === 0 ? null : (
        <View style={styles.checkoutContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.amountLabel}>
                {PhpFormatter(getTotalAmount())}
              </Text>
            </View>

            <View style={styles.checkoutBtn}>
              <AppButton
                title="Place Order"
                icon="cart-check"
                onPress={handleCheckout}
                loading={createOrderOpts.loading}
                disabled={createOrderOpts.loading}
              />
            </View>
          </View>
        </View>
      )}
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
