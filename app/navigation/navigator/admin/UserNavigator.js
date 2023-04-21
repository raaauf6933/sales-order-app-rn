import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import routes from "../../routes";
import UsersScreen from "../../../screens/Users/Users";
import CreateUser from "../../../screens/Users/CreateUser";

function UserNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.USERS} component={UsersScreen} />
      <Stack.Screen
        name={routes.CREATE_USER}
        component={CreateUser}
        options={{
          headerTitle: "Create User",
        }}
      />
    </Stack.Navigator>
  );
}

export default UserNavigator;
