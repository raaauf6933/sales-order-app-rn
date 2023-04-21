import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import LoadingScreen from "./../../components/LoadingScreen";
import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import useApi from "./../../hooks/useApi";
import { useCart } from "./../../context/Cart/context";
import PhpFormatter from "../../utils/currencyFormatter";
import { useEffect } from "react";
import { useCallback, useState } from "react";

function ListingScreen(props) {
  const { navigation } = props;

  const [refreshing, setRefreshing] = useState(false);
  const { response, refetch, loading } = useApi({
    url: "/products",
    method: "POST",
  });

  const { findItem } = useCart();

  const products =
    response && response?.data
      ? response?.data?.data?.map((e) => ({
          id: e.id,
          product_id: e.product_id,
          product_name: e.product_name,
          price: PhpFormatter(e.product_selling_price),
          selling_price: e.product_selling_price,
          description: e.description,
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
    <Wrapper style={styles.container}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {products.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                onPress={() =>
                  navigation.navigate(Routes.LISTING_DETAILS, item)
                }
                title={item.product_name}
                subTitle={item.price}
                inCart={findItem(item.id)}
              />
            );
          })}
        </ScrollView>
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
