export const initialState = {
  carts: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_CART":
      const myCarts = state.carts;
      myCarts.push(action.payload);

      return { ...state, cart: myCarts };
    case "REMOVE_ITEM":
      const newCarts = state.carts;
      const fff = newCarts.filter(function (obj) {
        return obj.id !== action.payload;
      });

      return { ...state, carts: fff };
    default: {
      throw Error("Unknown action: " + action.type);
      break;
    }
  }
}
