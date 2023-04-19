import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
// import AuthNavigator from "./app/navigation/AuthNavigator";
import routes from "./app/navigation/routes";
import ListingDetails from "./app/screens/Store/ListingDetails";
import SuccessCheckout from "./app/screens/Cart/SuccessCheckout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={TabNavigator}
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
      {/* <Stack.Screen name={routes.LOGIN} component={LoginScreen} /> */}
    </NavigationContainer>
  );
}
