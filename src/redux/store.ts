import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./slice/user.slice";
import TokenReducer from "./slice/token.slice";
import TestReducer from "./slice/test.slice";
import { QueryStatus } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: UserReducer,
  token: TokenReducer,
  test: TestReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

//Lấy ra rootstate và appdispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
