import { compose, legacy_createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'] //we don't need user because that is taken care by Google Auth
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middelWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middelWares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

