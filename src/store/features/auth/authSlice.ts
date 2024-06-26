import { createSlice } from "@reduxjs/toolkit";
import { googleLogin, userLogin } from "./authActions";
import { AuthState } from "../../../types/store";
import { persistReducer } from "redux-persist";
import { logoutUser } from "./authActions";
import storage from "redux-persist/lib/storage";
import { generateToken } from "../../../utils/generateToken";

const initialState: AuthState = {
    loading: false,
    userInfo: undefined,
    userToken: undefined,
    error: null,
    success: false,
};
const persistConfig = {
    key: "auth",
    storage: storage,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload.user;
                state.userToken = payload.user.userToken;
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(logoutUser, () => {
                return initialState;
            })
            .addCase(googleLogin, (state, { payload }) => {
                const token = generateToken();
                state.loading = true;
                state.userToken = token;
                state.userInfo = {
                    username: payload.name,
                    email: payload.email,
                    imageUrl: payload.picture,
                    userToken: token,
                };
            });
    },
});

const persistedAuthSlice = persistReducer(persistConfig, authSlice.reducer);

export default persistedAuthSlice;
