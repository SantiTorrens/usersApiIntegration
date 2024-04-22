import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: null,
    success: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    // extraReducers: {},
});

export default usersSlice.reducer;
