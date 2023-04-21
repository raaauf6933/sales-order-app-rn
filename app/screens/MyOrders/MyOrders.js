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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderCardCustomer from "../../components/OrderCardCustomer";

const listData = [
  {
    id: "1",
    customer: "Juan Dela Cruz",
    contact_number: "09066000801",
    price: PhpFormatter(6999),
    image: require("../../../assets/wine_1.jpg"),
    status: "NEW_ORDER",
  },
];
const MyOrders = (props) => {
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
            <OrderCardCustomer
              data={item}
              image={item.image}
              onPress={() => navigation.navigate(Routes.ORDER_DETAILS, item)}
              title={item.customer}
              subTitle={item.price}
              quantity={4}
              status={item.status}
            />
          )}
        />

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
