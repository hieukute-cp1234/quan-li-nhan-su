import { all, call } from "redux-saga/effects";
import department from "./department";
import authSaga from "./authSaga";
import userSaga from "./userSaga";
import staffTypeSaga from "./staffTypeSaga";
import levelSaga from "./levelSaga";
import specializeSaga from "./specializeSaga";
import roleSaga from "./roleSaga";
import countSaga from "./count";
import wage from "./wage";

function* rootSaga() {
  yield all([
    call(authSaga),
    call(department),
    call(userSaga),
    call(staffTypeSaga),
    call(levelSaga),
    call(specializeSaga),
    call(roleSaga),
    call(countSaga),
    call(wage),
  ]);
}

export default rootSaga;
