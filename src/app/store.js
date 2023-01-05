import { configureStore } from '@reduxjs/toolkit'

import newsReducer from '../Slices/NewsSlice';
import bookmarksReducer from '../Slices/BookmarksSlice';
import authReducer from '../Slices/AuthSlice';



const store =  configureStore({
  reducer: {
    news: newsReducer,
    bookmarks: bookmarksReducer,
    auth: authReducer
  },
})

export default store;