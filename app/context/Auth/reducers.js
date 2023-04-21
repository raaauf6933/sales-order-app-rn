export const initialState = {
  error: null,
  isLoggedIn: false,
  loading: false,
  role: null,
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, role: action.payload.role };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, role: null };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default: {
      throw Error("Unknown action: " + action.type);
      break;
    }
  }
}
