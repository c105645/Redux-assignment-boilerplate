import { createSlice } from '@reduxjs/toolkit'
import { getBookmarkedNews } from '../Services/NewsService';
import { saveBookarkedNews } from '../Services/NewsService';
import { deleteBookmarkedNews } from '../Services/NewsService';


const initialState = {
    entities: {},
    status: 'idle',
    error: null,
}


export const fetchBookmarks  = () => async (dispatch) => {
         dispatch(bookmarksLoading());
    try { 
        const response = await getBookmarkedNews();
        dispatch(bookmarksLoaded(response));
    } catch (err) {
        dispatch(bookmarksfailed(err.message));
    }
}


export const addBookmark = (news) => {
    return async function addBookmarkThunk(dispatch) {
        dispatch(bookmarksLoading());
        try {
            const response = await saveBookarkedNews(news);
            dispatch(bookmarkSaved(response));
        } catch (err) {
            dispatch(bookmarksfailed(err.message));
        }
    }
  }


  export function removeBookmark(id) {
    return async function removeBookmarkThunk(dispatch) {
        dispatch(bookmarksLoading());
        try {
            await deleteBookmarkedNews(id);
            dispatch(bookmarkDeleted(id));
        } catch (err) {
            dispatch(bookmarksfailed(err.message));
        }
    }
  }

  const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        bookmarkSaved(state, action) {
            const bookmark = action.payload
            return {
                ...state,
                status: "idle",
                error: null,
                entities: {
                    ...state.entities,
                    [bookmark.title]: bookmark
                }
            }
        },
        bookmarkDeleted(state, action) {
            const id = action.payload;
            const title = Object.values(state.entities).find(ent => ent.id === id).title;
            const { [title]: titlednews, ...rest } = state.entities;
            console.log(titlednews);
            console.log(Object.keys(rest).forEach(res => console.log(rest[res])));
            return {
                ...state,
                status: "idle",
                error: null,
                entities: { ...rest }
            }
        },
        bookmarksLoaded(state, action) {
            const bookmarks = action.payload;
            return {
                ...state,
                status: "idle",
                error: null,
                entities: {
                    ...state.entities,
                    ...bookmarks.reduce(((accum, curr) => {
                        accum = {
                            ...accum, [curr.title]: curr
                        }
                        return accum;
                    }), {})
                }
            }
        },

        bookmarksLoading(state, action) {
            return {
                ...state,
               status: "loading",
               error: null
            }
        },

        bookmarksfailed(state, action) {
            return {
                ...state,
               status: "idle",
               error: action.payload
            }
        },


    },

})

export const { bookmarksLoaded, bookmarkSaved, bookmarkDeleted, bookmarksLoading,  bookmarksfailed} = bookmarksSlice.actions

export default bookmarksSlice.reducer;


export const selectAllBookMarks = (state) => state.bookmarks.entities;

export const selectBookmarkBytitle = (state, title) => state.bookmarks.entities[title];
export const selectBookmarkById = (selectAllBookMarks, id) => selectAllBookMarks.find(news => news.id === id);