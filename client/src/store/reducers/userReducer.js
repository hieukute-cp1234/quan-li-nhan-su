import * as types from "../actionTypes/user";
import { WAGE_USER } from "../actionTypes/count";

let initialState = {
  listPM: [],
  listEmployee: [],
  userById: 1,
  wage: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST_PM:
      return { ...state, listPM: action.data };
    case types.SET_LIST_USERS:
      return { ...state, listEmployee: action.data };
    case types.SET_USER_BY_ID:
      return { ...state, userById: action.data };
    case WAGE_USER:
      return { ...state, wage: [...state.wage, action.data] };
    default:
      return state;
  }
};

export default userReducer;
