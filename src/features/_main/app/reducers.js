import { combineReducers } from "redux";

import authorizationReducers from 'features/authorization/services/reducers.js';
import newsReducers from 'features/news/services/reducers.js';

export const reducers = combineReducers({
  authorization_state: authorizationReducers,
  news_state: newsReducers
});
