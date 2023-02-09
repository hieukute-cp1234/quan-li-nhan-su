import { SET_PROFILE } from "../actionTypes/auth";

const initialState = {
  profile: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
