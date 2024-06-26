import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
    removeUser,
    getUsersByPage,
    getUserById,
    updateUser,
    createUser,
} from "../../../api/Services/UsersService";
import { apiUser, createUserPayload } from "../../../types/apiUsers";

export const getUsers = createAsyncThunk("users/list", async (page: number) => {
    const response = await getUsersByPage(page);
    return response;
});

export const deleteUser = createAsyncThunk(
    "users/delete",
    async (userId: number) => {
        const response = await removeUser(userId);

        return response;
    }
);

export const updatePagination = createAction<number>("updatePagination");

export const fetchUserById = createAsyncThunk(
    "users/getUserById",
    async (userId: number): Promise<apiUser | void> => {
        const response = await getUserById(userId);
        return response;
    }
);

export const setSelectedUser = createAction<number>("users/setSelectedUser");

export const unSetSelectedUser = createAction("users/unSetSelectedUser");

export const updateUserAction = createAsyncThunk(
    "users/update",
    async (user: apiUser): Promise<apiUser | void> => {
        const response = await updateUser(user);
        return response;
    }
);

export const toggleCreateModal = createAction("users/toggleCreateModal");

export const createUserAction = createAsyncThunk(
    "users/create",
    async (user: createUserPayload): Promise<apiUser | void> => {
        const response = await createUser(user);
        return response;
    }
);
