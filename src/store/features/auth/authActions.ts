import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayload, googleLoginResponse, loginResponse } from "../../../types/auth";
import { login } from "../../../api/Services/AuthService";

//TODO Should be implemented with backend.
// const backendURL = "http://127.0.0.1:5000";

export const userLogin = createAsyncThunk(
    "auth/login",
    async (loginPayload: LoginPayload): Promise<loginResponse> => {
        const response = await login(loginPayload);
        return response;
    }
);

export const googleLogin = createAction<googleLoginResponse>("auth/google-login");

export const logoutUser = createAction("auth/logout");
