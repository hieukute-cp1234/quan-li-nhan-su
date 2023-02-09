import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchListPM,
  fetchListUser,
  addUser,
  updateUser,
  fetchUserById,
} from "../../services/userSevice";
import {
  FETCH_LIST_PM,
  FETCH_LIST_USERS,
  ADD_USERS,
  UPDATE_USERS,
  FETCH_USER_BY_ID,
} from "../actionTypes/user";
import { setListPM, setListUser } from "../actions/userAction";

function* fetchAllPM(action) {
  try {
    const res = yield call(fetchListPM);
    const { data } = res;
    yield put(setListPM(data.data));
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* fetchListEmployee(action) {
  try {
    const res = yield call(fetchListUser);
    const { data } = res.data;
    yield put(setListUser(data.data));
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* addEmployee(action) {
  try {
    const res = yield call(addUser, action.data);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* updateEmployee(action) {
  try {
    const res = yield call(updateUser, action.id, action.data);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* getUserById(action) {
  try {
    const res = yield call(fetchUserById, action.id);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* followUserSaga() {
  yield takeLatest(FETCH_LIST_PM, fetchAllPM);
  yield takeLatest(FETCH_LIST_USERS, fetchListEmployee);
  yield takeLatest(ADD_USERS, addEmployee);
  yield takeLatest(UPDATE_USERS, updateEmployee);
  yield takeLatest(FETCH_USER_BY_ID, getUserById);
}

export default followUserSaga;
