import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const POST_LOGIN_START = "POST_LOGIN_START";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

export const login = info => dispatch => {
  dispatch({ type: POST_LOGIN_START });
  console.log(info);
  AxiosWithAuth()
    .post("/api/auth/login", info)
    .then(res => {
      dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      console.log("this is the response", res.data);
    })
    .catch(error => {
      dispatch({ type: POST_LOGIN_FAILURE, payload: error.res });
    });
};
