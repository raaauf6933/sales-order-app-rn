import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "auth_token";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.error("storeToken", error);
  }
};

const isAuthenticated = async () => {
  try {
    const result = await SecureStore.getItemAsync(key);

    if (result) return result;

    throw Error();
  } catch (error) {
    return null;
  }
};
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("getToken", error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
  } catch (error) {
    console.error("getUser", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    return null;
  }
};

export default { getUser, getToken, removeToken, storeToken, isAuthenticated };
