import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerTabNavigator from "./navigator/customer/CustomerTabNavigator";
import routes from "./routes";
import ListingDetails from "./../screens/Store/ListingDetails";
import SuccessCheckout from "./../screens/Cart/SuccessCheckout";

const Stack = createNativeStackNavigator();

function CustomerAppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={CustomerTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetails}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name={routes.SUCCESS_CHECKOUT}
        component={SuccessCheckout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default CustomerAppStack;
