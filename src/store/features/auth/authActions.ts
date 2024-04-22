import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginPayload } from "../../../types/auth";
import { login } from "../../../api/Services/AuthService";

//TODO Should be implemented with backend.
// const backendURL = "http://127.0.0.1:5000";

export const userLogin = createAsyncThunk(
    "auth/login",
    async (loginPayload: LoginPayload) => {
        const response = await login(loginPayload);
        return response;
    }
);

export const logoutUser = createAction("auth/logout");
