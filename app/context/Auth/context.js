import { useState } from "react";
import "./../../../firebase";
import { createContext, useContext, useReducer } from "react";
import { API_URL } from "@env";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useApi from "./../../hooks/useApi";
import authStorage from "./utils";
import { AuthReducer, initialState } from "./reducers";

const auth = getAuth();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { refetch, loading: authLoading } = useApi(null, {
    skip: true,
  });

  const login = async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const verify_result = await refetch({
        url: "/verify_user",
        data: {
          email,
        },
        method: "POST",
      });

      if (!verify_result?.data) {
        dispatch({ type: "SET_ERROR" });
        return;
      }
      await authStorage.storeToken(result._tokenResponse.idToken);

      dispatch({ type: "LOGIN" });
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await authStorage.removeToken();
    dispatch({ type: "LOGOUT" });

    // reset({
    //   index: 1,
    //   routes: [{ name: "Welcome" }],
    // });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated: state.isLoggedIn,
        error: state.error,
        loading: authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { login, logout, isAuthenticated, error, loading } =
    useContext(AuthContext);

  return {
    login,
    logout,
    isAuthenticated,
    getUser: authStorage.getUser,
    error,
    loading,
  };
};
