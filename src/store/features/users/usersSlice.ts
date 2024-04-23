import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, getUsers } from "./usersActions";
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
        perPage: 6,
        total: 0,
        totalPages: 0,
        fetchedPages: [],
    },
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

                return {
                    ...state,
                    data: {
                        ...state.data,
                        users: data.data,
                        currentPage: data.page,
                        perPage: data.per_page,
                        total: data.total,
                        totalPages: data.total_pages,
                        fetchedPages: [...state.data.fetchedPages, data.page],
                    },
                    loading: false,
                    fetched: true,
                    success: true,
                };
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.loading = false;
                state.fetched = false;
                state.error = payload;
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                console.log("🚀 ~ .addCase ~ payload:", payload);
                const userId = 1;
                state.data.users = state.data.users.filter(
                    (user: apiUser) => user.id !== userId
                );
                toast.success("User deleted successfully");
            })
            .addCase(logoutUser, () => {
                return initialState;
            });
    },
});
const persistedUsersSlice = persistReducer(persistConfig, usersSlice.reducer);

export default persistedUsersSlice;
