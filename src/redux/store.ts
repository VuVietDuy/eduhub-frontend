import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

//Lấy ra rootstate và appdispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
