import { combineReducers } from 'redux';
import userReducer from './user';
import variantReducer from './variant';
import variantShareReducer from './variantShare';
import notificationReducer from './notification';
import newsfeedReducer from './newsfeed';

export default combineReducers({
    user: userReducer,
    variants: variantReducer,
    variantShare: variantShareReducer,
    notifications: notificationReducer,
    newsfeeds: newsfeedReducer,
});
