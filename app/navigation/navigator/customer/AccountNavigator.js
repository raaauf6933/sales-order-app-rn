import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import routes from "../../routes";
import MyAccountScreen from "../../../screens/Account/MyAccount";

function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MY_ACCOUNT}
        component={MyAccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
