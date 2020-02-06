/* jshint esversion: 6 */
import {
  POST_REGISTER_START,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE
} from "../actions/EntryActions/RegisterAction";

import {
  CREATE_EXERCISE_START,
  CREATE_EXERCISE_SUCCESS,
  CREATE_EXERCISE_FAILURE
} from "../actions/UserActions/CreateExercise";

// import {
//   FETCH_USER_START,
//   FETCH_USER_SUCCESS,
//   FETCH_USER_FAILURE
// } from "../actions/UserActions/FetchUser";

// import {
//   FETCH_EXERCISE_START,
//   FETCH_EXERCISE_SUCCESS,
//   FETCH_EXERCISE_FAILURE
// } from "../actions/UserActions/FetchExercises";

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actions/UserActions/FetchUser";

import {
  FETCH_EXERCISE_START,
  FETCH_EXERCISE_SUCCESS,
  FETCH_EXERCISE_FAILURE
} from "../actions/UserActions/FetchExercises";

const initialState = {
  userInfo: {
    username: "",
    password: "",
    id: 1
  },
  userExercises: [],
  users: [],
  exercises: [],
  isLoading: false,
  error: null,
  editing: false
};

export const reducers = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    //Register Reducer

    case POST_REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: ""
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: ""
      };

    //FETCH USER

    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //FETCH Exercises Reducer
    case FETCH_EXERCISE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_EXERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userExercises: action.payload,
        error: ""
      };
    case FETCH_EXERCISE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    //Create Exercises
    case CREATE_EXERCISE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        userExercises: action.payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //FETCH USER

    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_EXERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userExercises: action.payload,
        error: ""
      };
    case FETCH_EXERCISE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    //Create Exercises
    case CREATE_EXERCISE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userExercises: action.payload,
        error: ""
      };
    case CREATE_EXERCISE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// export default reducers;
