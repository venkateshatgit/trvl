import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

export default store;

