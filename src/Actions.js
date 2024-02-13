export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Simulate fetching user data from local JSON file
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      const users = data;

      // Check if the credentials match any user in the JSON data
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
