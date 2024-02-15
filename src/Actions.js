export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => ({
  type: LOGOUT,
});

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      const users = data;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        dispatch(loginSuccess(user.username));
      } else {
        dispatch(loginFailure("Invalid email or password"));
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred. Please try again later."));
    }
  };
};

export const signupUser = (userData) => {
  return async (dispatch) => {
    dispatch(signupRequest());

    try {
      // Perform your signup API call here
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to signup");
      }

      // Assuming the server returns a success response upon successful signup
      dispatch(signupSuccess());
    } catch (error) {
      dispatch(signupFailure("Failed to signup. Please try again later."));
    }
  };
};
