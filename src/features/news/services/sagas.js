import { put, call, all, takeEvery, select } from "redux-saga/effects";

import api from './api.js';
import { actions, types } from "./actionsCreators.js";
import { getNewsState } from './selectors.js';
import { getAuthorizationState } from 'features/authorization/services/selectors.js';
import history from 'features/_main/app/history.js';

function* fetchData(action) {
  const { page } = action.payload;
  const { pageSize } = yield select(getNewsState);
  const { isAuthorized } = yield select(getAuthorizationState);

  if (isAuthorized) {
    try {
      const response = yield call(api.getNews, {
        pageSize, page
      });

      if (response.status !== 'error') {
        yield put(actions.mountPageSucceed(response.data));
      } else {
        throw new Error(response.message)
      }

    } catch (e) {
      console.error(e);

      yield put(actions.mountPageFailed());
    }
  } else {
    yield put(actions.mountPageFailed());

    history.push('/');
  }
};

export default function* () {
  yield all([
    takeEvery(types.MOUNT_PAGE_REQUESTED, fetchData),
    takeEvery(types.RELOAD, fetchData)
  ]);
};
