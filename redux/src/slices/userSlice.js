import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    users: [],
};

export const userSlice = createSlice({
    name: "users",
    initialstate,
    reducers:{
        setUsers:(state, action) => {
            state.users = [...state.users, action.payload];
        },
        deleteUser:(state, action) => {
            state.users = state.users.filter(
            (users, index) => index !== action.payload
            );
        }
    },
});

export const { setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;