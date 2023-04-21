import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AuthProvider, { useAuth } from "./app/context/Auth/context";
import CartProvider from "./app/context/Cart/context";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/utils/rootNavigation";
import CustomerAppStack from "./app/navigation/CustomerAppStack";
import CustomerAuthStack from "./app/navigation/CustomerAuthStack";
import AdminAppStack from "./app/navigation/AdminAppStack";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppScreen />
      </CartProvider>
    </AuthProvider>
  );
}

function AppScreen() {
  const { isAuthenticated, role } = useAuth();

  const getAppStack = () => {
    switch (role) {
      case "CUSTOMER":
        return <CustomerAppStack />;
      case "STORE_ADMIN":
        return <AdminAppStack />;
      default:
        return <CustomerAuthStack />;
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? getAppStack() : <CustomerAuthStack />}
    </NavigationContainer>
  );
}
