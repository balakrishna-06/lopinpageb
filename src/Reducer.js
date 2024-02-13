import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./Actions";

const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  username: "", 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        username: action.payload, // Update username in the store when login is successful
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
