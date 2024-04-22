/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginPayload, loginResponse } from "../../types/auth";
import axiosInstance from "../../utils/axios";
import { generateToken } from "../../utils/generateToken";

export async function login({
    email,
    password,
}: LoginPayload): Promise<loginResponse> {

    // DEFINED ONLY FOR MOCK
    const data = {
        success: true,
        user: {
            email: email,
            username: "Testing User",
            imageUrl: null,
            userToken: generateToken(),
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
