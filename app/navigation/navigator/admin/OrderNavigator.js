import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import routes from "../../routes";
import Orders from "../../../screens/Orders/Orders";
import OrderDetails from "../../../screens/Orders/OrderDetails/OrderDetails";

function OrderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ORDERS}
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.ORDER_DETAILS}
        component={OrderDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default OrderNavigator;
