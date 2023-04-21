import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import MyOrderScreen from "../../../screens/MyOrders/MyOrders";

import MyOrderDetailsScreen from "../../../screens/MyOrders/MyOrderDetails/MyOrderDetails";
import routes from "../../routes";
import Receipt from "../../../screens/MyOrders/Receipt";

function MyOrderNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.MY_ORDERS} component={MyOrderScreen} />
      <Stack.Screen
        name={routes.MY_ORDER_DETAILS}
        component={MyOrderDetailsScreen}
      />
      <Stack.Screen
        name={routes.RECEIPT}
        component={Receipt}
        options={{
          headerTitle: "Receipt",
        }}
      />
    </Stack.Navigator>
  );
}

export default MyOrderNavigator;
