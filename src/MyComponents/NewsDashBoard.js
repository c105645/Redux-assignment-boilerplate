import React from 'react';
import NewsItem from './NewsItem';
import './NewsDashBoard.css';
import { addBookmark, removeBookmark, selectAllBookMarks } from '../Slices/BookmarksSlice';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllnews } from '../Slices/NewsSlice'




const NewsDashBoard = () => {
    const dispatch = useDispatch()
    const newsList = useSelector(selectAllnews);
    const bookmarks = useSelector(selectAllBookMarks);

    const DisplayNews = () => {
        console.log(newsList);
        return newsList.map(news =>
            <NewsItem key={news.title} news={news} bookmarkEvt={addOrRemoveBookmark} isBookMarked={bookmarks[news.title] ? true : false} />
        )
    }


    const addOrRemoveBookmark = (news) => bookmarks[news.title] ? removeBookmarks(news) : addBookMarks(news);

    const addBookMarks = (news) => {
        dispatch(addBookmark(news));

    }

    const removeBookmarks = (news) => {
        console.log("removeeeeeeeeee1111");
        console.log(bookmarks[news.title].id);
        const id = bookmarks[news.title].id;
        dispatch(removeBookmark(id))

    }

    return (
        <div className="clspview m-1">
            <DisplayNews />
        </div>
    )

}

export default NewsDashBoard;




