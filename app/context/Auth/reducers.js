export const initialState = {
  error: null,
  isLoggedIn: false,
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    case "SET_ERROR":
      return { ...state, error: true };
    default: {
      throw Error("Unknown action: " + action.type);
      break;
    }
  }
}
