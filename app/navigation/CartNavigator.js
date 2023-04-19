import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import MyCart from "../screens/Cart/MyCart";
import Checkout from "../screens/Cart/Checkout";
import routes from "./routes";

function CartNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.MY_CART} component={MyCart} />
      {/* <Stack.Screen name={routes.CHECKOUT} component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default CartNavigator;
