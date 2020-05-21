import * as R from "ramda";
import { types } from "./actionsCreators.js";

const initialState = {
  articles: [],
  totalResults: 0,
  totalPages: 0,
  pageSize: 5,
  pending: false,
  error: false
};
const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.MOUNT_PAGE_REQUESTED:
      return R.mergeRight(state, {
        pending: true,
        error: false
      });

    case types.MOUNT_PAGE_SUCCEED:
      const { articles, totalResults } = payload.data;

      return R.mergeRight(state, {
        articles,
        totalResults,
        totalPages: totalResults / state.pageSize,
        pending: false
      });

    case types.MOUNT_PAGE_FAILED:
      return R.mergeRight(state, {
        pending: false,
        error: true
      });

    case types.UNMOUNT_PAGE:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
