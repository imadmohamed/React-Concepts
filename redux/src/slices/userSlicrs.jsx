import { createSlice } from "@reduxjs/toolkit"

const initialSlices = {
    user: [],
};

export const userSlice = createSlice({
    name: "users",
    initialSlices,
    reducers:{
        setUsers:(state, action) => {
            state.users = [...state.users, action.payload];
        },
        deleteUser:(state, action) => {
            state.users = state.users.filter(
            (user, index) => index !== action.payload
            );
        }
    },
});

export const { setUsers, deleteUser } = userSlice.actions;