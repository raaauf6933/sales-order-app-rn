export const initialState = {
  carts: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      const myCarts = state.carts;
      myCarts.push(action.payload);

      return { ...state, carts: myCarts };
    case "REMOVE_ITEM":
      const newCarts = state.carts;
      const fff = newCarts.filter(function (obj) {
        return obj.id !== action.payload;
      });

      return { ...state, carts: fff };
    case "RESET_CART":
      return { ...state, carts: [] };
    default: {
      throw Error("Unknown action: " + action.type);
      break;
    }
  }
}
