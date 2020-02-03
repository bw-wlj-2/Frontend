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
} from "../actions/EntryActions/RegisterAction";

const initialState = {
  userInfo: {
    username: "",
    password: "",
    id: 1
  }
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

    //Create Exercise Reducer
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
        recipes: action.payload
      };
    case CREATE_EXERCISE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    //Update Exercise Reducer

    default:
      return state;
  }
};

// export default reducers;
