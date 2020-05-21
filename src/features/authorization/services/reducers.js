import * as R from "ramda";
import { types } from "./actionsCreators.js";
import { persistReducer } from 'redux-persist';

import storageSession from 'redux-persist/lib/storage';

const initialState = {
  userName: '',
  password: '',
  pending: false,
  isAuthorized: false,
  error: false
};
const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.SET_CREDENTIALS:
      const { userName, password } = payload;

      return R.mergeRight(state, {
        userName,
        password
      });

    case types.AUTHORIZATION_REQUESTED:
      return R.mergeRight(state, {
        isAuthorized: false,
        pending: true,
        error: false
      });

    case types.AUTHORIZATION_SUCCEED:
      return R.mergeRight(state, {
        isAuthorized: true,
        pending: false
      });

    case types.AUTHORIZATION_FAILED:
      return R.mergeRight(state, {
        pending: false,
        error: true
      });

    case types.LOG_OUT:
      return initialState;

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default persistReducer(
  {
    key: 'authorization_state',
    storage: storageSession
  },
  reducer
);
