import { configureStore } from '@reduxjs/toolkit';
import loginInfoSlice from './slice/loginInfoSlice';

export const store = configureStore(
    {
        reducer: {
            loginInfo: loginInfoSlice
        }
    }
)