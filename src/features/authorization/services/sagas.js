import { put, call, all, takeEvery, delay } from "redux-saga/effects";
import { actions, types } from "./actionsCreators.js";
import history from 'features/_main/app/history.js';

function* authorization() {
  try {
    yield delay(1000);
    yield call(() => {
      return {
        data: 'authorization_succeeded'
      }
    });

    yield put(actions.authorizationSucceed());
  } catch (error) {
    console.error(error);
    yield put(actions.authorizationFailed());
  }
};

function redirect() {
  history.push('/news/1');
};

function logOut() {
  history.push('/');
}

export default function* () {
  yield all([
    takeEvery(types.AUTHORIZATION_REQUESTED, authorization),
    takeEvery(types.AUTHORIZATION_SUCCEED, redirect),
    takeEvery(types.LOG_OUT, logOut)
  ]);
};
