import { call, takeEvery, put } from "redux-saga/effects";
import { LOGIN, LOGOUT, GET_ME, LOGIN_WITH_GOOGLE } from "../actionTypes/auth";
import * as api from "../../services/authService";
import { setProfile } from "../actions/authActions";

function* login(action) {
  try {
    const res = yield call(api.login, action.data);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* loginWithGoogle(action) {
  try {
    const res = yield call(api.loginWithGoogle, action.data);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* logout(action) {
  try {
    const res = yield call(api.logout);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* me(action) {
  try {
    const res = yield call(api.getMe);
    yield put(setProfile(res.data.data));
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(GET_ME, me);
  yield takeEvery(LOGIN_WITH_GOOGLE, loginWithGoogle);
}

export default authSaga;
