import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./features/session/sessionSlice";
import sourcelistReducer from "./features/sourcelist/sourcelistSlice";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    sourcelist: sourcelistReducer,
   },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
