import { createSlice } from '@reduxjs/toolkit'

export const communitySlice = createSlice({
    name: 'communityList',
    initialState: {
      communityList: [{
        id: null,
        title: "",
        content: "",
        write: "",
        viewCount: "",
        
      }]
    },
    reducers: {
      addList: (state, action) => {
        state.isLoggedIn = true;
        state.user.id = action.payload.id;
        state.user.account = action.payload.account;
      },
      deleteList: (state) => {
        state.isLoggedIn = false;
        state.user.id = null;
        state.user.account = "";
      },
      editList: (state) => {
        state.isLoggedIn = false;
        state.user.id = null;
        state.user.account = "";
      }
  },
})

export const { login, logout } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;
