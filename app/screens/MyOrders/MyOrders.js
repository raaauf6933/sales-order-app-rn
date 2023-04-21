import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import useApi from "./../../hooks/useApi";
import { useAuth } from "./../../context/Auth/context";
import colors from "../../config/colors";
import Routes from "../../navigation/routes";
import Wrapper from "../../components/Wrapper";
import PhpFormatter from "../../utils/currencyFormatter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderCardCustomer from "../../components/OrderCardCustomer";
import TextBackground from "../../components/TextBackground";

const MyOrders = (props) => {
  const { navigation } = props;
  const { state } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const { response, refetch } = useApi({
    url: "/orders",
    method: "POST",
    data: {
      user_id: state.user_id,
    },
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
        {orders.length < 1 ? (
          <TextBackground text="Empty Data" />
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {orders?.map((item) => {
              return (
                <OrderCardCustomer
                  key={item.id}
                  data={item}
                  image={item.image}
                  onPress={() =>
                    navigation.navigate(Routes.MY_ORDER_DETAILS, item)
                  }
                  title={item.customer}
                  subTitle={item.price}
                  quantity={4}
                  status={item.status}
                />
              );
            })}
            {/* <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCardCustomer
            data={item}
            image={item.image}
            onPress={() => navigation.navigate(Routes.MY_ORDER_DETAILS, item)}
            title={item.customer}
            subTitle={item.price}
            quantity={4}
            status={item.status}
          />
        )}
      /> */}
          </ScrollView>
        )}

        {/* <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate(Routes.PRODUCT_CREATE)}
      >
        <MaterialCommunityIcons name="plus" size={30} color="#01a699" />
      </TouchableOpacity> */}
      </Wrapper>
    </View>
  );
};

export default MyOrders;

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
