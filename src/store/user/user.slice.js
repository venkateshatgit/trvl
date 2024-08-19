import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
    currUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrUser(state, action){
            state.currUser = action.payload;
        }
    }
})

export const {setCurrUser} = userSlice.actions;
export const userReducer = userSlice.reducer;