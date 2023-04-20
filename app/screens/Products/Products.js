import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";

import PhpFormatter from "../../utils/currencyFormatter";
import CartCard from "./../../components/CartCard";
import AppButton from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProductCard from "../../components/ProductCard";

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
  {
    id: "4",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
  {
    id: "5",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
  {
    id: "6",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
  {
    id: "7",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
  {
    id: "8",
    title: "ENDEAVOUR - Vintage Beer",
    price: PhpFormatter(240),
    image: require("../../../assets/wine_4.jpg"),
  },
];

function Products(props) {
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
            <ProductCard
              image={item.image}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
              title={item.title}
              subTitle={item.price}
              quantity={4}
            />
          )}
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate(Routes.PRODUCT_CREATE)}
        >
          <MaterialCommunityIcons name="plus" size={30} color="#01a699" />
        </TouchableOpacity>
      </Wrapper>
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
  addBtn: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});

export default Products;
