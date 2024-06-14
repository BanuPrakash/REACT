import { all, fork } from "redux-saga/effects";
import { watchGetComment } from "./commentsSaga";

const rootSaga = function* () {
  yield all([
     fork(watchGetComment),
    // Other forks
  ]);
};

export default rootSaga;