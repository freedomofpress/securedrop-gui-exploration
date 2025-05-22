import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: { counter: counterReducer },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
