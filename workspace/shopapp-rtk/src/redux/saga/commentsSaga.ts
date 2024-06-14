import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { getCommentsSuccessAction, getCommentsErrorAction, getCommentsAction } from "../features/CommentSlice";

// Generator function
function* getCommentsSaga({ payload: id }: PayloadAction<string>) {
  try {
    yield put(getCommentsAction());
    // You can also export the axios call as a function.
    const response: AxiosResponse<any> = yield axios.get(`https://jsonplaceholder.typicode.com/comments`);
    yield put(getCommentsSuccessAction(response.data));
  } catch (error) {
    yield put(getCommentsErrorAction(error));
  }
}

// Generator function
export function* watchGetComment() {
  yield takeLatest("GET_COMMENTS", getCommentsSaga);
}