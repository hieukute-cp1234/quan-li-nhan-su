import { takeLatest, call } from "redux-saga/effects";
import {
  FETCH_ALL_STAFF_TYPE,
  FETCH_UPDATE_STAFF_TYPE,
  FETCH_ADD_STAFF_TYPE,
  DELETE_STAFF_TYPE,
} from "../actionTypes/staffType";
import {
  fetchStaffTypes,
  fetchAddStaffTypes,
  fetchUpdateStaffTypes,
  deleteStaffTypes,
} from "../../services/staffTypeService";

function* fetchAllStaffTypes(action) {
  try {
    const res = yield call(fetchStaffTypes);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* updateStaffTypes(action) {
  try {
    const { id, params } = action;
    const res = yield call(fetchUpdateStaffTypes, id, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* addStaffTypes(action) {
  try {
    const { params } = action;
    const res = yield call(fetchAddStaffTypes, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* delStaffTypes(action) {
  try {
    const { id } = action;
    const res = yield call(deleteStaffTypes, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followStaffTypes() {
  yield takeLatest(FETCH_ALL_STAFF_TYPE, fetchAllStaffTypes);
  yield takeLatest(FETCH_UPDATE_STAFF_TYPE, updateStaffTypes);
  yield takeLatest(FETCH_ADD_STAFF_TYPE, addStaffTypes);
  yield takeLatest(DELETE_STAFF_TYPE, delStaffTypes);
}

export default followStaffTypes;
