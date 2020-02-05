import AxiosWithAuth from "../../utils/AxiosWithAuth";

export const CREATE_EXERCISE_START = "CREATE_EXERCISE";
export const CREATE_EXERCISE_SUCCESS = "CREATE_EXERCISE_SUCCESS";
export const CREATE_EXERCISE_FAILURE = "CREATE_EXERCISE_FAILURE";

export const createExercise = exercise => dispatch => {
  dispatch({ type: CREATE_EXERCISE_START });
  console.log("checking exercise", exercise);
  AxiosWithAuth()
    .post("/api/exercises", exercise)
    .then(res => {
      console.log("createExercise post", res.data);
      dispatch({ type: CREATE_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: CREATE_EXERCISE_FAILURE, payload: err });
    });
};
