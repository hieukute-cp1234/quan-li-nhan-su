import { takeLatest, call } from "redux-saga/effects";
import {
  FETCH_ADD_SPECIALIZE,
  FETCH_ALL_SPECIALIZE,
  FETCH_UPDATE_SPECIALIZE,
  DELETE_SPECIALIZE,
} from "../actionTypes/specialize";
import {
  fetchAllSpecializes,
  fetchAddSpecialize,
  fetchUpdateSpecialize,
  deleteSpecialize,
} from "../../services/specializeService";

function* allSpecializes(action) {
  try {
    const res = yield call(fetchAllSpecializes);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* addSpecialize(action) {
  try {
    const { params } = action;
    const res = yield call(fetchAddSpecialize, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* updateSpecialize(action) {
  try {
    const { id, params } = action;
    const res = yield call(fetchUpdateSpecialize, id, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* delSpecialize(action) {
  try {
    const { id } = action;
    const res = yield call(deleteSpecialize, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followSpecialize() {
  yield takeLatest(FETCH_ALL_SPECIALIZE, allSpecializes);
  yield takeLatest(FETCH_ADD_SPECIALIZE, addSpecialize);
  yield takeLatest(FETCH_UPDATE_SPECIALIZE, updateSpecialize);
  yield takeLatest(DELETE_SPECIALIZE, delSpecialize);
}

export default followSpecialize;
