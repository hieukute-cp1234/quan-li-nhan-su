import { combineReducers } from "redux";
import authReducer from "./authReducer";
import department from "./department";
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  department: department,
  user: userReducer,
});

export default rootReducer;
