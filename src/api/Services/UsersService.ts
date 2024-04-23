import { AxiosResponse } from "axios";
import {
    UsersApiResponse,
    apiUser,
    apiUserResponse,
} from "../../types/apiUsers";
import axiosInstance from "../../utils/axios";

const apiUrl = import.meta.env.VITE_REQRES_API_URL as string;

export async function getUsersByPage(
    page: number
): Promise<UsersApiResponse | null> {
    try {
        const response: AxiosResponse = await axiosInstance.get(
            apiUrl + `/users?page=${page}`
        );
        response.data.data = response.data.data.map(
            (user: apiUserResponse): apiUser => {
                return {
                    avatar: user.avatar,
                    id: user.id,
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name,
                };
            }
        );
        return response.data;
    } catch (error) {
        console.log("🚀 ~ error:", error);
        return null;
    }
}

export async function removeUser(userId: number): Promise<number | void> {
    try {
        await axiosInstance.delete(apiUrl + `/users/${userId}`);
        return userId;
    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error);
        return;
    }
}
