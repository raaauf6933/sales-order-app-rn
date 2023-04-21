import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import MyOrderScreen from "../../../screens/MyOrders/MyOrders";

import MyOrderDetailsScreen from "../../../screens/MyOrders/MyOrderDetails/MyOrderDetails";
import routes from "../../routes";

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
    </Stack.Navigator>
  );
}

export default MyOrderNavigator;
