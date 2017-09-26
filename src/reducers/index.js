import { combineReducers } from 'redux';
import books from './reducer_books'
import active_book from './reducer_active_book';

const rootReducer = combineReducers({
  books,
  active_book
});

export default rootReducer;
