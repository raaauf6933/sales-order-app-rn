import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AuthProvider, { useAuth } from "./app/context/Auth/context";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/utils/rootNavigation";
import CustomerAppStack from "./app/navigation/CustomerAppStack";
import CustomerAuthStack from "./app/navigation/CustomerAuthStack";
import AdminAppStack from "./app/navigation/AdminAppStack";

export default function App() {
  return (
    <AuthProvider>
      <AppScreen />
    </AuthProvider>
  );
}

function AppScreen() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <AdminAppStack /> : <CustomerAuthStack />}
    </NavigationContainer>
  );
}
