import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./features/session/sessionSlice";
import sourcelistReducer from "./features/sourcelist/sourcelistSlice";

const rootReducer = combineReducers({
  session: sessionReducer,
  sourcelist: sourcelistReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];