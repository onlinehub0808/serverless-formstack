import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithMW = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMW(persistedReducer);
export const persistor = persistStore(store);