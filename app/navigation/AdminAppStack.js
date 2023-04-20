import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminTabNavigator from "./navigator/admin/AdminTabNavigator";

const Stack = createNativeStackNavigator();

function AdminAppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={AdminTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AdminAppStack;
