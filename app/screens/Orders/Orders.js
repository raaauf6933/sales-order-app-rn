import {
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";
import useApi from "./../../hooks/useApi";
import PhpFormatter from "../../utils/currencyFormatter";
import OrderCard from "../../components/OrderCard";

function Products(props) {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const { response, refetch } = useApi({
    url: "/orders",
    method: "POST",
  });

  const orders =
    response?.data && response?.data?.data
      ? response?.data?.data.map((e) => ({
          id: e.id,
          order_id: e.order_id,
          customer: `${e.customer.first_name} ${e.customer.last_name}`,
          contact_number: e.customer.contact_number,
          price: PhpFormatter(e.totalAmount),
          status: e.status,
          ...e,
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
          {orders?.map((item) => {
            return (
              <OrderCard
                key={item.id}
                data={item}
                onPress={() => navigation.navigate(Routes.ORDER_DETAILS, item)}
              />
            );
          })}
        </ScrollView>
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
