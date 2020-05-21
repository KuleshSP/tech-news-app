export const types = {
  SET_CREDENTIALS: 'SET_CREDENTIALS',
  AUTHORIZATION_REQUESTED: 'AUTHORIZATION_REQUESTED',
  AUTHORIZATION_SUCCEED: 'AUTHORIZATION_SUCCEED',
  AUTHORIZATION_FAILED: 'AUTHORIZATION_FAILED',
  LOG_OUT: 'LOG_OUT',
  RESET: 'RESET'
};

export const actions = {
  setCredentials(values) {
    return {
      type: types.SET_CREDENTIALS,
      payload: values
    }
  },
  authorizationRequested() {
    return {
      type: types.AUTHORIZATION_REQUESTED
    };
  },
  authorizationSucceed() {
    return {
      type: types.AUTHORIZATION_SUCCEED
    };
  },
  authorizationFailed() {
    return {
      type: types.AUTHORIZATION_FAILED
    };
  },
  logOut() {
    return {
      type: types.LOG_OUT
    }
  },
  reset() {
    return {
      type: types.RESET
    }
  }
};
