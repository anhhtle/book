import { combineReducers } from 'redux';
import userReducer from './user';
import variantReducer from './variant';
import notificationReducer from './notification';
import newsfeedReducer from './newsfeed';

export default combineReducers({
    user: userReducer,
    variants: variantReducer,
    notifications: notificationReducer,
    newsfeeds: newsfeedReducer
});
