import { configureStore } from '@reduxjs/toolkit';
import loginInfoSlice from './slice/loginInfoSlice';
import postSlice from './slice/postSlice';

const loadState = (key) => {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : undefined;
    } catch {
        return undefined;
    }
}

export const store = configureStore(
    {
        reducer: {
            loginInfo: loginInfoSlice,
            postList: postSlice
        },
        preloadedState: {
            loginInfo: loadState('loginInfo'),
            postList: loadState('postList')
        }
    }
)

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('loginInfo', JSON.stringify(state.loginInfo));
    localStorage.setItem('postList', JSON.stringify(state.postList));
})
