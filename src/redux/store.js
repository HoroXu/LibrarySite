import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as channelInfoArr from "./Main/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...channelInfoArr,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
