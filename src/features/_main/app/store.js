import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { connect } from "react-redux";
import { persistStore } from 'redux-persist';

import Page from "../components/Page.jsx";
import { reducers } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const ConnectedApp = connect(state => state)(Page);

export const persistor = persistStore(store);

export default store;
