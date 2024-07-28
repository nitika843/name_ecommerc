import { createSlice } from '@reduxjs/toolkit'


export const userdetail = createSlice({
    name:"userdetail",

    initialState:{
        users: [] ,
        loading :false,
        error : null,
    },
});


export default  userdetail.reducer;