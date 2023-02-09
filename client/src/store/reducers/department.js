import * as types from "../actionTypes/department";

const initialState = {
  listDepartments: {},
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA_DEPARTMENT:
      return { ...state, listDepartments: action.data };
    default:
      return state;
  }
};

export default departmentReducer;
