import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'postList',
    initialState: {
      postList: []
    },
    reducers: {
      addPost: (state, action) => {
        const lastPost = state.postList[state.postList.length - 1];
        state.postList.push({
          id: lastPost ? lastPost.id + 1 : 1,
          title: action.payload.title,
          content: action.payload.content,
          writer: action.payload.writer,
          viewCount: 0,
          date: Date.now()
        });
      },
      deletePost: (state, action) => {
        state.postList = state.postList.filter(post => post.id !== action.payload.id);
      },
      editPost: (state, action) => {
        const existingPost = state.postList.find(post => post.id === action.payload.id);

        // 게시글이 존재한다면
        if (existingPost) {
            existingPost.title = action.payload.title;
            existingPost.content = action.payload.content;
        }
      },
      increaseViewCount: (state, action) => {
        const existingPost = state.postList.find(post => post.id === action.payload.id);

        if (existingPost) {
            existingPost.viewCount += 1;
        }
      }
  },
})

export const { addPost, deletePost, editPost, increaseViewCount } = postSlice.actions;
export default postSlice.reducer;
