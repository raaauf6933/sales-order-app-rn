import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import WelcomeScreen from "../screens/Auth/Welcome";
import LoginScreen from "../screens/Auth/Login";
import AdminLogin from "../screens/Auth/AdminLogin";
import RegisterScreen from "../screens/Auth/Register";
import SuccessRegister from "../screens/Auth/SuccessRegister";

const Stack = createNativeStackNavigator();

function CustomerAuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.ADMIN_LOGIN} component={AdminLogin} />
      <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={routes.SUCCESS_REGISTER}
        component={SuccessRegister}
      />
    </Stack.Navigator>
  );
}

export default CustomerAuthStack;
