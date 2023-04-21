import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useCallback, useState } from "react";
import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";

import PhpFormatter from "../../utils/currencyFormatter";
import CartCard from "./../../components/CartCard";
import AppButton from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useApi from "./../../hooks/useApi";
import ProductCard from "../../components/ProductCard";
import { useEffect } from "react";

function Products(props) {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const { response, refetch } = useApi({ url: "/products", method: "POST" });

  const products =
    response && response?.data
      ? response?.data?.data?.map((e) => ({
          id: e.id,
          product_id: e.product_id,
          product_name: e.product_name,
          price: PhpFormatter(e.product_selling_price),
          image: e.product_img_url,
          quantity: e.quantity,
        }))
      : [];

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Wrapper style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {products?.map((item) => {
            return (
              <ProductCard
                key={item.id}
                image={item.image}
                onPress={() => navigation.navigate(Routes.PRODUCT_EDIT, item)}
                title={item.product_name}
                subTitle={item.price}
                quantity={item.quantity}
                productId={item.product_id}
              />
            );
          })}
          {/* <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
            )}
          /> */}
        </ScrollView>
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
