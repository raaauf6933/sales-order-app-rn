import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import routes from "../../routes";
import Products from "../../../screens/Products/Products";
import ProductCreate from "../../../screens/Products/ProductCreate";
import ProductEdit from "../../../screens/Products/ProductEdit";

function ProductNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PRODUCTS}
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.PRODUCT_CREATE}
        component={ProductCreate}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.PRODUCT_EDIT}
        component={ProductEdit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProductNavigator;
