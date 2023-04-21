export const initialState = {
  error: null,
  isLoggedIn: false,
  loading: false,
  role: null,
  user_id: null,
  first_name: "",
  last_name: "",
  email: "",
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        role: action.payload.role,
        user_id: action.payload.user_id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        role: null,
        user_id: null,
        first_name: "",
        last_name: "",
        email: "",
      };
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
