import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreNavigator from "./StoreNavigator";
import CartNavigator from "./CartNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../../routes";
import { useCart } from "../../../context/Cart/context";
import MyOrderNavigator from "./MyOrderNavigator";

const Tab = createBottomTabNavigator();

function CustomerTabNavigator() {
  const { state } = useCart();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.STORE_TAB}
        component={StoreNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
          tabBarLabel: "Store",
          tabBarLabelStyle,
          title: "Store",
        }}
      />
      <Tab.Screen
        name={routes.MY_CART_TAB}
        component={CartNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
          tabBarLabel: "My Cart",
          tabBarLabelStyle,
          tabBarBadge:
            state.carts.length === 0 ? undefined : state.carts.length,
        }}
      />
      <Tab.Screen
        name={routes.MY_ORDER_TAB}
        component={MyOrderNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="receipt" size={size} color={color} />
          ),
          tabBarLabel: "My Orders",
          tabBarLabelStyle,
          headerTitle: "My Orders",
          // tabBarBadge: 2,
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

export default CustomerTabNavigator;
