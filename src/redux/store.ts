import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./slice/user.slice";
import TokenReducer from "./slice/token.slice";
import BreadcrumdsReducer from "./slice/breadcrumd.slice";
import QuizReducer from "./slice/quiz.slice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: UserReducer,
  token: TokenReducer,
  quiz: QuizReducer,
  breadcrumd: BreadcrumdsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

//Lấy ra rootstate và appdispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
