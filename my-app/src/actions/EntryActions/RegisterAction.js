import axios from "axios";

export const POST_REGISTER_START = "POST_REGISTER_START";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE";

export const register = info => {
  return dispatch => {
    dispatch({ type: POST_REGISTER_START });
    console.log(info);
    axios
      .get("")
      .then(res => {
        console.log(res.data);
        //res.data ==> activity
        dispatch({ type: POST_REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem("token", res.data.token);
        console.log("this is the response", res.data);
      })
      .catch(err => console.log(err));
  };
};
