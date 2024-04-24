import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "./features/auth/authSlice";
import usersReducer from "./features/users/usersSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "users"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
