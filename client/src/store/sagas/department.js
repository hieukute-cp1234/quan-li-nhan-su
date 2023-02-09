import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  fetchDepartments,
  addDepartments,
  updateDepartments,
  deleteDepartment,
  showDetailDepartment,
} from "../../services/departments";
import {
  FETCH_DATA_DEPARTMENT,
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  SHOW_DETAIL_DEPARTMENT,
} from "../actionTypes/department";
import { setDataDepartment } from "../actions/department";

function* fetchDataDepartment(action) {
  try {
    const res = yield call(fetchDepartments);
    const { data } = res.data;
    yield put(setDataDepartment(data.data));
    action.onSuccess(data.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data);
  }
}

function* addNewDepartment(action) {
  try {
    const { params } = action;
    const res = yield call(addDepartments, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* updateDepartment(action) {
  try {
    const { id, params } = action;
    const res = yield call(updateDepartments, id, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* delDepartment(action) {
  try {
    const { id } = action;
    const res = yield call(deleteDepartment, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* detailDepartment(action) {
  try {
    const { id } = action;
    const res = yield call(showDetailDepartment, id);
    action.onSuccess(res.data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followCategory() {
  yield takeLatest(FETCH_DATA_DEPARTMENT, fetchDataDepartment);
  yield takeLatest(ADD_DEPARTMENT, addNewDepartment);
  yield takeLatest(UPDATE_DEPARTMENT, updateDepartment);
  yield takeLatest(DELETE_DEPARTMENT, delDepartment);
  yield takeLatest(SHOW_DETAIL_DEPARTMENT, detailDepartment);
}

export default followCategory;
