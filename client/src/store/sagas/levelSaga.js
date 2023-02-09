import { takeLatest, call } from "redux-saga/effects";
import {
  FETCH_ALL_LEVEL,
  FETCH_UPDATE_LEVEL,
  FETCH_ADD_LEVEL,
  DELETE_LEVEL,
} from "../actionTypes/level";
import {
  fetchAllLevels,
  fetchUpdateLevel,
  fetchAddLevel,
  deleteLevel,
} from "../../services/levelService";

function* allLevels(action) {
  try {
    const res = yield call(fetchAllLevels);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* updateLevel(action) {
  try {
    const { id, params } = action;
    const res = yield call(fetchUpdateLevel, id, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* addLevel(action) {
  try {
    const { params } = action;
    const res = yield call(fetchAddLevel, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* delLevel(action) {
  try {
    const { id } = action;
    const res = yield call(deleteLevel, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followLevel() {
  yield takeLatest(FETCH_ALL_LEVEL, allLevels);
  yield takeLatest(FETCH_UPDATE_LEVEL, updateLevel);
  yield takeLatest(FETCH_ADD_LEVEL, addLevel);
  yield takeLatest(DELETE_LEVEL, delLevel);
}

export default followLevel;
