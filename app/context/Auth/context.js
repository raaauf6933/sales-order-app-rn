import { useState } from "react";
import "./../../../firebase";
import { createContext, useContext, useReducer } from "react";
import { API_URL } from "@env";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import usePost from "./../../hooks/usePost";
import authStorage from "./utils";
import { AuthReducer, initialState } from "./reducers";

const auth = getAuth();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const [verifyAccount, verifyAccountOpts] = usePost({
    onComplete: (e) => {
      dispatch({
        type: "LOGIN",
        payload: {
          role: e.data.data.role,
          user_id: e.data.data.id,
        },
      });
    },
    onError: (err) => {
      dispatch({ type: "SET_ERROR", payload: true });
    },
  });

  const login = async ({ email, password, role }) => {
    dispatch({ type: "SET_ERROR", payload: false });
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      verifyAccount({
        url: "/verify_account",
        data: {
          email,
          role,
        },
        method: "POST",
      });

      await authStorage.storeToken(result._tokenResponse.idToken);
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: true });
      // alert(error.message);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const logout = async () => {
    dispatch({ type: "SET_ERROR", payload: false });
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
        loading: state.loading || verifyAccountOpts.loading,
        dispatch,
        role: state.role,
        state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const {
    login,
    logout,
    isAuthenticated,
    error,
    loading,
    dispatch,
    role,
    state,
  } = useContext(AuthContext);

  return {
    login,
    logout,
    isAuthenticated,
    getUser: authStorage.getUser,
    error,
    loading,
    dispatch,
    role,
    state,
  };
};
