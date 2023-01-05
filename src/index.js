import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from 'react-redux';
import store from './app/store'
import {fetchNews} from '../src/Slices/NewsSlice';
import {fetchBookmarks } from '../src/Slices/BookmarksSlice';
import { islogedIn } from '../src/Slices/AuthSlice';



store.dispatch(fetchNews());
store.dispatch(fetchBookmarks());
store.dispatch(islogedIn)


ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    </React.StrictMode>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
