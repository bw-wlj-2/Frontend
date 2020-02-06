import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUser = id => dispatch => {
  dispatch({ type: FETCH_USER_START });

  AxiosWithAuth()
    .get(`/api/user/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};
