import { combineReducers } from 'redux';
import bookMoviesReducer123 from './../book_movies/duck/reducer'
const rootReducer = combineReducers({
    // Quản lý các child reducer
    // key" value;
    bookMoviesReducer123,
});
export { rootReducer };