import { useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { CartReducer, initialState } from "./reducers";
import { navigate } from "./../../utils/rootNavigation";
import routes from "../../navigation/routes";
export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
    navigate(routes.MY_CART_TAB);
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const findItem = (id) => {
    const carts = state.carts;

    return carts.some((cart) => cart.id === id);
  };

  const resetCart = () => dispatch({ type: "RESET_CART" });

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeItem,
        findItem,
        reset: resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const { state, addToCart, removeItem, findItem, reset } =
    useContext(CartContext);

  return {
    state,
    addToCart,
    removeItem,
    findItem,
    reset,
  };
};
