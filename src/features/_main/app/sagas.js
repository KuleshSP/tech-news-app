import { all } from "redux-saga/effects";

import autorizationSaga from 'features/authorization/services/sagas.js';
import newsSaga from 'features/news/services/sagas.js';

export default function* rootSaga() {
  yield all([
    autorizationSaga(),
    newsSaga()
  ]);
};
