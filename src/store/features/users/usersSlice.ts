import { createSlice } from "@reduxjs/toolkit";
import {
    deleteUser,
    fetchUserById,
    getUsers,
    setSelectedUser,
    unSetSelectedUser,
    updatePagination,
    updateUserAction,
} from "./usersActions";
import { UsersApiResponse, UsersState, apiUser } from "../../../types/apiUsers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logoutUser } from "../auth/authActions";
import { toast } from "sonner";

const initialState: UsersState = {
    loading: false,
    fetched: false,
    data: {
        users: [],
        currentPage: 1,
        perPage: 5,
        total: 0,
        totalPages: 0,
        fetchedPages: [],
    },
    selectedUser: null,
    showEditModal: false,
    error: null,
    success: false,
};

const persistConfig = {
    key: "users",
    storage: storage,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                const data = payload as UsersApiResponse;
                const mergedUsers = [...state.data.users, ...data.data];
                const isEqual = (obj1: apiUser, obj2: apiUser) => {
                    return JSON.stringify(obj1) === JSON.stringify(obj2);
                };

                // Filter out duplicate objects
                const uniqueArray = mergedUsers.filter((item, index, array) => {
                    return (
                        array.findIndex((obj) => isEqual(obj, item)) === index
                    );
                });

                return {
                    data: {
                        users: uniqueArray,
                        currentPage: data.page,
                        perPage: 5,
                        total: data.total,
                        totalPages: data.total_pages,
                        fetchedPages: state.data.fetchedPages.includes(
                            data.page
                        )
                            ? state.data.fetchedPages
                            : [...state.data.fetchedPages, data.page],
                    },
                    loading: false,
                    fetched: true,
                    error: false,
                    selectedUser: null,
                    showEditModal: false,
                    success: true,
                };
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.loading = false;
                state.fetched = false;
                state.error = payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                console.log("🚀 ~ .addCase ~ payload:", payload);
                state.data.users = state.data.users.filter(
                    (user: apiUser) => user.id !== payload
                );
                toast.success("User deleted successfully");
            })
            .addCase(deleteUser.rejected, (state) => {
                toast.error("There was an error deleting");
                state.loading = false;
            })
            .addCase(updatePagination, (state, { payload }) => {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        currentPage: payload,
                    },
                };
            })
            .addCase(fetchUserById.fulfilled, (state, { payload }) => {
                const user = payload as apiUser;
                toast.success(`User ${user.id} fetched successfully`);
                state.selectedUser = user;
                state.showEditModal = false;
            })
            .addCase(fetchUserById.rejected, (state) => {
                toast.success("There was an error fetching");
                state.selectedUser = null;
                state.showEditModal = false;
            })
            .addCase(updateUserAction.fulfilled, (state, { payload }) => {
                toast.success("User updated successfully");
                const newUser = payload as apiUser;
                state.selectedUser = newUser;
                const index = state.data.users.findIndex(
                    (user) => user.id === newUser.id
                );
                if (index !== -1) {
                    state.data.users[index] = {
                        ...state.data.users[index],
                        ...newUser,
                    };
                }
            })
            .addCase(setSelectedUser, (state, { payload }) => {
                state.selectedUser = state.data.users.find(
                    (user) => user.id === payload
                ) as apiUser;
                state.showEditModal = true;
            })
            .addCase(unSetSelectedUser, (state) => {
                state.selectedUser = null;
                state.showEditModal = false;
            })
            .addCase(logoutUser, () => {
                return initialState;
            });
    },
});
const persistedUsersSlice = persistReducer(persistConfig, usersSlice.reducer);

export default persistedUsersSlice;
