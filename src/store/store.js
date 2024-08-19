// import { compose, legacy_createStore, applyMiddleware} from "redux";

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

// import storage from 'redux-persist/lib/storage';
// import {persistStore, persistReducer} from 'redux-persist';


// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user'] //we don't need user because that is taken care by firebase Auth
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = compose(applyMiddleware(...middelWares));

// export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);
// export const persistor = persistStore(store);


const middelWares = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false}).concat(middelWares),
})
