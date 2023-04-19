import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import routes from "./routes";
import WelcomeScreen from "../screens/Auth/Welcome";

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.LOGIN} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
