import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import ListingScreen from "../screens/Store/Listing";
import ListingDetails from "../screens/Store/ListingDetails";
import routes from "./routes";
import WelcomeScreen from "../screens/Auth/Welcome";

function StoreNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
    </Stack.Navigator>
  );
}

export default StoreNavigator;
