import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./Actions";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  isLoggedIn: false,
  username: "",
  isSignedUp:false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
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
        username: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        isSignedUp: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: "",
        isLoggedIn: false,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: false,
        isAuthenticated: false,
        isSignedUp: true,
      };
    default:
      return state;
  }
};

export default authReducer;
