import "./../../../firebase";
import { createContext, useContext, useReducer } from "react";
import { API_URL } from "@env";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import usePost from "./../../hooks/usePost";
import authStorage from "./utils";
import { AuthReducer, initialState } from "./reducers";
import { navigate } from "./../../utils/rootNavigation";
import routes from "./../../navigation/routes";

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
          first_name: e.data.data.first_name,
          last_name: e.data.data.last_name,
          email: e.data.data.email,
        },
      });
    },
    onError: (err) => {
      dispatch({ type: "SET_ERROR", payload: true });
    },
  });

  const [createCustomer, createCustomerOpts] = usePost({
    onComplete: (e) => {
      navigate(routes.SUCCESS_REGISTER);
    },
    onError: (err) => {
      console.log(err.message);
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

  const register = async (form) => {
    const { email, password } = form;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await createCustomer({
        url: "/create_customer",
        method: "POST",
        data: {
          ...form,
        },
      });
    } catch (error) {
      alert(error.message);
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
        register,
        isAuthenticated: state.isLoggedIn,
        error: state.error,
        loading:
          state.loading ||
          verifyAccountOpts.loading ||
          createCustomerOpts.loading,
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
    register,
    isAuthenticated,
    error,
    loading,
    dispatch,
    role,
    state,
  } = useContext(AuthContext);

  return {
    login,
    register,
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
