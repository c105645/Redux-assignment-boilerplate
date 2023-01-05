import { createSlice } from '@reduxjs/toolkit'
import { newsByCategory } from '../Services/NewsService';


const initialState = {
    news: [],
    status: 'idle',
    error: null,
}

export const fetchNews  = () => async (dispatch) => {
    dispatch(NewsLoading());
try { 
    const response = await newsByCategory();
    dispatch(newsLoaded(response.articles));
} catch (err) {
   dispatch(NewsLoadingFailed(err.message));
}
}


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsLoaded(state, action) {
            const news = action.payload.filter(news => news.title.indexOf("%") === -1);
            return {
                ...state,
                status: "idle",
                error: null,
                news: [...news]
            }
        },
        NewsLoadingFailed(state, action) {
            const error = action.payload;
            return {
                ...state,
                status: "idle",
                error: error,
            }
        },
        NewsLoading(state, action) {
            return {
                ...state,
                status: "loading",
                error: null,
            }
        },
    }
})

export const { newsLoaded, NewsLoadingFailed, NewsLoading } = newsSlice.actions

export default newsSlice.reducer

export const selectAllnews = (state) => state.news.news;
console.log(selectAllnews);

//export const selectNewsByTitle = (selectAllnews, title) => selectAllnews.filter(newsitem => newsitem.title === title)[0];
