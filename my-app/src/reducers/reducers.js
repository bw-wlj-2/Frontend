/* jshint esversion: 6 */
import {
  POST_REGISTER_START,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE
} from "../actions/EntryActions/RegisterAction";

const initialState = {
  userInfo: {
    username: "",
    password: "",
    full_name: "",
    location: "",
    id: 1
  }
};

const reducers = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default reducers;
