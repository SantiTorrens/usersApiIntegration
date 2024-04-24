import { AxiosResponse } from "axios";
import { UsersApiResponse, apiUser } from "../../types/apiUsers";
import axiosInstance from "../../utils/axios";

const apiUrl = import.meta.env.VITE_REQRES_API_URL as string;

export async function getUsersByPage(
    page: number
): Promise<UsersApiResponse | null> {
    try {
        const response: AxiosResponse = await axiosInstance.get(
            apiUrl + `/users?page=${page}`
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

export async function getUserById(userId: number): Promise<apiUser | void> {
    try {
        const response: AxiosResponse = await axiosInstance.get(
            apiUrl + `/users/${userId}`
        );
        console.log("🚀 ~ getUserById ~ response:", response)
        return response.data.data as apiUser;
    } catch (error) {
        console.log("🚀 ~ getUserById ~ error:", error);
        return;
    }
}

export async function updateUser(user: apiUser): Promise<apiUser | void> {

  try {
    const response: AxiosResponse = await axiosInstance.patch(apiUrl + `/users/${user.id}`,{
      first_name: user.first_name,
      last_name: user.last_name,
      job: user.job
    });
    return {
      ...user,
      ...response.data.data as apiUser
    }
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error)
    return;
  }
}
