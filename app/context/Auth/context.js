import { useState } from "react";
import "./../../../firebase";
import { createContext, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { navigate, reset } from "../../utils/rootNavigation";
import authStorage from "./utils";
import routes from "../../navigation/routes";
const auth = getAuth();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await authStorage.storeToken(result._tokenResponse.idToken);

      // reset({
      //   index: 1,
      //   routes: [{ name: "tabs" }],
      // });

      setIsLoggedIn(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await authStorage.removeToken();

    setIsLoggedIn(false);
    // reset({
    //   index: 1,
    //   routes: [{ name: "Welcome" }],
    // });
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated: isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { login, logout, isAuthenticated } = useContext(AuthContext);

  return {
    login,
    logout,
    isAuthenticated,
    getUser: authStorage.getUser,
  };
};
