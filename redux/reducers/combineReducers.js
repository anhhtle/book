import { combineReducers } from 'redux';
import userReducer from './user';
import variantReducer from './variant';
import variantShareReducer from './variantShare';
import notificationReducer from './notification';
import newsfeedReducer from './newsfeed';
import bookmarkReducer from './bookmark';

export default combineReducers({
    user: userReducer,
    bookmarks: bookmarkReducer,
    newsfeeds: newsfeedReducer,
    notifications: notificationReducer,
    variants: variantReducer,
    variantShare: variantShareReducer,
});
