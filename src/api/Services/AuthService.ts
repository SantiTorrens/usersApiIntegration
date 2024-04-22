/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginPayload, loginResponse } from "../../types/auth";
import axiosInstance from "../../utils/axios";

export async function login({
    email,
    password,
}: LoginPayload): Promise<loginResponse> {
    const token =
        Math.random().toString(36).substr(2) +
        Math.random().toString(36).substr(2);

    // DEFINED ONLY FOR MOCK
    const data = {
        success: true,
        user: {
            userId: 1,
            email: email,
            username: "Testing User",
            imageUrl: "http://example.com",
            userToken: token,
        },
    };

    try {
        const response = await axiosInstance.post("/login", {
            email: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.log("🚀 ~ error:", error);
        // RETURNS THE MOCKED DATA
        return data;
    }
}
