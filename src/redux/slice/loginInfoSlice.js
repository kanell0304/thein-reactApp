import { createSlice } from '@reduxjs/toolkit'

export const loginInfoSlice = createSlice({
    name: 'loginInfo',
    initialState: {
      loginState: false,
    },
    reducers: {
      login: (state) => {
        state.value = true;
      },
      logout: (state) => {
        state.value = false;
      }
  },
})

export const { login, logout } = loginInfoSlice.actions
export default loginInfoSlice.reducer
