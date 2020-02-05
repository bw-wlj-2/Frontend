import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const POST_REGISTER_START = "POST_REGISTER_START";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE";

export const register = info => {
  return dispatch => {
    dispatch({ type: POST_REGISTER_START });
    console.log(info);
    AxiosWithAuth()
      .post(
        "https://weight-lifting-backend.herokuapp.com/api/user/register",
        info
      )
      .then(res => {
        console.log(res);

        dispatch({ type: POST_REGISTER_SUCCESS, payload: res.data });
        // localStorage.setItem("token", res.data.token);
        console.log("response", res);
      })
      .catch(err => console.log(err.res));
  };
};
