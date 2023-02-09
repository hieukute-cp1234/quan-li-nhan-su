import { takeLatest, call } from "redux-saga/effects";
import {
  FETCH_ALL_ROLE,
  FETCH_UPDATE_ROLE,
  FETCH_ADD_ROLE,
  DEELETE_ROLE,
} from "../actionTypes/role";
import {
  fetchAllRoles,
  fetchUpdateRole,
  fetchAddRole,
  deleteRole,
} from "../../services/roleService";

function* allRoles(action) {
  try {
    const res = yield call(fetchAllRoles);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* updateRole(action) {
  try {
    const { id, params } = action;
    const res = yield call(fetchUpdateRole, id, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* addRole(action) {
  try {
    const { params } = action;
    const res = yield call(fetchAddRole, params);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* delRole(action) {
  try {
    const { id } = action;
    const res = yield call(deleteRole, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followRole() {
  yield takeLatest(FETCH_ALL_ROLE, allRoles);
  yield takeLatest(FETCH_UPDATE_ROLE, updateRole);
  yield takeLatest(FETCH_ADD_ROLE, addRole);
  yield takeLatest(DEELETE_ROLE, delRole);
}

export default followRole;
