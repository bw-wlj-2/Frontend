import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const FETCH_EXERCISE_START = "FETCH_CHEF_RECIPE_START";
export const FETCH_EXERCISE_SUCCESS = "FETCH_CHEF_RECIPE_SUCCESS";
export const FETCH_EXERCISE_FAILURE = "FETCH_CHEF_RECIPE_FAILURE";

export const fetchExercises = id => dispatch => {
  dispatch({ type: FETCH_EXERCISE_START });

  AxiosWithAuth()
    .get(`/api/exercises`)
    .then(res => {
      dispatch({ type: FETCH_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: FETCH_EXERCISE_FAILURE, payload: error }));
};
