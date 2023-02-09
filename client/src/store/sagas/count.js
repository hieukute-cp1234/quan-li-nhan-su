import { call, takeEvery } from "redux-saga/effects";
import { DEPARMENTS_COUNT, USERS_COUNT } from "../actionTypes/count";
import * as api from "../../services/count";

function* departments(action) {
  try {
    const res = yield call(api.departmentCount);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* users(action) {
  try {
    const res = yield call(api.userCount);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* countSaga() {
  yield takeEvery(USERS_COUNT, users);
  yield takeEvery(DEPARMENTS_COUNT, departments);
}

export default countSaga;
