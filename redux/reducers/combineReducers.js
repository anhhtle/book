import { combineReducers } from 'redux';
import userReducer from './user';
import variantReducer from './variant';
import variantShareReducer from './variantShare';
import notificationReducer from './notification';
import newsfeedReducer from './newsfeed';
import avatarReducer from './avatar';

export default combineReducers({
    avatars: avatarReducer,
    newsfeeds: newsfeedReducer,
    notifications: notificationReducer,
    user: userReducer,
    variants: variantReducer,
    variantShare: variantShareReducer,
});
