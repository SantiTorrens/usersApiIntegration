import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeUser, getUsersByPage } from "../../../api/Services/UsersService";

export const getUsers = createAsyncThunk("users/list", async (page: number) => {
    const response = await getUsersByPage(page);
    return response;
});


export const deleteUser = createAsyncThunk("users/delete", async (userId: number) => {
  const response = await removeUser(userId);

  return response;

})