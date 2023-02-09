import { takeLatest, call } from "redux-saga/effects";
import {
  FETCH_LIST_WAGE,
  FETCH_LIST_WAGE_BY_ID,
  CREATE_WAGE,
  SEND_MAIL_SALARY,
  UPDATE_WAGE,
  DELETE_WAGE,
  SEND_MAIL_ALL,
} from "../actionTypes/wage";
import {
  fetchWage,
  fetchWageById,
  createWage,
  sendMailSalary,
  updateWage,
  delWage,
  sendMailAll,
} from "../../services/wage";

function* fetchAllWage(action) {
  try {
    const res = yield call(fetchWage);
    const { data } = res.data;
    action.onSuccess(data);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* getWageById(action) {
  try {
    const { id } = action;
    const res = yield call(fetchWageById, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* addWage(action) {
  try {
    const { data } = action;
    const res = yield call(createWage, data);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* sendMail(action) {
  try {
    const { id } = action;
    const res = yield call(sendMailSalary, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* updateSalary(action) {
  try {
    const { data, id } = action;
    const res = yield call(updateWage, id, data);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.error);
  }
}

function* deleteSalary(action) {
  try {
    const { id } = action;
    const res = yield call(delWage, id);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* sendMailAllSalary(action) {
  try {
    const res = yield call(sendMailAll, action.data);
    const { message } = res.data;
    action.onSuccess(message);
  } catch (error) {
    const { data } = error.response;
    action.onError(data.message);
  }
}

function* followWage() {
  yield takeLatest(FETCH_LIST_WAGE, fetchAllWage);
  yield takeLatest(FETCH_LIST_WAGE_BY_ID, getWageById);
  yield takeLatest(CREATE_WAGE, addWage);
  yield takeLatest(SEND_MAIL_SALARY, sendMail);
  yield takeLatest(UPDATE_WAGE, updateSalary);
  yield takeLatest(DELETE_WAGE, deleteSalary);
  yield takeLatest(SEND_MAIL_ALL, sendMailAllSalary);
}

export default followWage;
