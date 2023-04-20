import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../../routes";
import ProductsScreen from "../../../screens/Products/Products";
import ProductNavigator from "./ProductNavigator";
import OrderNavigator from "./OrderNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

function AdminTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.STORE_TAB}
        component={ProductNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cube-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Products",
          tabBarLabelStyle,
          title: "Store",
        }}
      />
      <Tab.Screen
        name={routes.ORDERS_TAB}
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cart-check"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Orders",
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name={routes.USERS_TAB}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Users",
          tabBarLabelStyle,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT_TAB}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Account",
          tabBarLabelStyle,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarLabelStyle = StyleSheet.create({
  fontSize: 13,
});

export default AdminTabNavigator;
